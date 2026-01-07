const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const paths = {
  styles: {
    src: 'src/styles/main.scss',
    dest: 'dist/css'
  },
  images: {
    src: 'src/images/**/*',
    dest: 'dist/images'
  }
};

// Compile SCSS → CSS
function styles() {
  return src(paths.styles.src)
    .pipe(
      sass({ outputStyle: 'compressed' })
        .on('error', sass.logError)
    )
    .pipe(dest(paths.styles.dest));
}

// Copy images → dist
function images() {
  return src(paths.images.src)
    .pipe(dest(paths.images.dest));
}

// Watch files
function watcher() {
  watch('src/styles/**/*.scss', styles);
  watch(paths.images.src, images);
}

// Default task
exports.default = series(
  styles,
  images,
  watcher
);
