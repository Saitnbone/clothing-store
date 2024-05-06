import * as nodePath from "path";

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/`,
    files: buildFolder,
  },
  src: {
    html: `${srcFolder}/pages/*.pug`,
    scss: `${srcFolder}/styles/imports.scss`,
    files: `${srcFolder}/files/**/*.*`,
  },
  watch: {
    html: `${srcFolder}/pages/*.pug`,
    scss: `${srcFolder}/styles/imports.scss`,
    files: `${srcFolder}/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``,
};
