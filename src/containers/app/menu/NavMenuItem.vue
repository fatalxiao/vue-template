<template>
    <div class="nav-menu-item"
         :class="[options.expanded == true ? 'expand' : 'collapsed', hasChildren ? 'trunk': 'leaf']">

        <div>

            <router-link v-if="options.route"
                         ref="linkRouter"
                         class="nav-menu-item-link"
                         :to="options.route"
                         :disabled="options.disabled"
                         events="mousedown">
                <i class="nav-menu-item-icon"
                   aria-hidden="true"
                   :class="options.iconCls"></i>
                <span class="nav-menu-item-name">
                    {{options.text}}
                </span>
            </router-link>

            <a v-if="!options.route"
               ref="linkA"
               href="javascript:void(0)"
               class="nav-menu-item-link"
               :disabled="options.disabled"
               @mousedown="menuMousedownHandle">
                <i class="nav-menu-item-icon"
                   aria-hidden="true"
                   :class="options.iconCls"></i>
                <span class="nav-menu-item-name">
                    {{options.text}}
                </span>
            </a>

            <i class="nav-menu-item-collapse-button"
               aria-hidden="true"
               v-if="hasChildren"
               :class="[options.expanded == true ? 'fa fa-angle-up': 'fa fa-angle-down']"></i>

        </div>

        <div class="nav-menu-item-children"
             v-if="hasChildren">
            <NavMenuItem v-for="menu of options.children"
                         :options="menu"/>
        </div>

    </div>
</template>

<script type="text/ecmascript-6">

    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: 'NavMenuItem',
        props: {
            options: {
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
            }),
            hasChildren() {
                return this.options && this.options.children && this.options.children.length > 0;
            },
            children() {
                return this.hasChildren ? this.options.children : [];
            }
        },
        methods: {
            ...mapActions([
                'collapseNavMenu',
                'toggleMenu'
            ]),
            menuMousedownHandle(){
                this.toggleMenu({
                    id: this.options.id
                });
            },
            routerLinkActiveHandle() {
                !this.isDesktop && this.collapseNavMenu();
                if (this.options.route) {
                    setTimeout(() => {
                        this.$router.replace(this.options.route);
                    }, 0);
                }
            }
        },
        mounted() {
            this.$refs.linkRouter && this.$refs.linkRouter.$el
            && this.$refs.linkRouter.$el.addEventListener('mousedown', this.routerLinkActiveHandle);
        },
        beforeDestroy() {
            this.$refs.linkRouter && this.$refs.linkRouter.$el
            && this.$refs.linkRouter.$el.removeEventListener('mousedown', this.routerLinkActiveHandle);
        }
    }

</script>