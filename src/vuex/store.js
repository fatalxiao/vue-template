import Vue from 'vue';
import Vuex from 'vuex';

import * as DeviceAction from './actions/DeviceAction';
import * as MenuAction from './actions/MenuAction';
import * as ThemeAction from './actions/ThemeAction';
import * as UserAction from './actions/UserAction';
import * as TableAction from './actions/TableAction';

import * as DeviceGetters from './getters/DeviceGetters';
import * as MenuGetters from './getters/MenuGetters';
import * as ThemeGetters from './getters/ThemeGetters';
import * as UserGetters from './getters/UserGetters';
import * as TableGetters from './getters/TableGetters';

import Device from './modules/Device';
import Menu from './modules/Menu';
import Theme from './modules/Theme';
import User from './modules/User';
import Table from './modules/Table';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

/**
 * 创建store
 */
export default new Vuex.Store({
	actions: {
		...DeviceAction,
		...MenuAction,
		...ThemeAction,
		...UserAction,
		...TableAction
	},
	getters: {
		...DeviceGetters,
		...MenuGetters,
		...ThemeGetters,
		...UserGetters,
		...TableGetters
	},
	modules: {
		Device,
		Menu,
		Theme,
		User,
		Table
	},
	strict: debug
});