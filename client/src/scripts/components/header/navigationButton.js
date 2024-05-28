// :@todo Функция проверки размеров экрана
export const handleResize = () => {
  const checkOpenedMobileMenu = window.matchMedia("(min-width: 569px)").matches;
  const popUpMobile = document.querySelector(".popup-mobile");

  if (checkOpenedMobileMenu && popUpMobile) {
    closeMobileHeaderMenu();
  }
};

// :@todo Функция мобильного меню навигации в блоке header
export const toggleMobileHeaderMenu = () => {
  const popupMobile = document.querySelector(".popup-mobile");
  if (
    window.innerWidth >= 569 ||
    popupMobile.classList.contains("popup-mobile_show")
  ) {
    closeMobileHeaderMenu();
  } else {
    openMobileHeaderMenu();
  }
};

// @todo: Функция открытия мобильного навигационного меню
const openMobileHeaderMenu = () => {
  const popupMobile = document.querySelector(".popup-mobile");
  if (popupMobile) {
    popupMobile.classList.add("popup-mobile_show");
  }
};

// @todo: Функция закрытия мобильного навигационного меню
const closeMobileHeaderMenu = () => {
  const popupMobile = document.querySelector(".popup-mobile");
  if (popupMobile) {
    popupMobile.classList.remove("popup-mobile_show");
  }
};

// @todo: // :@todo Функция десктопного меню навигации в блоке header
export const toggleDesktopHeaderMenu = () => {
  const popupDesktop = document.querySelector(".popup-desktop");
};
