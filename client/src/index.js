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
  checkNavButtonState,
} from "./scripts/components/header/navigationButton.js";

// Импорты main

// Импорты footer
import { openFooterList } from "./scripts/components/footer/footerList.js";

// @DOM: Глобальные DOM-узлы для проекта
const header = document.querySelector(".header");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");

// @DOM: DOM-узлы для header
const navigationButton = header.querySelector(".header__button");
const popupDesktop = document.querySelector(".popup-desktop");
const popupMobile = document.querySelector(".popup-mobile");
const basketButton = header.querySelector(".basket-button");
const searchButton = header.querySelector(".search-button");
const lists = header.querySelectorAll(".list");

// @DOM: DOM-узлы для main

// @DOM: DOM-узлы для footer
const footerLists = footer.querySelectorAll(".footer__section");

// @DOM: DOM-узлы для страницы mainPage

// @DOM: DOM-узлы для страницы paymentsPage

// @DOM: DOM-узлы для страницы catalogPage
const catalog = document.querySelector(".catalog__cloth");

// @DOM: DOM-узлы для страницы returnsPage

// @DOM: DOM-узлы для страницы contactsPage

// @DOM: DOM-узлы для страницы profilePage

// @DOM: DOM-узлы для страницы authorizationPage

// @DOM: DOM-узлы для страницы favoritesPage

// @DOM: DOM-узлы для страницы basketPage

// @listeners:  Глобальные слушатели событий header

// @listeners:  Слушатели событий header
window.addEventListener("resize", checkDisplaySize);

navigationButton.addEventListener("click", (event) => {
  checkNavButtonState(event, popupDesktop, popupMobile);
});

lists.forEach((listElement) => {
  const hzElement = listElement.querySelector(".hz");
  const dropDownList = listElement.querySelector(".list__drop-down");
  listElement.addEventListener("click", (event) =>
    toggleListState(event, hzElement, dropDownList)
  );
});

// @listeners: Слушатели событий main

// @listeners: Слушатели событий footer
footerLists.forEach((listElement) => {
  listElement.addEventListener("click", openFooterList);
});
