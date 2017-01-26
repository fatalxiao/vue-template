<template>
	<div class="brand">

		<i class="fa fa-bars menu-toggle-button"
		   aria-hidden="true"
		   @mousedown="menuToggleButtonMousedownHandle"></i>

		<div class="brand-name">
			<i class="fa fa-th"
			   aria-hidden="true"></i>
			<span>Brand</span>
		</div>

	</div>
</template>

<script type="text/ecmascript-6">

	import {mapGetters, mapActions} from 'vuex';
	import * as types from '../../../vuex/mutationTypes/UserMutationTypes';

	export default {
		name: 'Brand',
		methods: {
			...mapActions([
				'toggleNavMenu'
			]),
			menuToggleButtonMousedownHandle(e) {
				e.stopPropagation();
				this.toggleNavMenu();
			}
		}
	}

</script>

<style scoped>
	@import '../../../assets/stylesheets/containers/app/nav-bar/brand/brand.css';
	@import '../../../assets/stylesheets/containers/app/nav-bar/brand/brand-dark.css';
	@import '../../../assets/stylesheets/containers/app/nav-bar/brand/brand-light.css';
</style>