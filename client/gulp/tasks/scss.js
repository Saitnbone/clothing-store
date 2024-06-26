// Импорты
import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
// import cleanCss from "gulp";
// import webpcss from "gulp-webpcss";
import cleanCss from "gulp-clean-css";
import autoprefixer from "gulp-autoprefixer";
import groupCssMediaQueries from "gulp-group-css-media-queries";
// import stripComments from "gulp-strip-comments";

// Константы
const sass = gulpSass(dartSass);

// @todo: Такска для scss файлов
export const scss = () => {
  return (
    app.gulp
      .src(app.path.src.scss, { sourcemap: true })
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "SCSS",
            message: "Error: <% error.message %>",
          })
        )
      )
      .pipe(
        plumber({
          errorHandler: notify.onError("SCSS Error: <%= error.message %>"),
        })
      )
      .pipe(app.plugins.replace(/@img\//g, "../img/"))
      .pipe(
        sass({
          outputStyles: "expanded",
        })
      )
      .pipe(groupCssMediaQueries())
      // .pipe(
      //   webpcss({
      //     webpClass: ".webp",
      //     noWebpClass: ".no-webp",
      //   })
      // )
      .pipe(
        autoprefixer({
          grid: true,
          overrideBrowserslist: ["last 3 versions"],
          cascade: true,
        })
      )
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(cleanCss())
      .pipe(
        rename({
          basename: "bundle",
          extname: ".css",
        })
      )
      // .pipe(stripComments())
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(app.plugins.browserSync.stream())
  );
};
