/* eslint-disable global-require */
module.exports = {
  'module': false,
  'root': './src',
  'plugins': [
    require('postcss-nested'),
    require('postcss-import'),
    require('postcss-short'),
    require('autoprefixer'),
    require('cssnano')({
      'calc': false,
      'discardComments': {
        'removeAll': true
      }
    })
  ]
}
