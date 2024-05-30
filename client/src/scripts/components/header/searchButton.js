// @func: Функция отображения блока с настройками
const toggleHeaderListOfTools = (headerListOfTools) => {
  headerListOfTools.classList.toggle("header__list-of-tools_hide");
};

// @func: Функция отображения поискового инпута
const toggleSearchHeaderInput = (searchHeaderInput, headerListOfTools) => {
  searchHeaderInput.classList.toggle("header__popup-search-block-input_show");
  toggleHeaderListOfTools(headerListOfTools);
};

// @func: Функция открытия поиска
export const checkSearchBlockState = (
  event,
  searchHeaderInput,
  headerListOfTools
) => {
  if (searchHeaderInput && headerListOfTools && event.target) {
    toggleSearchHeaderInput(searchHeaderInput, headerListOfTools);
    // toggleHeaderListOfTools(headerListOfTools);
  } else {
    return;
  }
};
