/* 
--------------------------------------------------------------
                    Константы для проекта
--------------------------------------------------------------
*/

// @todo: Глобальные DOM-узлы для проекта
const header = document.querySelector(".header");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");

// @todo: DOM-узлы для header
const basketButton = header.querySelector(".basket-button");
const navButton = header.querySelector(".header__button");
const searchButton = header.querySelector(".search-button");
const toggleParametrs = header.querySelectorAll(".list");

// @todo: DOM-узлы для main

// @todo: DOM-узлы для footer
const footerLists = footer.querySelectorAll(".footer__section");

// @todo: DOM-узлы для страницы mainPage

// @todo: DOM-узлы для страницы paymentsPage

// @todo: DOM-узлы для страницы catalogPage
const catalog = document.querySelector(".catalog__cloth");

// @todo: DOM-узлы для страницы returnsPage

// @todo: DOM-узлы для страницы contactsPage

// @todo: DOM-узлы для страницы profilePage

// @todo: DOM-узлы для страницы authorizationPage

// @todo: DOM-узлы для страницы favoritesPage

// @todo: DOM-узлы для страницы basketPage

// @todo: Глобальные импорты
import { openCloseList } from "./scripts/components/globalComponents/dropdownHandler.js";

// @todo: Импорты header

// @todo: Импорты main

// @todo: Импорты footer
import { openFooterList } from "./scripts/components/footer/footerList.js";

// @todo: Слушатели событий header
toggleParametrs.forEach((el) => {
  el.addEventListener("click", openCloseList);
});

// @todo: Слушатели событий main

// @todo: Слушатели событий footer
footerLists.forEach((listElement) => {
  listElement.addEventListener("click", openFooterList);
});
