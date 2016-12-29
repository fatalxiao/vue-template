<template>
	<i class="menu-ctrl-button"
	   aria-hidden="true"
	   :class="menuCtrlIconcls"
	   @click="toggleNavMenu"></i>
</template>

<script type="text/ecmascript-6">
	import {mapGetters, mapActions} from 'vuex';

	export default {
		name: 'MenuCtrlButton',
		computed: {
			...mapGetters({
				navMenuCollapsed: 'navMenuCollapsed'
			}),
			menuCtrlIconcls () {
				return this.navMenuCollapsed ? 'fa fa-arrow-right' : 'fa fa-arrow-left';
			}
		},
		methods: {
			...mapActions([
				'toggleNavMenu'
			])
		}
	}
</script>
