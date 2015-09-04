var gulp = require('gulp');
var uglify = require('gulp-uglify');
var fs = require('fs-extra');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var rimraf = require('rimraf');
var source = require('vinyl-source-stream');
var _ = require('lodash');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var config = {
  entryFile: './src/app.js',
  outputDir: './dist/',
  outputFile: 'app.js'
};
// clean the output directory
gulp.task('clean', function(cb){
  rimraf(config.outputDir, cb);
});

/*




var bundler;
function getBundler() {
  if (!bundler) {
    bundler = watchify(browserify(config.entryFile, _.extend({ debug: true }, watchify.args)));
  }
  return bundler;
};
function bundle() {
  return getBundler()
    .transform(babelify)
    .bundle()
    .on('error', function(err) { console.log('Error: ' + err.message); })
    .pipe(source(config.outputFile))
    .pipe(gulp.dest(config.outputDir))
    .pipe(reload({ stream: true }));
}
gulp.task('build-persistent', ['clean'], function() {
  return bundle();
});
gulp.task('build', ['build-persistent'], function() {
  process.exit(0);
});
gulp.task('watch', ['build-persistent'], function() {
  browserSync({
    notify: false,
    server: {
      baseDir: './'
    },
    browser: "google chrome",
    port: 8000
  });
  getBundler().on('update', function() {
    gulp.start('build-persistent')
  });
});
// WEB SERVER
gulp.task('serve', function () {
  browserSync({
    notify: false,
    server: {
      baseDir: './'
    }
  });
});
// BUILD RELEASE
gulp.task('copy', ['build-persistent'], function(cb) {
  if(!fs.existsSync('./release')){
    fs.mkdirSync('./release');
  }
  fs.copySync('./index.html', './release/index.html');
  fs.copySync('./dist', './release/dist');
  fs.copySync('./css', './release/css');
  fs.copySync('./images', './release/images');
  fs.copySync('./fonts', './release/fonts');
  cb();
});
// minify *.js
gulp.task('minify', ['build-persistent', 'copy'], function(cb) {
  console.log("minifying *.js (may take some seconds)");
  return gulp.src('release/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('release'));
});
// starting release process
gulp.task('release', ['build-persistent', 'copy', 'minify'], function() {
  console.log("release finished");
  process.exit(0);
});
Add Comment





*/
