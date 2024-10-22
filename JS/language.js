import { homeTexts } from "./lahg/homeTexts.js";

export function language() {
  const langButtons = document.querySelectorAll("[data-btn]");
  const allLangs = ["en", "fr", "ru", "it"];
  const currentPathName = window.location.pathname;
  let currentLang =
    localStorage.getItem("language") || checkBrowserLang() || "ru";
  let currentTexts = {};

  // Проверка пути страницы сайта
  function checkPagePathName() {
    switch (currentPathName) {
      case "/index.html":
        currentTexts = homeTexts();
        break;

      default:
        currentTexts = homeTexts();
        break;
    }
  }
  checkPagePathName();

  // Изменение языка у текстов
  function changeLang() {
    for (const key in currentTexts) {
      let elem = document.querySelector(`[data-lang=${key}]`);
      if (elem) {
        elem.textContent = currentTexts[key][currentLang];
      }
    }
  }
  changeLang();

  // Вешаем обработчики на каждую кнопку
  langButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      if (!event.target.classList.contains("header__btn_active")) {
        currentLang = event.target.dataset.btn;
        localStorage.setItem("language", event.target.dataset.btn);
        resetActiveClass(langButtons, "header__btn_active");
        btn.classList.add("header__btn_active");
        changeLang();
      }
    });
  });

  // Сброс активного класса у переданного массива элементов
  function resetActiveClass(arr, activeClass) {
    arr.forEach((elem) => {
      elem.classList.remove(activeClass);
    });
  }

  // Проверка активной кнопки
  function checkActiveLangButton() {
    switch (currentLang) {
      case "en":
        document
          .querySelector('[data-btn="en"]')
          .classList.add("header__btn_active");
        break;
      case "fr":
        document
          .querySelector('[data-btn="fr"]')
          .classList.add("header__btn_active");
        break;
      case "ru":
        document
          .querySelector('[data-btn="ru"]')
          .classList.add("header__btn_active");
        break;
      case "it":
        document
          .querySelector('[data-btn="it"]')
          .classList.add("header__btn_active");
        break;

      default:
        document
          .querySelector('[data-btn="ru"]')
          .classList.add("header__btn_active");
        break;
    }
  }
  checkActiveLangButton();

  // Проверка языка браузера
  function checkBrowserLang() {
    const navLang = navigator.language.slice(0, 2).toLowerCase();
    const result = allLangs.some((elem) => {
      return elem === navLang;
    });
    if (result) {
      return navLang;
    }
  }

  console.log("navigator.language", checkBrowserLang());
}
