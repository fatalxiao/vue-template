<template>
	<div class="nav">

		<Brand/>

		<div class="nav-collapse floatfix">

			<div class="left">
				<MenuCtrlButton/>
			</div>

			<div class="right">
				<ThemeMenu/>
				<SignoutMenu/>
			</div>

		</div>

	</div>
</template>

<script type="text/ecmascript-6">

	import {mapGetters, mapActions} from 'vuex';

	import Brand from './Brand';
	import MenuCtrlButton from './MenuCtrlButton';
	import ThemeMenu from './ThemeMenu';
	import SignoutMenu from './SignoutMenu';

	export default {
		name: 'NavBar',
		components: {
			Brand,
			MenuCtrlButton,
			ThemeMenu,
			SignoutMenu
		}
	}

</script>

<style scoped>
	@import '../../../assets/stylesheets/containers/app/nav-bar/nav/nav.css';
	@import '../../../assets/stylesheets/containers/app/nav-bar/nav/nav-dark.css';
	@import '../../../assets/stylesheets/containers/app/nav-bar/nav/nav-light.css';
</style>