// Файл для скрипта, который применяется для всей сраниц онлайн-магазина

// Перменные для проекта

const headerButton = document.querySelector(".header__button");
const footerSections = document.querySelectorAll(".footer__section");

// @todo Функция открытия меню в блоке header

headerButton.addEventListener("click", openHeaderMenu);

function openHeaderMenu() {
  
}

// @todo Функция открытия списков в блоке footer

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
