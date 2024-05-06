// @todo: Таска для обработки .js файлов
export const javaScript = () => {
  return gulp
    .src("src/scripts/**/*.js")
    .pipe(babel())
    .pipe(concat("bundle.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/"))
    .pipe(browserSync.reload({ stream: true }));
};
