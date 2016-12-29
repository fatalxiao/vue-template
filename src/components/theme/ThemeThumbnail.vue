<template>
	<div class="theme-thumbnail"
	     :class="{'activated': isActivated}"
	     @click="switchTheme">

		<div class="theme">
			<div class="theme-thumbnail-brand"
			     :class="name"></div>
			<div class="theme-thumbnail-nav"
			     :class="name"></div>
			<div class="theme-thumbnail-menu"
			     :class="name"></div>
			<div class="theme-thumbnail-content"
			     :class="name"></div>
		</div>

		<SimpleButton class="title"
		              :value="name"/>

	</div>
</template>

<script type="text/ecmascript-6">
	import SimpleButton from '../button/SimpleButton';

	export default {
		name: 'ThemeThumbnail',
		components: {
			SimpleButton
		},
		props: {
			name: {
				type: String,
				default: ''
			},
			isActivated: {
				type: Boolean,
				default: false
			},
			onChange: Function
		},
		methods: {
			switchTheme() {
				this.onChange && this.onChange(this.name);
			}
		}
	}
</script>

<style scoped>
	@import '../../assets/stylesheets/components/theme/theme-thumbnail.css';
</style>
