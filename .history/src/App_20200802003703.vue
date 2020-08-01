<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
import storage from './storage/index';

export default {
	name: 'App',
	components: {},
	data() {
		return {
			res: {},
		};
	},
	mounted() {
		// console.log(storage);
		// storage.setItem('a', 1);
		// storage.setItem('user', { a: 1 }, 'user');
		// 本地加载请求静态json文件的方式
		// this.axios.get('/mock/user/login.json').then((res) => {
		// 	this.res = res;
		// });
		// 通过easy-mock平台实现mock
		this.axios.get('/mock/user/login.json').then((res) => {
			this.res = res;
		});
		// 本地集成mock.js
		this.axios.get('/mock/user/login.json').then((res) => {
			this.res = res;
		});
	},
};
</script>

<style></style>
