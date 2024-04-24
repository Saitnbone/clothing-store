/* 
------------------------------------------------------------------------
                         Настройки скрипта для навигации header
                                  (все страницы)
                                        ||
                          Script settings for navigation header
                                    (all pages)
------------------------------------------------------------------------
*/

// Переменные для блока header

const header = document.querySelector(".header");

// Кнопки блока .header__list-of-things
const navButton = header.querySelector(".header__button");
const searchButton = header.querySelector(".search-button");

// :@todo Функция открытия функция проверки размеров экрана

// :@todo Функция проверки размеров экрана

window.addEventListener("resize", handleResize);

function handleResize() {
  const checkOpenedMobileMenu = window.matchMedia("(min-width: 569px)").matches;
  const popUpMobile = header.querySelector(".popup-mobile");

  if (checkOpenedMobileMenu && popUpMobile) {
    closeMobileHeaderMenu();
  }
}

// :@todo Функция открытия меню навигации в блоке header

navButton.addEventListener("click", toggleMobileHeaderMenu);

function toggleMobileHeaderMenu() {
  const popUpMobile = header.querySelector(".popup-mobile");

  if (
    window.innerWidth >= 569 ||
    popUpMobile.classList.contains("popup-mobile_show")
  ) {
    closeMobileHeaderMenu();
  } else {
    openMobileHeaderMenu();
  }
}

function openMobileHeaderMenu() {
  const popUpMobile = header.querySelector(".popup-mobile");

  if (popUpMobile) {
    popUpMobile.classList.add("popup-mobile_show");
  }
}

function closeMobileHeaderMenu() {
  const popUpMobile = header.querySelector(".popup-mobile");

  if (popUpMobile) {
    popUpMobile.classList.remove("popup-mobile_show");
  }
}

export default header;
