const MENU = [{
	iconCls: 'fa fa-list',
	text: 'Table Template',
	children: [{
		text: 'User Table',
		route: '/app/table/user-table'
	}, {
		text: 'Custom Table',
		route: '/app/table/custom-table'
	}]
}, {
	iconCls: 'fa fa-file-text',
	text: 'Form Template',
	children: [{
		text: 'Form Elements',
		route: '/app/form/form-elements'
	}, {
		text: 'Selects',
		route: '/app/form/selects'
	}]
}];

const USER = {
	id: '0',
	name: 'admin',
	type: 'administrator',
	gender: 'male',
	desc: '',
	contacts: [{
		iconCls: 'facebook',
		url: ''
	}, {
		iconCls: 'twitter',
		url: ''
	}, {
		iconCls: 'instagram',
		url: ''
	}],
	token: 'admin',
	menu: MENU
}

export default {

	/**
	 * 登录
	 * @param params
	 * @param successCalllBack
	 * @param failureCallback
	 */
	signin (params, successCalllBack, failureCallback) {

		setTimeout(() => {
			if (params.username == 'admin' && params.password == 'admin') {
				successCalllBack({
					code: '2000',
					msg: '',
					data: USER
				});
			} else {
				failureCallback({
					code: '4001',
					msg: 'Wrong Username or password',
					data: 'Wrong Username or password!'
				});
			}
		}, 2000);

	},

	/**
	 * 验证
	 * @param params
	 * @param successCalllBack
	 * @param failureCallback
	 */
	auth(params, successCalllBack, failureCallback) {
		setTimeout(() => {
			if (params.token == 'admin') {
				successCalllBack({
					code: '2000',
					msg: '',
					data: USER
				});
			} else {
				failureCallback({
					code: '4000',
					msg: 'Auth failure',
					data: 'Auth failure!'
				});
			}
		}, 2000);
	},

	/**
	 * 登出
	 * @param params
	 * @param successCalllBack
	 * @param failureCallback
	 */
	signout (params, successCalllBack, failureCallback) {

		setTimeout(() => {
			if (params.token == 'admin') {
				successCalllBack({
					code: '2000',
					msg: 'OK'
				});
			} else {
				failureCallback({
					code: '4002',
					msg: 'Sign out failure',
					data: 'Sign out failure!'
				});
			}
		}, 2000);

	}
};