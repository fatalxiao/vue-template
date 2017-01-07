<template>
	<div class="app"
	     :class="{'collapsed': navMenuCollapsed}">

		<NavMenu/>

		<div class="content-wrap"
		     @mousedown="contentMousedownHandle">

			<NavBar/>

			<div class="content">

				<router-view class="content-router-view"></router-view>

				<div class="copyright">
					Copyright &copy; 2016-2017 Brand Co.,Ltd. All rights reserved.
				</div>

			</div>

		</div>

	</div>
</template>

<script type="text/ecmascript-6">

	import {mapGetters, mapActions} from 'vuex';

	import NavBar from './navBar/NavBar';
	import NavMenu from './menu/NavMenu';

	export default {
		name: 'App',
		components: {
			NavBar,
			NavMenu
		},
		computed: {
			...mapGetters({
				isDesktop: 'isDesktop',
				navMenuCollapsed: 'navMenuCollapsed'
			})
		},
		methods: {
			...mapActions([
				'collapseNavMenu',
				'expandNavMenu'
			]),
			contentMousedownHandle(e) {
				// e.stopPropagation();
				if (!this.isDesktop && !this.navMenuCollapsed) {
					this.collapseNavMenu();
				}
			}
		},
		created () {

			const navMenuCollapsed = localStorage.getItem('navMenuCollapsed');

			if (navMenuCollapsed == '1') {
				this.collapseNavMenu();
			} else if (navMenuCollapsed == '0') {
				this.expandNavMenu();
			}

		}
	}

</script>

<style scoped>
	@import '../../assets/stylesheets/containers/app/app.css';

</style>