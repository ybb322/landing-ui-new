let toggleButtons = document.querySelector(".choose-plan__toggle-buttons");
let monthlyButton = document.querySelector(".choose-plan__monthly");
let yearlyButton = document.querySelector(".choose-plan__yearly");

toggleButtons.addEventListener("click", function () {
  monthlyButton.classList.toggle("period-button-active");
  yearlyButton.classList.toggle("period-button-active");
});
