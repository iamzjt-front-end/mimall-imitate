import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home.vue';
import Index from '../views/index.vue';
import Product from '../views/product.vue';
import Detail from '../views/detail.vue';
import Cart from '../views/cart.vue';
import Order from '../views/order.vue';
import OrderConfirm from '../views/orderConfirm.vue';
import OrderList from '../views/orderlist.vue';
import OrderPay from '../views/orderpay.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
		children: [
			{
				path: '/index',
				name: 'index',
				component: Index,
			},
			{
				path: '/product/:id',
				name: 'product',
				component: Product,
			},
			{
				path: '/detail/:id',
				name: 'detail',
				component: Detail,
			},
		],
	},
	{
		path: '/cart',
		name: 'cart',
		component: Cart,
	},
	{
		path: '/order',
		name: 'order',
		component: Order,
		children: [
			{
				path: '/list',
				name: 'order-list',
				component: OrderList,
			},
			{
				path: '/confirm',
				name: 'order-confirm',
				component: OrderConfirm,
			},
			{
				path: '/pay',
				name: 'order-pay',
				component: OrderPay,
			},
		],
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
