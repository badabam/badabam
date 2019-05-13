module.exports = {
  root: './src',
  module: false,
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-short'),
    require('postcss-sorting')({ 'properties-order': 'alphabetical' }),
    require('autoprefixer'),
    require('cssnano')({
      calc: false,
      discardComments: {
        removeAll: true,
      },
    }),
  ],
}
