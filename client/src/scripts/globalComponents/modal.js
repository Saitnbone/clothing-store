// @todo: Функция закрития модальных окон через кнопку esc
const closeEscPopup = (evt) => {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    if (openedPopup) {
      openedPopup.classList.toggle("popup_opened");
    }
  }
};

// @todo: Функция открытия модального окна
export const openPopup = (modal) => {
  modal.classList.add("popup_opened");
  closeEscPopup(modal);
  document.addEventListener("keydown", closeEscPopup);
};

// @todo: Функция закрытия модального окна
export const closePopup = (modal) => {
  if (modal.classList.contains("popup_opened")) {
    modal.classList.remove("popup_opened");
  }
  document.removeEventListener("keydown", closeEscPopup);
};

// @todo: Функция закрития модальных окон через кнопку esc
