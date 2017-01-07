import _ from 'lodash';
import * as types from '../mutationTypes/UserMutationTypes';
import Util from '../../vendor/Util';

const state = {
	userInfo: null,
	signinActionType: '',
	signinErrorMsg: '',
	authActionType: '',
	signoutActionType: ''
};

const mutations = {

	// 登录
	[types.SIGNIN_REQUEST] (state) {
		state.userInfo = null;
		state.signinActionType = types.SIGNIN_REQUEST;
		state.signinErrorMsg = '';
	},
	[types.SIGNIN_SUCCESS] (state, info) {

		state.userInfo = info.response.data;
		state.signinActionType = types.SIGNIN_SUCCESS;
		state.signinErrorMsg = '';

		sessionStorage.setItem('userId', state.userInfo.id);
		sessionStorage.setItem('userName', state.userInfo.name);
		sessionStorage.setItem('token', state.userInfo.token);

	},
	[types.SIGNIN_FAILURE] (state, info) {
		state.userInfo = null;
		state.signinActionType = types.SIGNIN_FAILURE;
		state.signinErrorMsg = info.response.msg;
	},

	// 验证
	[types.AUTH_REQUEST] (state) {
		state.userInfo = null;
		state.authActionType = types.AUTH_REQUEST;
	},
	[types.AUTH_SUCCESS] (state, info) {
		state.userInfo = info.response.data;
		state.authActionType = types.AUTH_SUCCESS;
	},
	[types.AUTH_FAILURE] (state) {
		state.userInfo = null;
		state.authActionType = types.AUTH_FAILURE;
	},

	// 登出
	[types.SIGNOUT_REQUEST] (state) {
		state.signoutActionType = types.SIGNOUT_REQUEST;
	},
	[types.SIGNOUT_SUCCESS] (state) {
		state.userInfo = null;
		state.signoutActionType = types.SIGNOUT_SUCCESS;
		sessionStorage.removeItem('userId');
		sessionStorage.removeItem('userName');
		sessionStorage.removeItem('token');
		sessionStorage.removeItem('activeMenuId');
	},
	[types.SIGNOUT_FAILURE] (state) {
		state.signoutActionType = types.SIGNOUT_FAILURE;
	},

	// 重置 error msg
	[types.RESET_ERROR_MSG] (state) {
		state.signinErrorMsg = '';
	}

};

export default {
	state,
	mutations
};