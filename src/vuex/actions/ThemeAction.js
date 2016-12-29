import * as types from '../mutationTypes/ThemeMutationTypes';

/**
 * 切换主题
 * @param commit
 */
export const switchTheme = ({commit}, themeName) => {
	commit({
		type: types.SWITCH_THEME,
		themeName
	});
};