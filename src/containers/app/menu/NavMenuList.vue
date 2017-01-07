<template>
    <div class="nav-menu-list"
         v-if="menus.length > 0">
        <NavMenuItem v-for="(menu, index) of menus"
                     :options="menu"
                     :index="index"
                     :activeIndex="activeIndex"
                     :onTrigger="toggleMenu"/>
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
            return {
                activeIndex: null
            }
        },
        computed: {
            ...mapGetters({
                userInfo: 'userInfo'
            }),
            menus() {
                return this.userInfo && this.userInfo.menu && this.userInfo.menu.length > 0 ? this.userInfo.menu : [];
            }
        },
        methods: {
            toggleMenu(index) {
                this.activeIndex = this.activeIndex === index ? null : index;
            }
        }
    }

</script>