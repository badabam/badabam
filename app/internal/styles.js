const fs = require('fs-extra');
const sass = require('node-sass');

if (!module.parent) { renderSass(); }
exports.renderSass = renderSass;

function renderSass () {
  return new Promise( (resolve, reject) => {
    sass.render({
      file: 'src/scss/styles.scss',
      outFile: 'docs/css/styles.css',
      outputStyle: 'compressed',
      includePaths: ['./src/scss', './src/components/**']
    }, function(err, result) {
      return err ? handleError(err, reject) : handleSuccess(result, resolve);
    });
  });
}

function handleError (err, reject) {
  reject();
  console.error(err);
}

function handleSuccess (result, resolve) {
  fs.ensureDirSync('docs/css');
  fs.writeFile('docs/css/styles.css', result.css.toString(), (err) => {
    if (err) { throw err; }
    console.log('Rendered docs/styles.css');
    resolve();
  });
}
