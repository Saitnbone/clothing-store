// Обозначения:
/*

@DOM: - обозначение для DOM-узлов
@const: -  обозначение констант
@func: - обозначение для функций 
@listeners: - обозначение для слушателей событий

*/

// Импорты для страницы catalog
// import { renderCards } from "./components/renderCards";
import { furCoatsData } from "./components/cardsData.js";
// import { coatsData } from "./scripts/components/catalogPage/components/cardsData.js";
// import { parksData } from "./scripts/components/catalogPage/components/cardsData.js";
import { createCard } from "./components/createCard.js";

// @DOM: DOM-узлы для страницы catalogPage
const clothList = document.querySelector(".catalog__cloth-list");
const addFavorites = document.querySelector(".favorites-button");
const clothCard = document.querySelector(".catalog__cloth-card");
const catalog = document.querySelector(".catalog__cloth");

// Вызов основных функций
createCard(furCoatsData, clothList);

// @listeners: Слушатели событий для страницы catalog
