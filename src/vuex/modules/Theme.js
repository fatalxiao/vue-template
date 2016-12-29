import * as types from '../mutationTypes/ThemeMutationTypes';

const THEME_LIST = [{
	name: 'light'
}, {
	name: 'dark'
}];
const DEFAULT_THEME_NAME = 'light';

const state = {
	defaultThemeName: DEFAULT_THEME_NAME,
	themeList: THEME_LIST,
	themeName: localStorage.getItem('theme') || DEFAULT_THEME_NAME
};

const mutations = {

	// 切换主题
	[types.SWITCH_THEME] (state, info) {
		state.themeName = info.themeName || DEFAULT_THEME_NAME;
		localStorage.setItem('theme', state.themeName);
	}

};

export default {
	state,
	mutations
};