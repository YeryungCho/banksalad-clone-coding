const menuBtn = document.querySelector(".header__menu-btn");
const scrollAd = document.querySelector(".scroll-ad");
const header = document.querySelector(".header");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const menuPage = document.querySelector(".menu-page");
const exitBtn = document.querySelector(".menu-page__exit");

function menuClick() {
  header.classList.add("hidden");
  scrollAd.classList.add("hidden");
  main.classList.add("hidden");
  footer.classList.add("hidden");
  menuPage.classList.remove("hidden");
  menuPage.classList.add("appear");
}

function exitClick() {
  header.classList.remove("hidden");
  header.classList.add("appear");
  scrollAd.classList.remove("hidden");
  scrollAd.classList.add("appear");
  main.classList.remove("hidden");
  main.classList.add("appear");
  footer.classList.remove("hidden");
  footer.classList.add("appear");
  menuPage.classList.remove("appear");
  menuPage.classList.add("hidden");
}

menuBtn.addEventListener("click", menuClick);
exitBtn.addEventListener("click", exitClick);
