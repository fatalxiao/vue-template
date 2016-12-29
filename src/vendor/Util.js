import _ from 'lodash';

function isArray(value) {
	return ({}).toString.call(value) === '[object Array]';
}

function getFirstMenu(menu) {

	let result = null;

	while (menu && menu[0]) {
		if (!menu[0].children) {
			result = menu[0];
		}
		menu = menu[0].children;
	}

	return result;

}

function traverseMenu(menu, callback) {

	if (!menu) {
		return;
	}

	if (isArray(menu)) {
		for (let i = 0, len = menu.length; i < len; i++) {
			traverseMenu(menu[i], callback);
		}
	} else {

		callback.call(null, menu);

		if (menu.children && isArray(menu.children) && menu.children.length > 0) {
			for (let i = 0, len = menu.children.length; i < len; i++) {
				traverseMenu(menu.children[i], callback);
			}
		}

	}

}

export default {
	isArray,
	getFirstMenu,
	traverseMenu
};