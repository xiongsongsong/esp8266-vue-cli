module.exports = {
  lintOnSave: false,
  chainWebpack: (config, options) => {
    config.optimization.splitChunks({
      minChunks: Infinity
    })
  }
}
