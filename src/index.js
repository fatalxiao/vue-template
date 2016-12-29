import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './vuex/store';

import routes from './config.route';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes
});

new Vue({
	router,
	store,
	template: '<router-view></router-view>'
}).$mount('#root');