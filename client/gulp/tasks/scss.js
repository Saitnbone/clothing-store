// Импорты
import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";

// Константы
const sass = gulpSass(dartSass);

// @todo: Такска для scss файлов
export const scss = () => {
  return app.gulp
    .src(app.path.src.scss, { sourcemap: true })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SCSS",
          message: "Error: <% error.message %>",
        })
      )
    )

    .pipe(app.plugins.replace(/@img\//g, "../img/"))
    .pipe(
      sass({
        outputStyles: "expanded",
      })
    )
    .pipe(
      rename({
        basename: "bundle",
        extname: ".css",
      })
    )
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream());
};
