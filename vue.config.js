const { defineConfig } = require("@vue/cli-service")
const path = require("path")

// eslint-disable-next-line no-unused-vars
const resolve = (dir) => path.join(__dirname, ".", dir)
// 获取代理地址
console.log(process.env.VUE_APP_BASE_API)
// 获取代理地址
console.log(process.env.VUE_APP_BASE_URL)
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 项目的根目录访问路径
  publicPath: "/",
  // 打包输出文件路径
  outputDir: "distsss",
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: "assets",
  // 用来配置跨域，启动项目端口号，启动项目是否直接打开浏览器，以及http配置
  devServer: {
    //开发运行时的端口
    port: 8090,
    // 开发运行时域名，设置成'0.0.0.0',在同一个局域网下，如果你的项目在运行，同时可以通过你的http://ip:port/...访问你的项目
    host: "0.0.0.0",
    // 是否启用 https
    https: false,
    // npm run serve 时是否直接打开浏览器
    open: true,
    proxy: {
      // "/api": {
      //   // 配置代理默认开启target方式
      //   changeOrigin: true,
      //   //  如果是http接口，需要配置该参数
      //   secure: false,
      //   target: "https://www.baidu.com",
      //   pathRewrite: {
      //     "^/api": ""
      //   }
      // }
      // 动态代理标识
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_BASE_URL,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      }
    }
  },
  //路径别名
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        "@component": resolve("src/compoents"),
        vue$: "vue/dist/vue.esm.js"
      }
    }
  },
  // 配置loader和plugins
  chainWebpack(config) {
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap((options) => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()
    // .rule("scss")
    // .use("style-loader")
    // .loader("style-loader")
    // .end()
    // 配置plugins--上线发版的时候清除console.log
    // eslint-disable-next-line no-undef
    // config.plugin("gotHash").use(HotHashWebpackPlugin, [{ version: "1.0.0" }])
  }
})
