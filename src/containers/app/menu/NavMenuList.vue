<template>
    <div class="nav-menu-list"
         v-if="menus.length > 0">
        <NavMenuItem v-for="menu of menus"
                     :options="menu"/>
    </div>
</template>

<script type="text/ecmascript-6">

    import {mapGetters, mapActions} from 'vuex';

    import NavMenuItem from './NavMenuItem';

    export default {
        name: 'NavMenuList',
        components: {
            NavMenuItem
        },
        data () {
            return {}
        },
        computed: {
            ...mapGetters({
                userInfo: 'userInfo'
            }),
            menus() {
                return this.userInfo && this.userInfo.menu && this.userInfo.menu.length > 0 ? this.userInfo.menu : [];
            }
        }
    }

</script>