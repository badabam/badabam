const Bundler = require('parcel-bundler')
const Path = require('path')
const bs = require('browser-sync').create()

// Single entrypoint file location:
const entryFiles = Path.join(__dirname, './src/*.html')
// OR: Multiple files with globbing (can also be .js)
// const entryFiles = './src/*.js';
// OR: Multiple files in an array
// const entryFiles = ['./src/index.html', './some/other/directory/scripts.js'];

// Bundler options
const bundlerOptions = {
  publicUrl: '/', // The url to serve on, defaults to '/'
  watch: false, // Whether to watch the files and rebuild them on change, defaults to process.env.NODE_ENV !== 'production'
  cache: false, // Enabled or disables caching, defaults to true
  cacheDir: '.cache', // The directory cache gets put in, defaults to .cache
  contentHash: true, // Disable content hash from being included on the filename
  global: 'moduleName', // Expose modules as UMD under this name, disabled by default
  minify: true, // Minify files, enabled if process.env.NODE_ENV === 'production'
  scopeHoist: false, // Turn on experimental scope hoisting/tree shaking flag, for smaller production bundles
  bundleNodeModules: false, // By default, package.json dependencies are not included when using 'node' or 'electron' with 'target' option above. Set to true to adds them to the bundle, false by default
  logLevel: 3, // 5 = save everything to a file, 4 = like 3, but with timestamps and additionally log http requests to dev server, 3 = log info, warnings & errors, 2 = log warnings & errors, 1 = log errors
  hmr: false, // Enable or disable HMR while watching
  sourceMaps: true, // Enable or disable sourcemaps, defaults to enabled (minified builds currently always create sourcemaps)
  hmrHostname: '', // A hostname for hot module reload, default to ''
  detailedReport: false, // Prints a detailed report of the bundles, assets, filesizes and times, defaults to false, reports are only printed if watch is disabled
}

let bundler = new Bundler(entryFiles, bundlerOptions)
bundler.bundle()

bs.watch('./src/**/*.*').on('change', () => {
  bundler.off('buildEnd', bs.reload)
  bundler = new Bundler(entryFiles, bundlerOptions)
  bundler.on('buildEnd', bs.reload)
  bundler.bundle()
})

bs.init({ server: './docs', port: 1234, reloadDelay: 500 })
