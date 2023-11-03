const { src, dest, series, watch } = require('gulp');
const htmlMin = require('gulp-htmlmin');
const gulpsass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixers = require('gulp-autoprefixer');
const image = require('gulp-image');
const svgSprite = require('gulp-svg-sprite');
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
}

const htmlMinify = () => {
  return src('src/**/*.html')
    .pipe(htmlMin({
      collapseWhitespace: true
    }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const resources = () => {
  return src('src/resources/**')
    .pipe(dest('dist'))
}

const styles = () => {
  return src('src/css/*.scss')
    .pipe(gulpsass({
      collapseWhitespace: true
    }))
    .pipe(autoprefixers({
      cascade: false
    }))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream())
}

const scripts = () => {
  return src('src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify({
      toplevel: true
    }
    ).on('error', notify.onError))
    .pipe(sourcemaps.write())
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream())
}

const img = () => {
  return src('src/img/*.svg')
    .pipe(image())
    .pipe(dest('dist/img'))
}

const svgSprites = () => {
  return src('src/img/svg/*.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: '../sprite.svg'
        }
      }
    }))
    .pipe(dest('dist/img'))
}

const avif = () => {
  return src('src/img/*.png')
    .pipe(gulpAvif())
    .pipe(dest('dist/img'));
}

const webpImages = () => {
  return src('src/img/webp/*.png')
    .pipe(imagewebp())
    .pipe(dest('dist/img'))
}

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
}

watch('src/**/*.html', htmlMinify)
watch('src/css/*.scss', styles)
watch('src/js/*.js', scripts)
exports.default = series(clean, resources, htmlMinify, styles, scripts, img, svgSprites, avif, webpImages, watchFiles)