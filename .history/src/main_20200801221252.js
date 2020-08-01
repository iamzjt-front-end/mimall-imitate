import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
// 这个插件就是把axios挂载到vue实例上去，然后用this调用，不用每个页面都导一下axios，方便点

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
