// @func: Функция добавления карточки в избранное
const addToFavorites = (cardElement) => {};

// @func: Функция создания карточки товара
export const createCard = (cardsData, clothList) => {
  // Константы для карточки
  const cardTemplate = document.querySelector("#card-template").content;

  // Отрисовка карточки из массива
  cardsData.forEach((card) => {
    const cardElement = cardTemplate
      .querySelector(".catalog__cloth-list-item")
      .cloneNode(true);
    const cardImage = cardElement.querySelector(".catalog__cloth-card-image");
    cardImage.src = card.image;
    clothList.append(cardElement);
    return cardElement;
  });
};
