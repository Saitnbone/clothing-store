import webpack from "webpack-stream";
import stripComments from "gulp-strip-comments";
import { path } from "../config/path.js";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import sourcemaps from "gulp-sourcemaps";

// @todo: Таска для обработки .js файлов
export const js = () => {
  const entries = {
    index: [path.src.js.index],
    // header: path.src.js.header.headerComponent,
    catalogPage: path.src.js.catalogPage,
    // footer: path.src.js.footer.footerComponent,
  };

  const entryPaths = Object.values(entries).flat();
  // const entryPaths = Object.entries(entries).reduce((acc, [key, value]) => {
  //   if (Array.isArray(value)) {
  //     acc[key] = value;
  //   } else {
  //     acc[key] = [value];
  //   }
  //   return acc;
  // }, {});

  console.log("Entry paths:", entryPaths);

  // Логирование путей для отладки
  console.log("Entry paths:", entryPaths);

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
