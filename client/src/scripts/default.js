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
const profileButton = header.querySelector(".profile-button");
const favoritesButton = header.querySelector(".favorites-button");
const basketButton = header.querySelector(".basket-button");

// :@todo Функция открытия меню в блоке header

navButton.addEventListener("click", openMobileHeaderMenu);

function openMobileHeaderMenu() {
  const popUpMobile = header.querySelector(".popup-mobile");

  if (window.innerWidth <= 568 && popUpMobile) {
    popUpMobile.classList.toggle("popup-mobile_show");
  }
}

// :@todo Функция открытия корзины в блоке header

// basketButton.addEventListener("click", openHeaderBasket);

// function openHeaderBasket() {}

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
