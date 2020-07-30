/**
 * Storage封装
 */
const STORAGE_KEY = 'mall';
export default {
	// 存储值
	setItem() {},
	getItem(key, module_name) {
		if (module_name) {
			return this.getStorage(module_name)[key];
			let val = this.getItem();
		}
	},
	getStorage() {
		return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
	},
	clear() {},
};
