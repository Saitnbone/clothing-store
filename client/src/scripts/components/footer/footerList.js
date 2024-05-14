
// @todo: Функция открытия списков в блоке footer
export const openFooterList = (event) => {
  const footerButton = event.currentTarget.querySelector(
    ".footer__section-list"
  );
  if (window.innerWidth <= 950 && footerButton) {
    footerButton.classList.toggle("footer__section-list_show");
  }
}
