import * as deviceTypes from '../mutationTypes/DeviceMutationTypes';
import * as menuTypes from '../mutationTypes/MenuMutationTypes';

/**
 * 切换到桌面端
 * @param commit
 */
export const switchToDesktop = ({commit}) => {
	commit({
		type: deviceTypes.SWITCH_TO_DESKTOP
	});
};

/**
 * 切换到移动端
 * @param commit
 */
export const switchToMobile = ({commit}) => {
	commit({
		type: deviceTypes.SWITCH_TO_MOBILE
	});
	commit({
		type: menuTypes.COLLAPSE_NAV_MENU
	});
};