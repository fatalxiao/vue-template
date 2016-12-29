import * as types from '../mutationTypes/MenuMutationTypes';

const userMenuCollapsed = localStorage.getItem('userMenuCollapsed');
const state = {
	navMenuCollapsed: true,
	userMenuCollapsed: userMenuCollapsed !== null ? (userMenuCollapsed === '1' ? true : false) : true
};

const mutations = {

	// 折叠菜单
	[types.COLLAPSE_NAV_MENU] (state) {
		state.navMenuCollapsed = true;
		localStorage.setItem('navMenuCollapsed', '1');
	},

	// 展开菜单
	[types.EXPAND_NAV_MENU] (state) {
		state.navMenuCollapsed = false;
		localStorage.setItem('navMenuCollapsed', '0');
	},

	// 展开菜单
	[types.TOGGLE_NAV_MENU] (state) {
		state.navMenuCollapsed = !state.navMenuCollapsed;
		localStorage.setItem('navMenuCollapsed', state.navMenuCollapsed ? '1' : '0');
	},

	// 显示用户菜单
	[types.EXPAND_USER_MENU] (state) {
		state.userMenuCollapsed = false;
		localStorage.setItem('userMenuCollapsed', '0');
	},

	// 隐藏用户菜单
	[types.COLLAPSE_USER_MENU] (state) {
		state.userMenuCollapsed = true;
		localStorage.setItem('userMenuCollapsed', '1');
	},

	// 显示/隐藏用户菜单
	[types.TOGGLE_USER_MENU] (state) {
		state.userMenuCollapsed = !state.userMenuCollapsed;
		localStorage.setItem('userMenuCollapsed', state.userMenuCollapsed ? '1' : '0');
	}

};

export default {
	state,
	mutations
};