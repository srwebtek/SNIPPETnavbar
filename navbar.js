// -----------------------------------------------------
// This controls the dropdown menubar event listener
// -----------------------------------------------------

var dropdownContent = document.getElementById("navMainDropDown");
var dropdownButton = document.getElementById("navMainMenuBurger");

function showDropdown() {
  dropdownContent.style.display = "block";
}

function hideDropdown() {
  dropdownContent.style.display = "none";
}

dropdownButton.addEventListener("click", function (event) {
  if (dropdownContent.style.display === "none") {
    showDropdown();
  } else {
    hideDropdown();
  }
});

window.addEventListener("click", function (event) {
  if (event.target !== dropdownContent && event.target !== dropdownButton) {
    hideDropdown();
  }
});
