import * as nodePath from "path";

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/`,
    images: `${buildFolder}/images`,
    svg: `${buildFolder}/svg`,
  },
  src: {
    html: `${srcFolder}/pages/*.pug`,
    scss: `${srcFolder}/styles/imports.scss`,
    images: `${srcFolder}/images/**/*.{jpg,png,gif,ico,webp,avif}`,
    svg: `${srcFolder}/svg/**/*.svg`,
  },
  watch: {
    html: `${srcFolder}/pages/*.pug`,
    scss: `${srcFolder}/styles/imports.scss`,
    images: `${srcFolder}/images/**/*{jpg,png,gif,ico,webp,avif}"`,
    svg: `${srcFolder}/svg/**/*.svg`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``,
};
