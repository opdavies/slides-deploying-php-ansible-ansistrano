let Encore = require('@symfony/webpack-encore')

Encore
  .disableSingleRuntimeChunk()
  .setOutputPath('build/')
  .setPublicPath('/build')
  .addStyleEntry('slides', './assets/css/tailwind.pcss')
  .enablePostCssLoader()

module.exports = Encore.getWebpackConfig()
