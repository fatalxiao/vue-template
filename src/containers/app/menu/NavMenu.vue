<template>
    <div class="nav-menu">

        <UserMenu/>

        <NavMenuList/>

    </div>
</template>

<script type="text/ecmascript-6">

    import {mapGetters, mapActions} from 'vuex';

    import UserMenu from './UserMenu';
    import NavMenuList from './NavMenuList';

    export default {
        name: 'NavMenu',
        components: {
            UserMenu,
            NavMenuList
        }
    }

</script>

<style scoped>
	@import '../../../assets/stylesheets/containers/app/nav-menu/nav-menu.css';
	@import '../../../assets/stylesheets/containers/app/nav-menu/nav-menu-dark.css';
	@import '../../../assets/stylesheets/containers/app/nav-menu/nav-menu-light.css';
</style>