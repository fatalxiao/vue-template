<template>
    <div class="nav-menu-user"
         :class="{'collapsed': userMenuCollapsed}">

        <i class="fa fa-user user-avatar"
           aria-hidden="true"></i>

        <div class="user-name">
            {{userName}}
        </div>
        <div class="user-desc">
            <span>{{userType}}</span>
            <i class="fa user-gender"
               aria-hidden="true"
               :class="[userGenderIconCls]"></i>
        </div>
        <div class="user-contacts">
            <a v-for="item of userContacts"
               :href="item.url">
                <i class="fa"
                   aria-hidden="true"
                   :class="['fa-' + item.iconCls]"></i>
            </a>
        </div>

        <i class="fa fa-angle-up user-menu-collapse-button"
           :class="{'collapsed': userMenuCollapsed}"
           aria-hidden="true"
           @mousedown="toggleUserMenu"></i>

    </div>
</template>

<script type="text/ecmascript-6">

    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: 'UserMenu',
        computed: {
            ...mapGetters({
                userInfo: 'userInfo',
                userMenuCollapsed: 'userMenuCollapsed'
            }),
            userName() {
                return this.userInfo && this.userInfo.name ? this.userInfo.name : 'User';
            },
            userType() {
                return this.userInfo && this.userInfo.type ? this.userInfo.type : '';
            },
            userGenderIconCls() {
                return this.userInfo && this.userInfo.gender ?
                        (this.userInfo.gender === 'male' ? 'fa-mars' : 'fa-venus')
                        :
                        'fa-genderless';
            },
            userContacts() {
                return this.userInfo && this.userInfo.contacts ? this.userInfo.contacts : [];
            }
        },
        methods: {
            ...mapActions([
                'toggleUserMenu'
            ])
        }
    }

</script>