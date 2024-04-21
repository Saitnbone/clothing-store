const gulp = require("gulp");
const gulpPug = require("gulp-pug");
const concat = require("gulp-concat");
const sass = require("gulp-sass")(require("sass"));
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
    .pipe(gulpPug())
    .pipe(gulp.dest("dist/"))
    .pipe(browserSync.reload({ stream: true }));
}

function scss() {
  return gulp
    .src("src/styles/imports.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(concat("bundle.css")) // Указываем имя временного файла
    .pipe(gulp.dest("dist/"))
    .pipe(browserSync.reload({ stream: true }));
}

function css() {
  return gulp
    .src("dist/**/*.css") // Берем временные CSS файлы
    .pipe(concat("bundle.css")) // Объединение всех CSS файлов в один
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

function javaScript() {
  return gulp
    .src("src/**/*.js")
    .pipe(concat("bundle.js"))
    .pipe(gulp.dest("dist/"))
    .pipe(browserSync.reload({ stream: true }));
}

function watchFiles() {
  gulp.watch(["src/pages/**/*.pug"], pug);
  gulp.watch(["src/styles/**/*.css"], css);
  gulp.watch(["src/**/*.scss"], scss);
  gulp.watch(["src/images/**/*{jpg,png,gif,ico,webp,avif}"], images);
  gulp.watch(["src/svg/**/*.svg"], svg);
  gulp.watch(["src/**/*.js"], javaScript);
}

function clean() {
  return del("dist");
}

function reload(done) {
  browserSync.reload();
  done();
}

const build = gulp.series(
  clean,
  gulp.parallel(pug, scss, images, svg, javaScript)
);
const watchApp = gulp.parallel(build, watchFiles, reload, serve);

// exports.html = html;
exports.pug = pug;
exports.css = css;
exports.scss = scss;
exports.images = images;
exports.svg = svg;
exports.javaScript = javaScript;
exports.build = build;
exports.watchApp = watchApp;
