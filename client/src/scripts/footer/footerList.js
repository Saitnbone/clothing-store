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
