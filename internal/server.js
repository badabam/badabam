const exec           = require('child_process').exec;
const fs             = require('fs-extra');
const bs             = require('browser-sync').create();
const renderPartials = require('./partials.js').renderPartials;
const renderSass     = require('./styles.js').renderSass;
const build          = require('./build.js').build;

if (!module.parent) { build(); babelify(); initServer(); }
exports.renderSass = renderSass;

function initServer () {
  bs.init({
    server: {
      baseDir: './',
      directory: false,
      routes: require('../package.json').routes,
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    },
    open: false,   // don't open a new browser window
    online: false, // reduce startup time by turning off online-only features (eg. tunnel)
    notify: false  // turn off notifications in the browser
  });

  // reload
  bs.watch('docs/*.html').on('change', bs.reload);
  bs.watch('docs/css/*.css').on('change', bs.reload);
  bs.watch('docs/js/*.js').on('change', bs.reload);

  // recompile
  bs.watch('src/components/**/*.js').on('change', babelify);
  bs.watch('src/js/*.js').on('change', babelify);
  bs.watch('src/index.html.tpl').on('change', renderPartials);

  bs.watch('src/scss/**/*.scss').on('change', renderSass);
  bs.watch('src/components/**/*.scss').on('change', renderSass);

  bs.watch('src/partials/*.html').on('change', renderPartials);
  bs.watch('src/components/**/*.html').on('change', renderPartials);
}

function babelify () {
  fs.ensureDirSync('docs/js');
  exec('npm run babelify', (err, stdin, stdout) => {
    if (err) { throw err; }
    console.log('Babelify done.', stdout);
  });
}
