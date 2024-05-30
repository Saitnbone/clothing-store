// @func: Функция открытия мобильного навигационного меню
const openMobileHeaderMenu = (popupMobile) => {
  if (popupMobile) {
    popupMobile.classList.add("popup-mobile_show");
  }
};

// @func: Функция закрытия мобильного навигационного меню
const closeMobileHeaderMenu = (popupMobile) => {
  if (popupMobile) {
    popupMobile.classList.remove("popup-mobile_show");
  }
};

// @func: Функция открытия десктопного навигационного меню
const openDesktopHeaderMenu = (
  popupDesktop,
  headerNavBlock,
  headerElements
) => {
  if (popupDesktop) {
    popupDesktop.classList.add("popup-desktop_show");
    hideHeaderElements(headerElements);
    addHeaderPosition(headerNavBlock);
  }
};

// @func: Функция закрытия десктопного навигационного меню
const closeDesktopHeaderMenu = (
  popupDesktop,
  headerNavBlock,
  headerElements
) => {
  if (popupDesktop) {
    popupDesktop.classList.remove("popup-desktop_show");
    showHeaderElements(headerElements);
    removeHeaderPosition(headerNavBlock);
  }
};

// @func: Функция показа элементов header
const showHeaderElements = (headerElements) => {
  if (headerElements) {
    headerElements.forEach((element) => {
      element.classList.remove("header__element_hide");
    });
  }
};

// @func: Сокрытие элементов header
const hideHeaderElements = (headerElements) => {
  if (headerElements) {
    headerElements.forEach((element) => {
      element.classList.add("header__element_hide");
    });
  }
};

// @func: Функция переключения расположения элементов header
const addHeaderPosition = (headerNavBlock) => {
  if (headerNavBlock) {
    headerNavBlock.classList.add("navigation_flex-start");
  }
};

const removeHeaderPosition = (headerNavBlock) => {
  if (headerNavBlock) {
    headerNavBlock.classList.remove("navigation_flex-start");
  }
};

// @func: Функция переключения состояния меню в десктопе
const toggleDesktopHeaderMenu = (
  popupDesktop,
  headerNavBlock,
  headerElements
) => {
  if (!popupDesktop) return;

  if (popupDesktop.classList.contains("popup-desktop_show")) {
    closeDesktopHeaderMenu(popupDesktop, headerNavBlock, headerElements);
  } else {
    openDesktopHeaderMenu(popupDesktop, headerNavBlock, headerElements);
  }
};

// @func: Функция мобильного меню навигации в блоке header
const toggleMobileHeaderMenu = (popupMobile) => {
  if (!popupMobile) return;

  if (
    window.innerWidth >= 569 ||
    popupMobile.classList.contains("popup-mobile_show")
  ) {
    closeMobileHeaderMenu(popupMobile);
  } else {
    openMobileHeaderMenu(popupMobile);
  }
};

// @func: Функция проверки размеров экрана
export const checkDisplaySize = () => {
  const isDesktop = window.matchMedia("(min-width: 569px)").matches;
  const popupMobile = document.querySelector(".popup-mobile");
  const popupDesktop = document.querySelector(".popup-desktop");
  const headerNavBlock = document.querySelector(".header__navigation-block");
  const headerElements = document.querySelectorAll(".header__element");

  if (isDesktop) {
    if (popupMobile && popupMobile.classList.contains("popup-mobile_show")) {
      closeMobileHeaderMenu(popupMobile);
    }
  } else {
    if (popupDesktop && popupDesktop.classList.contains("popup-desktop_show")) {
      closeDesktopHeaderMenu(popupDesktop, headerNavBlock, headerElements);
    }
  }
};
// @func: Функция проверки состояния кнопки навигации
export const checkNavigationBlockState = (
  event,
  popupDesktop,
  popupMobile,
  headerNavBlock,
  headerElements
) => {
  if (window.innerWidth <= 569 && event.target) {
    toggleMobileHeaderMenu(popupMobile);
  } else {
    toggleDesktopHeaderMenu(popupDesktop, headerNavBlock, headerElements);
  }
};
