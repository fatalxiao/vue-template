<template>
	<div class="signin-theme">

		<div ref="themeButton"
		     class="signin-theme-button">
			Theme -
			{{themeName}}
			<i class="fa fa-angle-down signin-theme-collapse-button"
			   :class="{'collapsed': themePopupHidden}"
			   aria-hidden="true"></i>
		</div>

		<Popup ref="themePopup"
		       class="signin-theme-popup"
		       v-if="!themePopupHidden">
			<ThemeThumbnail v-for="(item, $index) of themeList"
			                :key="$index"
			                :name="item.name"
			                :isActivated="item.name == themeName"
			                :onChange="themeChangeHandle"/>
		</Popup>

	</div>
</template>

<script type="text/ecmascript-6">

	import {mapGetters, mapActions} from 'vuex';

	import Popup from '../../components/popup/Popup';
	import ThemeThumbnail from '../../components/theme/ThemeThumbnail';

	export default {
		name: 'SigninTheme',
		components: {
			Popup,
			ThemeThumbnail
		},
		data() {
			return {
				themePopupHidden: true
			};
		},
		computed: {
			...mapGetters({
				themeList: 'themeList',
				themeName: 'themeName'
			})
		},
		methods: {
			...mapActions([
				'switchTheme'
			]),
			themeChangeHandle(themeName) {
				this.switchTheme(themeName);
			},
			mousedownHandle(e) {

				let el = e.target,
					flag = true;

				while (el) {
					if (this.$refs.themePopup && el == this.$refs.themePopup.$el) {
						flag = false;
						break;
					} else if (el == this.$refs.themeButton) {
						this.themePopupHidden = !this.themePopupHidden;
						flag = false;
						break;
					}
					el = el.parentNode;
				}

				if (flag) {
					this.themePopupHidden = true;
				}

			}
		},
		created() {
			document.addEventListener('mousedown', this.mousedownHandle);
		},
		destroyed() {
			document.removeEventListener('mousedown', this.mousedownHandle);
		}
	}

</script>