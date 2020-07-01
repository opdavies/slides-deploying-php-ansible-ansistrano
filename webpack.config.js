let Encore = require('@symfony/webpack-encore')

Encore
  .disableSingleRuntimeChunk()
  .setOutputPath('theme/')
  .setPublicPath('/theme')
  .addStyleEntry('slides', './assets/css/tailwind.pcss')
  .enablePostCssLoader()

module.exports = Encore.getWebpackConfig()
