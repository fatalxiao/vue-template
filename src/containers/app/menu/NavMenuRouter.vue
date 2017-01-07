<template>
    <router-link ref="linkRouter"
                 class="nav-menu-item-link"
                 :to="menu.route"
                 :disabled="menu.disabled"
                 events="mousedown">
        <i class="nav-menu-item-icon"
           aria-hidden="true"
           :class="menu.iconCls"></i>
        <div class="nav-menu-item-name">
            {{menu.text}}
        </div>
    </router-link>
</template>

<script type="text/ecmascript-6">

    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: 'NavMenuRouter',
        props: {
            menu: {
                type: Object,
                default: null
            }
        },
        data() {
            return {}
        },
        computed: {
            ...mapGetters({
                isDesktop: 'isDesktop'
            })
        },
        methods: {
            ...mapActions([
                'collapseNavMenu'
            ]),
            linkMousedownHandle() {
                !this.isDesktop && this.collapseNavMenu && this.collapseNavMenu();
            }
        },
        mounted() {
            this.$refs.linkRouter.$el.addEventListener('mousedown', this.linkMousedownHandle);
        },
        beforeDestroy() {
            this.$refs.linkRouter.$el.removeEventListener('mousedown', this.linkMousedownHandle);
        }
    }

</script>