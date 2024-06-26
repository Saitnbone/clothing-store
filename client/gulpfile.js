// Основной модуль
import gulp from "gulp";

// Импорт путей
import { path } from "../client/gulp/config/path.js";

// Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// Импорт задач
import { reset } from "../client/gulp/tasks/reset.js";
import { html } from "../client/gulp/tasks/pug.js";
import { scss } from "../client/gulp/tasks/scss.js";
import { images } from "../client/gulp/tasks/images.js";
import { svg } from "../client/gulp/tasks/svg.js";
import { js } from "../client/gulp/tasks/js.js";

// Наблюдатель за изменениями в файлах
const watchFiles = () => {
  gulp.watch(path.watch.html, gulp.series(html));
  gulp.watch(path.watch.scss, gulp.series(scss));
  gulp.watch(path.watch.images, gulp.series(images));
  gulp.watch(path.watch.svg, gulp.series(svg));
  gulp.watch(path.watch.js, gulp.series(js));
};

const mainTasks = gulp.parallel(html, scss, images, svg, js);

// Повторение сценариев выполнения задач
const dev = gulp.series(reset, gulp.parallel(watchFiles, mainTasks));

// Выполнения сценария по умолчанию
gulp.task("default", dev);

//
