/**
 * Storage封装
 */
const STORAGE_KEY = 'mall';
export default {
	// 存储值
	setItem() {},
	// 获取某一个模块下面的属性user下面的username
	getItem(key, module_name) {
		if (module_name) {
			let val = this.getItem(module_name);
			if (val) return val[key];
		}
		return this.getStorage()[key];
	},
	getStorage() {
		return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
	},
	clear() {},
};
