/**
 * Storage封装
 */
const STORAGE_KEY = 'mall';
export default {
	// 存储值
	setItem() {},
	getItem(key) {
		return this.getStorage()[key];
	},
	getStorage() {
		return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
	},
	clear() {},
};
