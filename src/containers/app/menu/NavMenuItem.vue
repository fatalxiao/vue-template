<template>
    <div class="nav-menu-item">

        <a href="javascript:void(0)"
           class="nav-menu-item-folder"
           :class="{'hasChildren': hasChildren}"
           :disabled="options.disabled"
           @mousedown="menuMousedownHandle">

            <i class="nav-menu-item-icon"
               aria-hidden="true"
               :class="options.iconCls"></i>

            <div class="nav-menu-item-name">
                {{options.text}}
            </div>

            <i class="fa fa-angle-right nav-menu-item-collapse-button"
               aria-hidden="true"
               v-if="hasChildren"
               :class="{'collapsed': childrenVisible}"></i>

        </a>

        <div class="nav-menu-item-children"
             :class="{'visible': childrenVisible}"
             v-if="hasChildren">

            <NavMenuRouter v-for="menu of options.children"
                           v-if="menu.route"
                           :menu="menu"/>

        </div>

    </div>
</template>

<script type="text/ecmascript-6">

    import {mapGetters, mapActions} from 'vuex';

    import NavMenuRouter from './NavMenuRouter';

    export default {
        name: 'NavMenuItem',
        components: {
            NavMenuRouter
        },
        props: {
            options: {
                type: Object,
                default: null
            },
            index: Number,
            activeIndex: Number,
            onTrigger: Function
        },
        data() {
            return {}
        },
        computed: {
            ...mapGetters({
                isDesktop: 'isDesktop'
            }),
            hasChildren() {
                return this.options.children && this.options.children.length > 0;
            },
            childrenVisible() {
                return this.index === this.activeIndex;
            }
        },
        methods: {
            ...mapActions([
                'collapseNavMenu'
            ]),
            menuMousedownHandle() {
                this.onTrigger && !isNaN(this.index) && this.onTrigger(this.index);
            }
        }
    }

</script>