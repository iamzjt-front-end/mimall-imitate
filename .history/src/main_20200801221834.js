import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
// 这个插件就是把axios挂载到vue实例上去，然后用this调用，不用每个页面都导一下axios，方便点

axios.interceptors.response.use(function(response) {
	let res = response.data; // 获取接口返回值
	if (res.status == 0) {
	}
});

Vue.use(VueAxios, axios);
Vue.config.productionTip = false; // 生产环境提示

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
