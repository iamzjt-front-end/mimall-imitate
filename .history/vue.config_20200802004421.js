module.exports = {
	devServer: {
		host: 'localhost',
		port: 8080,
		proxy: {
			'/api': {
				target: 'url',
				changeOrigin: true,
				pathRewrite: {
					'/api': '',
				},
			},
		},
	},
};
// 注意：在target里面需要写上接口代理的目标地址，这里就不写了，用url代替
