// import versionNumber from "gulp-version-number";
import pug from "gulp-pug";

// @todo: Таска для обработки html файлов 
export const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "HTML",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      pug({
        pretty: true,
        verbose: true,
      })
    )
    .pipe(app.plugins.replace(/@img\//g, "img/"))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream());
};
