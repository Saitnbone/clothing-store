// Обозначения:

/*

@DOM: - обозначение для DOM-узлов
@const: -  обозначение констант
@func: - обозначение для функций 
@listeners: - обозначение для слушателей событий

*/

// Глобальные импорты
import { toggleListState } from "./scripts/components/globalComponents/dropdownHandler.js";

// Импорты для блока header
import {
  checkDisplaySize,
  checkNavigationBlockState,
} from "./scripts/components/header/navigationButton.js";
import { checkSearchBlockState } from "./scripts/components/header/searchButton.js";

// Импорты footer
import { openFooterList } from "./scripts/components/footer/footerList.js";

// @DOM: Глобальные DOM-узлы для проекта
const header = document.querySelector(".header");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");

// @DOM: DOM-узлы для header
const headerNavBlock = header.querySelector(".header__navigation-block");
const navigationButton = header.querySelector(".header__button");
const popupDesktop = header.querySelector(".popup-desktop");
// const headerPopupNavBlock = querySelector('.header__popup-nav-block');
const popupMobile = header.querySelector(".popup-mobile");
const headerElements = header.querySelectorAll(".header__element");
const headerListOfTools = header.querySelector(".header__list-of-tools");
const searchButton = header.querySelector(".search-button");
const searchHeaderInput = header.querySelector(
  ".header__popup-search-block-input"
);
const lists = header.querySelectorAll(".list");

// @DOM: DOM-узлы для footer
const footerLists = footer.querySelectorAll(".footer__section");

// @listeners:  Глобальные слушатели событий header

// @listeners:  Слушатели событий для header (все страницы)
window.addEventListener("resize", checkDisplaySize);

navigationButton.addEventListener("click", (event) => {
  checkNavigationBlockState(
    event,
    popupDesktop,
    popupMobile,
    headerNavBlock,
    headerElements
  );
});

searchButton.addEventListener("click", (event) => {
  checkSearchBlockState(event, searchHeaderInput, headerListOfTools);
});

lists.forEach((listElement) => {
  const hzElement = listElement.querySelector(".hz");
  const dropDownList = listElement.querySelector(".list__drop-down");
  listElement.addEventListener("click", (event) =>
    toggleListState(event, hzElement, dropDownList)
  );
});

// @listeners: Слушатели событий footer (все страницы)
footerLists.forEach((listElement) => {
  listElement.addEventListener("click", openFooterList);
});
