<template>
    <div id="root"
         :class="['theme-' + themeName]">

        <transition name="fade"
                    mode="out-in">
            <router-view></router-view>
        </transition>

        <transition name="fade">
            <div class="root-loading"
                 v-if="rootLoadingVisible">
                <i class="fa fa-cog fa-spin"></i>
            </div>
        </transition>

    </div>
</template>

<script type="text/ecmascript-6">

    import {mapGetters, mapActions} from 'vuex';
    import * as types from '../vuex/mutationTypes/UserMutationTypes';
    import Config from '../config';

    export default {
        name: 'Root',
        computed: {
            ...mapGetters({
                authActionType: 'authActionType',
                isDesktop: 'isDesktop',
                themeName: 'themeName'
            }),
            rootLoadingVisible() {
                return this.authActionType === types.AUTH_REQUEST;
            }
        },
        methods: {
            ...mapActions([
                'auth',
                'switchToDesktop',
                'switchToMobile'
            ]),
            loadUserInfo() {

                const token = sessionStorage.getItem('token'),
                        router = this.$router;

                if (!token) {
                    router.replace('/');
                } else {
                    this.auth({
                        token,
                        failureCallback() {
                            router.replace('/');
                        }
                    });
                }

            },
            resizeHandle() {
                window.innerWidth >= Config.desktopMinWidth ?
                        (!this.isDesktop && this.switchToDesktop())
                        :
                        (this.isDesktop && this.switchToMobile());
            }
        },
        created() {

            this.loadUserInfo();

            window.addEventListener('resize', this.resizeHandle);

        },
        beforeDestroy() {
            window.removeEventListener('resize', this.resizeHandle);
        }
    }

</script>

<style>
	@import '../assets/stylesheets/font-awesome.min.css';
	@import '../assets/stylesheets/global.css';
</style>

<style scoped>
	@import '../assets/stylesheets/Root.css';
</style>
