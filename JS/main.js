import { language } from "./language.js";
language();

const btnMenu = document.querySelector(".header__menu");
const backgroundMenu = document.querySelector(".menu");
const freedomMenu = document.querySelector(".menu__freedom");
const headerRigth = document.querySelector(".header__rigth");

btnMenu.addEventListener("click", menu);
freedomMenu.addEventListener("click", menu);
function menu() {
  if (btnMenu.classList.contains("header__menu-active")) {
    btnMenu.classList.remove("header__menu-active");
    headerRigth.classList.remove("header__rigth-active");
    document.body.style.overflow = "visible";
    backgroundMenu.style.display = "none";
  } else {
    btnMenu.classList.add("header__menu-active");
    headerRigth.classList.add("header__rigth-active");
    document.body.style.overflow = "hidden";
    backgroundMenu.style.display = "flex";
  }
}

const BtnPopupForms = document.querySelectorAll('[data-id="btn_contact-us"]');
const backgroundPopupForm = document.querySelector(".popup_form");
const freedomPopupForm = document.querySelector(".popup_form__freedom");
BtnPopupForms.forEach((BtnPopupForm) => {
  BtnPopupForm.addEventListener("click", popupForm);
});
freedomPopupForm.addEventListener("click", popupForm);

function popupForm() {
  if (backgroundPopupForm.classList.contains("popup_form-active")) {
    backgroundPopupForm.classList.remove("popup_form-active");
    document.body.style.overflow = "visible";
  } else {
    backgroundPopupForm.classList.add("popup_form-active");
    document.body.style.overflow = "hidden";
    if (btnMenu.classList.contains("header__menu-active")) {
      btnMenu.classList.remove("header__menu-active");
      headerRigth.classList.remove("header__rigth-active");
      backgroundMenu.style.display = "none";
    }
  }
}
