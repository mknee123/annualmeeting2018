//----------------------------------//
//    Include Required Plugins      //
//----------------------------------//
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel');
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css');

//----------------------------------//
//  Browser Sync To reload Server   //
//----------------------------------//
var browserSync = require('browser-sync').create();
    reload = browserSync.reload;

gulp.task('browser-sync', function() {
  browserSync.init({
    proxy: 'http://localhost',
    server: {
      baseDir: '.web/*html'
    }
  });
});

/**
 * Minify and combine CSS files, including Bootstrap
*/
gulp.task('css', function() {
  gulp.src([
    //'node_modules/bootstrap/dist/css/bootstrap.css',
    'src/css/style.css'
  ])
  .pipe(minifyCSS())
  .pipe(concat('style.css'))
  .pipe(gulp.dest('web/dist/css'));
});
gulp.task('css-reset', function() {
  gulp.src([
    'src/css/reset.css'
  ])
  .pipe(minifyCSS())
  .pipe(concat('reset.css'))
  .pipe(gulp.dest('web/dist/css'));
});

/**
 * Minify and combine JS files, including jQuery and Bootstrap
 */
 gulp.task('js', function() {
   gulp.src([
     'node_modules/jquery/dist/jquery.js',
     'node_modules/bootstrap/dist/js/bootstrap.js',
     'src/js/**/*.js'
     ])

     .pipe(uglify())
     .pipe(concat('script.js'))
     .pipe(gulp.dest('web/dist/js'));
 });

 /**
  * Copy images from source to distributable
  *
  * This could be extended to create different
  * quality versions of images, or an image sprite
  */
 gulp.task('images', function() {
     gulp.src([
             'src/img/**/*'
         ])
         .pipe(gulp.dest('web/dist/img'));
 });

 /**
  * The default gulp task
  */
 gulp.task('default', function() {
     gulp.run('js', 'css', 'css-reset', 'images');
 });

 /**
  * Watch asset files for changes. First runs default task before starting watches
  */
 gulp.task('watch', function() {
         browserSync.init({
           server: {
               baseDir: "./web/"
           }
         });

         gulp.run('default');

         gulp.watch('src/css/**/*.css', function(event) {
             console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
             gulp.run('css');
         });

         gulp.watch('src/js/**/*.js', function(event) {
             console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
             gulp.run('js');
         });

         gulp.watch('src/images/**/*', function(event) {
             console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
             gulp.run('images');
         });
         gulp.watch("web/*.html").on("change", reload);
 });
