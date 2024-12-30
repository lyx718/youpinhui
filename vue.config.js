module.exports = {
  productionSourceMap: false,
  // 关闭ESLINT校验工具
  lintOnSave: false,
  //配置代理跨域
  devServer: {
    proxy: {
      // 路径有/api就进行代理工作
      "/api": {
        target: "http://39.98.123.211",
      },
    },
  },
};
