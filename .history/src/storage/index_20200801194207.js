/**
 * Storage封装
 */
const STORAGE_KEY = 'mall';
export default {
	// 存储值
	setItem() {},
	// 获取某一个模块下面的值
	getItem(key, module_name) {
		if (module_name) {
			let val = this.getItem(module_name);
			if (val) return val[key];
		}
		return this.getStorage()[key];
	},
	// 获取浏览器中的缓存信息
	getStorage() {
		return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
	},
	// 清空某一个值
	clear() {},
};
