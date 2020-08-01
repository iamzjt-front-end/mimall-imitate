import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
// 这个插件就是把axios挂载到vue实例上去，然后用this调用，不用每个页面都导一下axios，方便点
import VueAxios from 'vue-axios';
// import env from './env';

cosnt mock = true;
if (mock) {
	require()
}

// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
// 接口错误拦截
axios.interceptors.response.use(function(response) {
	let res = response.data; // 获取接口返回值
	if (res.status == 0) {
		// status状态码是0就代表成功
		return res.data;
	} else if (res.status == 10) {
		// 状态码10是未登录
		window.localtion.href = '/#/login';
	} else {
		alert(res.msg);
	}
});

Vue.use(VueAxios, axios);
Vue.config.productionTip = false; // 生产环境提示

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
