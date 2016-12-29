import * as types from '../mutationTypes/DeviceMutationTypes';
import Config from '../../config';

const state = {
	isDesktop: window.innerWidth >= Config.desktopMinWidth
};

const mutations = {

	// 切换到桌面端
	[types.SWITCH_TO_DESKTOP] (state) {
		state.isDesktop = true;
	},

	// 切换到移动端
	[types.SWITCH_TO_MOBILE] (state) {
		state.isDesktop = false;
	}

};

export default {
	state,
	mutations
};