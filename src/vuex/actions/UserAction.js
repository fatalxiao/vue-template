import UserApi from '../../api/UserApi';
import * as appTypes from '../mutationTypes/MenuMutationTypes';
import * as types from '../mutationTypes/UserMutationTypes';
import Util from '../../vendor/Util';

/**
 * 登录
 * @param commit
 * @param params
 */
export const signin = ({commit}, params) => {
	commit({
		type: types.SIGNIN_REQUEST
	});
	UserApi.signin(params, response => {
		commit({
			type: types.SIGNIN_SUCCESS,
			response
		});
		commit({
			type: types.EXPAND_MENU,
			id: Util.getFirstMenu(response.data.menu).id
		});
		params.successCallback && params.successCallback(response);
	}, response => {
		commit({
			type: types.SIGNIN_FAILURE,
			response
		});
		params.failureCallback && params.failureCallback(response);
	});
};

/**
 * 验证
 * @param commit
 * @param params
 */
export const auth = ({commit}, params) => {
	commit({
		type: types.AUTH_REQUEST
	});
	UserApi.auth(params, response => {
		commit({
			type: types.AUTH_SUCCESS,
			response
		});
		params.successCallback && params.successCallback(response);
	}, response => {
		commit({
			type: types.AUTH_FAILURE,
			response
		});
		params.failureCallback && params.failureCallback(response);
	});
};

/**
 * 登出
 * @param commit
 * @param params
 */
export const signout = ({commit}, params) => {
	commit({
		type: types.SIGNOUT_REQUEST
	});
	UserApi.signout(params, response => {
		commit({
			type: types.SIGNOUT_SUCCESS,
			response
		});
		params.successCallback && params.successCallback(response);
	}, response => {
		commit({
			type: types.SIGNOUT_FAILURE,
			response
		});
		params.failureCallback && params.failureCallback(response);
	});
};

/**
 * 重置错误信息
 * @param commit
 */
export const resetErrorMsg = ({commit}) => {
	commit({
		type: types.RESET_ERROR_MSG
	});
};

/**
 * 折叠用户菜单
 * @param commit
 */
export const collapseMenu = ({commit}, params) => {
	commit({
		type: types.COLLAPSE_MENU,
		id: params.id
	});
};

/**
 * 展开用户菜单
 * @param commit
 */
export const expandMenu = ({commit}, params) => {
	commit({
		type: types.EXPAND_MENU,
		id: params.id
	});
};

/**
 * 折叠／展开用户菜单
 * @param commit
 */
export const toggleMenu = ({commit}, params) => {
	commit({
		type: types.TOGGLE_MENU,
		id: params.id
	});
};