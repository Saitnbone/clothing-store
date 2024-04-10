// Файл для скрипта, который применяется для всей сраниц онлайн-магазина

// Перменные для проекта

const headerButton = document.querySelector(".header__button");
const footerSections = document.querySelectorAll(".footer__section");

// @todo Функция открытия меню в блоке header

// headerButton.addEventListener("click", openHeaderMenu);

// function openHeaderMenu() {
//   headerButton.style.display === "none"
//     ? (headerButton.style.display = "flex")
//     : (headerButton.style.display = "none");
// }

// @todo Функция открытия списков в блоке footer

footerSections.forEach((element) => {
  element.addEventListener("click", openFooterList);
});

function openFooterList(event) {
  const footerButton = event.currentTarget.querySelector(
    ".footer__section-list"
  );
  footerButton.style.display =
    footerButton.style.display === "none" ? "flex" : "none";
}
