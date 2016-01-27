var gulp = require('gulp'), 
    sass = require('gulp-ruby-sass') 
    notify = require("gulp-notify") 
    bower = require('gulp-bower')
    RSG = require('react-styleguide-generator')
    serve = require('gulp-serve');

var config = {
     sassPath: './src/sass',
     bowerDir: './bower_components' ,
    styleguideDir: './styleguide',
    prototypeDir: './prototype'
}

gulp.task('bower', function() { 
    return bower()
         .pipe(gulp.dest(config.bowerDir)) 
});

gulp.task('icons', function() { 
    return gulp.src(config.bowerDir + '/font-awesome/fonts/**.*') 
        .pipe(gulp.dest('./dist/fonts')); 
});

gulp.task('css', function() { 
    return sass(config.sassPath + '/style.scss', {
             style: 'compressed',
             loadPath: [
                 './app/static/scss',
                 config.bowerDir + '/bootstrap-sass/assets/stylesheets',
                 config.bowerDir + '/font-awesome/scss',
             ]
         }) .on("error", notify.onError(function (error) {
                 return "Error: " + error.message;
             })) 
         .pipe(gulp.dest('./dist/css'))
        .pipe(gulp.dest(config.styleguideDir))
        .pipe(gulp.dest(config.prototypeDir + '/app/css'));
});

// Rerun the task when a file changes
 gulp.task('watch', function() {
     gulp.watch(config.sassPath + '/**/*.scss', ['css']); 
});

gulp.task('styleguide', function (done) {
  var rsg = RSG(config.styleguideDir + '/components/**/*.js', {
    output: config.styleguideDir + '/styleguide',
    config: config.styleguideDir + '/styleguide.json'
  })

  rsg.generate(function (err) {
    if (err) {
      console.error(String(err))
    }

    done()
  })
});

gulp.task('styleguide-serve', serve(['styleguide/styleguide']));

gulp.task('prototype-serve', serve([config.prototypeDir]));


  gulp.task('default', ['bower', 'icons', 'css']);
