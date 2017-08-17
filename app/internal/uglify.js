var fs = require('fs-extra');
var globby = require('globby');
var uglify = require('uglify-js');

if (!module.parent) { run(); }
exports.run = run;

function run () {
  globby(['src/components/**/*.js', 'src/js/scripts.js'])
  .then(runUglify);
}

function runUglify (paths) {
  var result = uglify.minify(paths, {
    mangle: false
  });
  writeFile('docs/js/scripts.min.js', result.code);
}

function writeFile(file, content) {
  fs.ensureFile(file, (err) => {
    if (err) { console.log(err); }

    fs.writeFile(file, content, function (err){
      if(err) {
        console.log(err);
      } else {
        console.log('Script generated and saved:', 'scripts.min.js');
      }
    });
  });
}
