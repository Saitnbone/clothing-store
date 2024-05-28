// @func: Функция проверки размеров экрана
export const checkDisplaySize = () => {
  const isDesktop = window.matchMedia("(min-width: 569px)").matches;
  const popupMobile = document.querySelector(".popup-mobile");

  if (
    isDesktop &&
    popupMobile &&
    popupMobile.classList.contains("popup-mobile_show")
  ) {
    closeMobileHeaderMenu(popupMobile);
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
const openDesktopNavMenu = (popupDesktop) => {
  if (popupDesktop) {
    popupDesktop.classList.add("popup-desktop_show");
  }
};

// @func: Функция проверки размера экрана девайса
export const checkNavButtonState = (event, popupDesktop, popupMobile) => {
  if (window.innerWidth <= 569 && event.target) {
    toggleMobileHeaderMenu(popupMobile);
  } else {
    openDesktopNavMenu(popupDesktop);
  }
};
