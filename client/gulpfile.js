const gulp = require("gulp");
const concat = require("gulp-concat-css");
const plumber = require("gulp-plumber");
const del = require("del");
const browserSync = require("browser-sync").create();

function serve() {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });
}

function html() {
  return gulp
    .src("src/views/**/*.html")
    .pipe(plumber())
    .pipe(gulp.dest("dist/"))
    .pipe(browserSync.reload({ stream: true }));
}

function pug() {
  return gulp
    .src("src/components/**/*.pug")
    .pipe(plumber())
    .pipe(gulp.dest("dist/components"))
    .pipe(browserSync.reload({ stream: true }));
}

function css() {
  return gulp
    .src("src/styles/**/*.css")
    .pipe(plumber())
    .pipe(concat("bundle.css"))
    .pipe(gulp.dest("dist/"))
    .pipe(browserSync.reload({ stream: true }));
}

function images() {
  return gulp
    .src("src/images/**/*{jpg,png,gif,ico,webp,avif}")
    .pipe(gulp.dest("dist/images"))
    .pipe(browserSync.reload({ stream: true }));
}

function svg() {
  return gulp
    .src("src/svg/**/*.svg")
    .pipe(gulp.dest("dist/svg"))
    .pipe(browserSync.reload({ stream: true }));
}

function watchFiles() {
  gulp.watch(["src/views/**/*.html"], html);
  gulp.watch(["src/styles/**/*.css"], css);
  gulp.watch(["src/images/**/*{jpg,png,gif,ico,webp,avif}"], images);
  gulp.watch(["src/svg/**/*.svg"], svg);
}

function clean() {
  return del("dist");
}

const build = gulp.series(clean, gulp.parallel(html, pug, css, images, svg));
const watchApp = gulp.parallel(build, watchFiles, serve);

exports.build = build;
exports.watchApp = watchApp;
