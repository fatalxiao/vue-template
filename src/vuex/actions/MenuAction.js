import * as types from '../mutationTypes/MenuMutationTypes';

/**
 * 折叠导航菜单
 * @param commit
 */
export const collapseNavMenu = ({commit}) => {
	commit({
		type: types.COLLAPSE_NAV_MENU
	});
};

/**
 * 展开导航菜单
 * @param commit
 */
export const expandNavMenu = ({commit}) => {
	commit({
		type: types.EXPAND_NAV_MENU
	});
};

/**
 * 折叠／展开导航菜单
 * @param commit
 */
export const toggleNavMenu = ({commit}) => {
	commit({
		type: types.TOGGLE_NAV_MENU
	});
};

/**
 * 折叠用户菜单
 * @param commit
 */
export const collapseUserMenu = ({commit}) => {
	commit({
		type: types.COLLAPSE_USER_MENU
	});
};

/**
 * 展开用户菜单
 * @param commit
 */
export const expandUserMenu = ({commit}) => {
	commit({
		type: types.EXPAND_USER_MENU
	});
};

/**
 * 折叠／展开用户菜单
 * @param commit
 */
export const toggleUserMenu = ({commit}) => {
	commit({
		type: types.TOGGLE_USER_MENU
	});
};