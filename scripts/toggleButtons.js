export let toggleButtons = document.querySelector(
  ".choose-plan__toggle-buttons"
);
export let monthlyButton = document.querySelector(".choose-plan__monthly");
export let yearlyButton = document.querySelector(".choose-plan__yearly");

export let clickListener = toggleButtons.addEventListener("click", function () {
  monthlyButton.classList.toggle("period-button-active");
  yearlyButton.classList.toggle("period-button-active");
});
