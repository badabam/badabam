const fs             = require('fs-extra');
const routes         = require('../package.json').routes;
const renderSass     = require('./styles.js').renderSass;
const renderPartials = require('./partials.js').renderPartials;

if (!module.parent) { build(); } // run if called directly with node
exports.build = build;

function build () {
  recreateDocsFolder();
  copyImages();
  copyRoutedDependencies();
  renderSass();
  renderPartials();
}

function copyRoutedDependencies () {
  Object.keys(routes).forEach((key) => {
    if (key.indexOf('vendor') === -1 ) { return; } // early out

    let targetPath = `../docs${key}`,
        sourcePath = `./${routes[key]}`;

    fs.ensureDirSync('../docs/vendor');
    fs.createReadStream(sourcePath)
      .pipe(fs.createWriteStream(targetPath));
  });
}

function copyImages () {
  fs.copySync('src/img', '../docs/img', {preserveTimestamps: true}, (err) => {
    if (err) {console.error(err);}
    console.log('Copied images.');
  });
}

function recreateDocsFolder () {
  fs.removeSync('../docs');
  fs.ensureDirSync('../docs');
}
