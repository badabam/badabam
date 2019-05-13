module.exports = {
  root: './src',
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-short'),
    require('postcss-sorting')({ 'properties-order': 'alphabetical' }),
    require('autoprefixer'),
    require('cssnano'),
  ],
}
