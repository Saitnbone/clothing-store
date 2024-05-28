// @todo: Функция открытия/закрытия выпадающих списков
export const toggleListState = (event, queryElement, domElement) => {
  if (event.target === queryElement) {
    domElement.classList.toggle("list__drop-down_show");
  }
};
