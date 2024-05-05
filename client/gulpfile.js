// Основной модуль
import gulp from "gulp";

// Импорт путей
import { path } from "../client/gulp/config/path.js";

global.app = {
  path: path,
  gulp: gulp,
};

// Импорт задач
import { copy } from "../client/gulp/tasks/copy.js";
import { reset } from "../client/gulp/tasks/reset.js";
import { html } from "../client/gulp/tasks/html.js";
// import {scss} from "../client/gulp/tasks/scss.js";

// Наблюдатель за изменениями в файлах
const watchFiles = () => {
  gulp.watch(path.watch.html, gulp.series(reset, html)); // Здесь включаем reset в последовательность с html
  gulp.watch(path.watch.files, gulp.series(reset, copy)); // Здесь включаем reset в последовательность с copy
};

const mainTasks = gulp.parallel(html, copy);

// Повторение сценариев выполнения задач
const dev = gulp.series(mainTasks, watchFiles);

// Выполнения сценария по умолчанию
gulp.task("default", dev);

// const gulp = require("gulp");
// const gulpPug = require("gulp-pug");
// const concat = require("gulp-concat");
// const sass = require("gulp-sass")(require("sass"));
// const plumber = require("gulp-plumber");
// const del = require("del");
// const browserSync = require("browser-sync").create();
// const uglify = require("gulp-uglify");
// const babel = require("gulp-babel");

// function serve() {
//   browserSync.init({
//     server: {
//       baseDir: "./dist",
//     },
//   });
// }

// function pug() {
//   return gulp
//     .src("src/pages/**/*.pug")
//     .pipe(gulpPug())
//     .pipe(gulp.dest("dist/"))
//     .pipe(browserSync.reload({ stream: true }));
// }

// function scss() {
//   return gulp
//     .src("src/styles/imports.scss")
//     .pipe(plumber())
//     .pipe(sass())
//     .pipe(concat("bundle.css")) // Указываем имя временного файла
//     .pipe(gulp.dest("dist/"))
//     .pipe(browserSync.reload({ stream: true }));
// }

// function css() {
//   return gulp
//     .src("dist/**/*.css") // Берем временные CSS файлы
//     .pipe(concat("bundle.css")) // Объединение всех CSS файлов в один
//     .pipe(gulp.dest("dist/"))
//     .pipe(browserSync.reload({ stream: true }));
// }

// function images() {
//   return gulp
//     .src("src/images/**/*{jpg,png,gif,ico,webp,avif}")
//     .pipe(gulp.dest("dist/images"))
//     .pipe(browserSync.reload({ stream: true }));
// }

// function svg() {
//   return gulp
//     .src("src/svg/**/*.svg")
//     .pipe(gulp.dest("dist/svg"))
//     .pipe(browserSync.reload({ stream: true }));
// }

// function javaScript() {
//   return gulp
//     .src("src/scripts/**/*.js")
//     .pipe(babel())
//     .pipe(concat("bundle.js"))
//     .pipe(uglify())
//     .pipe(gulp.dest("dist/"))
//     .pipe(browserSync.reload({ stream: true }));
// }

// function watchFiles() {
//   gulp.watch(["src/pages/**/*.pug"], pug);
//   gulp.watch(["src/styles/**/*.css"], css);
//   gulp.watch(["src/**/*.scss"], scss);
//   gulp.watch(["src/images/**/*{jpg,png,gif,ico,webp,avif}"], images);
//   gulp.watch(["src/svg/**/*.svg"], svg);
//   gulp.watch(["src/scripts/**/*.js"], javaScript);
// }

// function clean() {
//   return del("dist");
// }

// function reload(done) {
//   browserSync.reload();
//   done();
// }

// const build = gulp.series(
//   clean,
//   gulp.parallel(pug, scss, images, svg, javaScript)
// );
// const watchApp = gulp.parallel(build, watchFiles, reload, serve);

// // exports.html = html;
// exports.pug = pug;
// exports.css = css;
// exports.scss = scss;
// exports.images = images;
// exports.svg = svg;
// exports.javaScript = javaScript;
// exports.build = build;
// exports.watchApp = watchApp;
