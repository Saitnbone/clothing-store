// Файл для скрипта, который применяется для всех сраниц онлайн-магазина

// Перменные для проекта

/* 
------------------------------------------------------------------------
                         Настройки скрипта для блока header
                                  (все страницы)
                                        ||
                          Script settings for block header
                                    (all pages)
------------------------------------------------------------------------
*/

// Переменные для блока header

// querySelector блока header
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

/* 
------------------------------------------------------------------------
                         Настройки скрипта для блока footer
                                  (все страницы)
                                        ||
                          Script settings for block footer
                                    (all pages)
------------------------------------------------------------------------
*/

// Переменнные для блока footer

const footerSections = document.querySelectorAll(".footer__section");

// :@todo Функция открытия списков в блоке footer

footerSections.forEach((element) => {
  element.addEventListener("click", openFooterList);
});

function openFooterList(event) {
  const footerButton = event.currentTarget.querySelector(
    ".footer__section-list"
  );
  if (window.innerWidth <= 950 && footerButton) {
    footerButton.classList.toggle("footer__section-list_show");
  }
}
