/**
 * Storage封装
 */
const STORAGE_KEY = 'mall';
export default {
	// 存储值
	setItem() {},
	getItem() {},
	getStorage() {
		JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
	},
	clear() {},
};
