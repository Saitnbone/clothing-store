import webpack from "webpack-stream";
import stripComments from "gulp-strip-comments";
import { path } from "../config/path.js";

// @todo: Таска для обработки .js файлов
export const js = () => {
  // Конфиг объект для указания путей для проекта
  const entries = {
    index: [path.src.js.index],
    basketPage: path.src.js.basketPage,
    catalogPage: path.src.js.catalogPage,
    profilePage: path.src.js.profilePage,
  };

  const entryPaths = Object.values(entries).flat();

  return app.gulp
    .src(entryPaths, { sourcemaps: true })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "JS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      webpack({
        mode: "production",
        entry: entries,
        output: {
          filename: "[name].bundle.js",
        },
      })
    )
    .pipe(stripComments())
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream());
};
