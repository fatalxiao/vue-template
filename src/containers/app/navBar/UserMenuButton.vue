<template>
	<i class="user-menu-button"
	   aria-hidden="true"
	   :class="iconcls"
	   @click="toggleUserMenu"></i>
</template>

<script type="text/ecmascript-6">

	import {mapGetters, mapActions} from 'vuex';

	export default {
		name: 'UserMenuButton',
		computed: {
			...mapGetters({
				userMenuCollapsed: 'userMenuCollapsed'
			}),
			iconcls () {
				return this.userMenuCollapsed ? 'fa fa-user-o' : 'fa fa-user';
			}
		},
		methods: {
			...mapActions([
				'toggleUserMenu'
			])
		}
	}

</script>
