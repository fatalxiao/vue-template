<template>
	<div class="signin-form">

		<TextField class="field"
		           name="username"
		           iconCls="fa fa-user"
		           placeholder="User Name"
		           :value="username"
		           :disabled="loading"
		           :change="usernameChange"
		           :pressEnter="signinValid"/>

		<TextField class="field"
		           type="password"
		           name="password"
		           iconCls="fa fa-lock"
		           placeholder="Password"
		           :value="password"
		           :disabled="loading"
		           :change="passwordChange"
		           :pressEnter="signinValid"/>

		<div class="error-msg">{{errorMsg || signinErrorMsg}}</div>

		<SimpleButton class="sign-in-button"
		              value="Sign in"
		              iconCls="fa fa-sign-in"
		              :disabled="buttonDisabled"
		              :loading="loading"
		              :click="signinValid"/>

	</div>
</template>

<script type="text/ecmascript-6">
	import {mapGetters, mapActions} from 'vuex';
	import * as types from '../../vuex/mutationTypes/UserMutationTypes';
	import Util from '../../vendor/Util';

	import TextField from '../../components/field/TextField';
	import SimpleButton from '../../components/button/SimpleButton';

	export default {
		name: 'Signin',
		components: {
			TextField,
			SimpleButton
		},
		data () {
			return {
				username: '',
				password: '',
				errorMsg: ''
			}
		},
		computed: {
			...mapGetters({
				signinActionType: 'signinActionType',
				signinErrorMsg: 'signinErrorMsg'
			}),
			loading () {
				return this.signinActionType == types.SIGNIN_REQUEST;
			},
			buttonDisabled () {
				return this.loading || this.username == '' || this.password == '';
			}
		},
		methods: {
			...mapActions([
				'signin',
				'resetErrorMsg'
			]),
			usernameChange (e) {
				this.username = e.target.value;
				this.errorMsg = '';
				this.resetErrorMsg();
			},
			passwordChange (e) {
				this.password = e.target.value;
				this.errorMsg = '';
				this.resetErrorMsg();
			},
			signinValid () {
				if (this.username == '') {
					this.errorMsg = 'Please enter user name.';
				} else if (this.password == '') {
					this.errorMsg = 'Please enter password.';
				} else {
					this.errorMsg = '';
					this.signin({
						username: this.username,
						password: this.password,
						successCallback: response => {
							const menu = Util.getFirstMenu(response.data.menu);
							if (menu && menu.route) {
								this.$router.replace(menu.route);
							}
						}
					});
				}
			}
		}
	}
</script>