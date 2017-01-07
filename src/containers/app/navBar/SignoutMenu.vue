<template>
	<div class="signout-menu">

		<div ref="userButton"
		     class="button">
			{{userName}}
			<i class="fa fa-angle-down dropdown-icon"
			   aria-hidden="true"></i>
		</div>

		<Popup ref="userPopup"
		       class="popup"
		       v-if="!userPopupHidden"
		       :disabled="isSignoutLoading">
			<ListItem class="signout"
			          iconCls="fa fa-sign-out"
			          text="Sign Out"
			          :loading="isSignoutLoading"
			          :click="signoutClickHandle"/>
		</Popup>

	</div>
</template>

<script type="text/ecmascript-6">

	import {mapGetters, mapActions} from 'vuex';
	import * as types from '../../../vuex/mutationTypes/UserMutationTypes';

	import Popup from '../../../components/popup/Popup';
	import ListItem from '../../../components/list/ListItem';

	export default {
		name: 'SignoutMenu',
		components: {
			Popup,
			ListItem
		},
		data () {
			return {
				userPopupHidden: true
			}
		},
		computed: {
			...mapGetters({
				signoutActionType: 'signoutActionType'
			}),
			userName(){
				return sessionStorage.getItem('userName') || 'User';
			},
			isSignoutLoading () {
				return this.signoutActionType == types.SIGNOUT_REQUEST;
			}
		},
		methods: {
			...mapActions([
				'signout'
			]),
			signoutClickHandle() {

				const token = sessionStorage.getItem('token');
				if (!token) {
					this.$router.replace('/');
				} else {

					const router = this.$router;

					this.signout({
						token,
						successCallback () {
							router.replace('/');
						}
					});
				}

			},
			mousedownHandle(e) {

				let el = e.target,
					flag = true;

				while (el) {
					if (this.$refs.userPopup && el == this.$refs.userPopup.$el) {
						flag = false;
						break;
					} else if (el == this.$refs.userButton) {
						this.userPopupHidden = !this.userPopupHidden;
						flag = false;
						break;
					}
					el = el.parentNode;
				}

				if (flag) {
					this.userPopupHidden = true;
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

<style scoped>
	@import '../../../assets/stylesheets/containers/app/nav-bar/signout-menu/signout-menu.css';
	@import '../../../assets/stylesheets/containers/app/nav-bar/signout-menu/signout-menu-dark.css';
	@import '../../../assets/stylesheets/containers/app/nav-bar/signout-menu/signout-menu-light.css';
</style>