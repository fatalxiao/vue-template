import Root from './containers/Root';
import Signin from './containers/signin/Signin';
import App from './containers/app/App';
import FormTemplate from './containers/app/modules/form/FormTemplate';
import TableTemplate from './containers/app/modules/table/TableTemplate';
import UserTable from './containers/app/modules/table/UserTable';

function requireAuth(to, from, next) {
	if (sessionStorage.getItem('token')) {
		next();
	} else {
		next({
			path: '/',
			query: {redirect: to.fullPath}
		});
	}
}

const router = [{
	path: '',
	component: Root,
	redirect: 'signin'
}, {
	path: '/',
	component: Root,
	redirect: 'signin',
	children: [{
		path: 'signin',
		component: Signin
	}, {
		path: 'app',
		component: App,
		beforeEnter: requireAuth,
		redirect: 'app/table',
		children: [{
			path: 'table',
			component: TableTemplate,
			redirect: 'table/user-table',
			children: [{
				path: 'user-table',
				component: UserTable,
			}, {
				path: 'custom-table',
				component: UserTable,
			}]
		}, {
			path: 'form',
			component: TableTemplate,
			redirect: 'form/form-elements',
			children: [{
				path: 'form-elements',
				component: UserTable,
			}, {
				path: 'selects',
				component: UserTable,
			}]
		}]
	}]
}];

// router.beforeEach((to, from, next) => {
//
// });
// router.afterEach(route => {
//
// });

export default router;