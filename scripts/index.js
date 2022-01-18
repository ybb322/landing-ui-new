//import "./toggleButtons.js";
import "./brandsSlider.js";
import "./reviewsSlider.js";

let headerNavButton = document.querySelector(".header__button");
let headerMobileNav = document.querySelector(".header__mobile-nav");
let buttonLines = document.querySelectorAll(".header__button-line");

headerNavButton.addEventListener("click", function () {
  for (let i = 1; i <= 3; i++)
    document.querySelector(`.button-line-${i}`).classList.toggle("active");
  headerNavButton.classList.toggle("active");
  headerMobileNav.classList.toggle("active");
});
