import * as nodePath from "path";

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";
const jsPath = "./src/scripts/components";

export const path = {
  build: {
    js: `${buildFolder}/scripts`,
    html: `${buildFolder}/`,
    css: `${buildFolder}/`,
    images: `${buildFolder}/images`,
    svg: `${buildFolder}/svg`,
  },
  src: {
    js: {
      index: `${srcFolder}/index.js`,
      basketPage: `${jsPath}/basketPage/basketPage.js`,
      catalogPage: `${jsPath}/catalogPage/catalogPage.js`,
      profilePage: `${jsPath}/profilePage/profilePage.js`,
    },
    html: `${srcFolder}/pages/*.pug`,
    scss: `${srcFolder}/index.scss`,
    images: `${srcFolder}/images/**/*.{jpg,png,gif,ico,webp,avif}`,
    svg: `${srcFolder}/svg/**/*.svg`,
  },
  watch: {
    js: `${srcFolder}/**/**/*.js`,
    html: `${srcFolder}/**/*.pug`,
    scss: `${srcFolder}/styles/**/**.scss`,
    images: `${srcFolder}/images/**/*{jpg,png,gif,ico,webp,avif}"`,
    svg: `${srcFolder}/svg/**/*.svg`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``,
};
