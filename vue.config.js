// vue-cli的配置文件
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://test.my-site.com",
      },
    },
  },
  configureWebpack: require("./webpack.config"),
  publicPath: process.env.NODE_ENV === 'production'
    ? '/my-site-1/'
    : '/'
};
