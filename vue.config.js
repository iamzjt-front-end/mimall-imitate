module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'views': '@/views',
        'components': '@/components',
        'common': '@/common',
        'network': '@/network',
        'assets': '@/assets'
      }
    }
  },
  productionSourceMap: false, // 隐藏打包后的源码
  outputDir: 'dist', //build输出目录
  assetsDir: 'assets', //静态资源目录（js, css, img）
  lintOnSave: false, //是否开启eslint
  devServer: {
    open: true, //是否自动弹出浏览器页面
    host: "127.0.0.1",
    port: '80',
    https: false, //是否使用https协议
    hotOnly: true, //是否开启热更新
    proxy: {
      '/mi': {
        target: 'http://mi.rzi2016.online/mi/', //API服务器的地址
        changeOrigin: true,
        pathRewrite: {
          '^/mi': ''
        }
      },
    },
  },

  chainWebpack: config => {
    // 发布模式
    config.when(process.env.NODE_ENV === 'production', config => {
      config.plugins.delete('prefetch');
      config.entry('app').clear().add('./src/main.js')

      config.set('externals', {
        vue: 'Vue',
        vuex: 'Vuex',
        'vue-lazyload':'VueLazyload',
        'vue-router': 'VueRouter',
        axios: 'axios',
        nprogress: 'NProgress',
      })

      config.plugin('html').tap(args => {
        args[0].isProd = true
        return args
      })
    })

    // 开发模式
    config.when(process.env.NODE_ENV === 'development', config => {
      config.plugins.delete('prefetch');
      config.entry('app').clear().add('./src/main.js')

      config.plugin('html').tap(args => {
        args[0].isProd = false
        return args
      })
    })
  }
}