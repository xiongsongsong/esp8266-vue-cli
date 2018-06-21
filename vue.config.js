module.exports = {
  lintOnSave: false,
  chainWebpack: (config, options) => {
    config.optimization.splitChunks({
      minChunks: Infinity
    })

    // 内联所有图片
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: Infinity
      })

    // 内联 web font
    config.module
      .rule('fonts')
      .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: Infinity
      })

    // 如果要内联更多资源，如mp3，svg等等，可参考官方写法：
    // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/base.js
  }
}
