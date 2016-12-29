<template>

    <div class="theme-menu">

        <div ref="themeButton"
             class="button">
            Theme
            <i class="fa fa-angle-down dropdown-icon"
               aria-hidden="true"></i>
        </div>

        <DropdownMenu ref="themeDropdownMenu"
                      class="theme-dropdown-menu floatfix"
                      :isActivated="!dropdownMenuHidden">

            <div class="theme-thumbnail-wrapper">
                <ThemeThumbnail v-for="(item, $index) of themeList"
                                :key="$index"
                                :name="item.name"
                                :isActivated="item.name == themeName"
                                :onChange="themeChangeHandle"/>
            </div>

        </DropdownMenu>

    </div>

</template>

<script type="text/ecmascript-6">

    import {mapGetters, mapActions} from 'vuex';

    import DropdownMenu from '../../../components/dropdown/DropdownMenu';
    import ThemeThumbnail from '../../../components/theme/ThemeThumbnail';

    export default {
        name: 'ThemeButton',
        components: {
            DropdownMenu,
            ThemeThumbnail
        },
        data() {
            return {
                dropdownMenuHidden: true
            }
        },
        computed: {
            ...mapGetters({
                themeList: 'themeList',
                themeName: 'themeName'
            })
        },
        methods: {
            ...mapActions([
                'switchTheme'
            ]),
            themeChangeHandle(themeName) {
                this.switchTheme(themeName);
            },
            mousedownHandle(e) {

                let el = e.target,
                        flag = true;

                while (el) {
                    if (this.$refs.themeDropdownMenu
                            && (el == this.$refs.themeDropdownMenu || el == this.$refs.themeDropdownMenu.$el)) {
                        flag = false;
                        break;
                    } else if (this.$refs.themeButton
                            && (el == this.$refs.themeButton || el == this.$refs.themeButton.$el)) {
                        this.dropdownMenuHidden = !this.dropdownMenuHidden;
                        flag = false;
                        break;
                    }
                    el = el.parentNode;
                }

                if (flag) {
                    this.dropdownMenuHidden = true;
                }

            }
        },
        created() {
            document.addEventListener('mousedown', this.mousedownHandle);
        },
        destroyed() {
            document.removeEventListener('mousedown', this.mousedownHandle);
        }
    }

</script>

<style scoped>
	@import '../../../assets/stylesheets/containers/app/nav-bar/theme-menu/theme-menu.css';
	@import '../../../assets/stylesheets/containers/app/nav-bar/theme-menu/theme-menu-dark.css';
	@import '../../../assets/stylesheets/containers/app/nav-bar/theme-menu/theme-menu-light.css';
</style>