import webpack from "webpack-stream";
import stripComments from "gulp-strip-comments";

// @todo: Таска для обработки .js файлов
export const js = () => {
  return app.gulp
    .src(app.path.src.js, { sourcemaps: true })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "JS",
          message: "Error: <% error.message %>",
        })
      )
    )
    .pipe(
      webpack({
        mode: "production",
        output: {
          filename: "bundle.js",
        },
      })
    )
    .pipe(stripComments())
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream());
};
