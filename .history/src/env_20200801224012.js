let baseURL;
switch (process.env.NODE_ENV) {
	case 'dev':
		baseURL = 'http://dev-mall-pre.springboot.cn/api';
		break;
	case 'test':
		baseURL = 'http://test-mall-pre.springboot.cn/api';
		break;
	case 'prod':
		baseURL = 'http://prod-mall-pre.springboot.cn/api';
		break;

	default:
		break;
}

export default {
	baseURL,
};
