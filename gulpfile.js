const { src, dest, series, watch } = require('gulp');
const htmlMin = require('gulp-htmlmin');
const gulpsass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixers = require('gulp-autoprefixer');
const gulpAvif = require('gulp-avif');
const imagewebp = require('gulp-webp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const browserSync = require('browser-sync').create();

const clean = () => {
  return del('dist')
};

const resources = () => {
  return src('src/resources/**')
    .pipe(dest('dist'))
}

const html = () => {
  return src('src/**/*.html')
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
};

const css = () => {
  return src('src/scss/*.scss')
    .pipe(gulpsass({
      collapseWhitespace: true
    }))
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream())
};

const js = () => {
  return src('src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream())
};

const avif = () => {
  return src('src/img/*.png')
    .pipe(gulpAvif())
    .pipe(dest('src/resources/img'));
};

const webp = () => {
  return src('src/img/webp/*.png')
    .pipe(imagewebp())
    .pipe(dest('src/resources/img'))
};

const htmlMinify = () => {
  return src('src/**/*.html')
    .pipe(htmlMin({
      collapseWhitespace: true
    }))
    .pipe(dest('dist'))
};

const styles = () => {
  return src('src/scss/*.scss')
    .pipe(gulpsass({
      collapseWhitespace: true
    }))
    .pipe(autoprefixers({
      cascade: false
    }))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(dest('dist/css'));
};

const scripts = () => {
  return src('src/js/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify({
      toplevel: true
    }
    ).on('error', notify.onError))
    .pipe(dest('dist/js'))
};

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  });
};

watch('src/**/*.html', html);
watch('src/scss/*.scss', css);
watch('src/js/*.js', js);
exports.dev = series(clean, html, css, js, avif, webp, resources, watchFiles);
exports.build = series(clean, htmlMinify, styles, scripts, resources);