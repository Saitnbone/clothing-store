const gulp = require("gulp");
const gulpPug = require("gulp-pug");
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

function pug() {
  return gulp
    .src("src/pages/**/*.pug")
    .pipe(plumber())
    .pipe(gulpPug())
    .pipe(gulp.dest("dist/"))
    .pipe(browserSync.reload({ stream: true }));
}

function html() {
  return gulp
    .src("src/pages/**/*.html")
    .pipe(plumber())
    .pipe(gulp.dest("dist/"))
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
  gulp.watch(["src/pages/**/*.pug"], pug);
  gulp.watch(["src/styles/**/*.css"], css);
  gulp.watch(["src/images/**/*{jpg,png,gif,ico,webp,avif}"], images);
  gulp.watch(["src/svg/**/*.svg"], svg);
}

function clean() {
  return del("dist");
}

const build = gulp.series(clean, gulp.parallel(html, pug, css, images, svg));
const watchApp = gulp.parallel(build, watchFiles, serve);

exports.html = html;
exports.pug = pug;
exports.css = css;
exports.images = images;
exports.svg = svg;
exports.build = build;
exports.watchApp = watchApp;
