// -----------------------------------------
// This controls the inner html inserted in HTML. 
// The data is from JSON file. 
// The (e) is from HTML onclick(e)
// -----------------------------------------

function dropdownMenu(e) {
  console.log(e)
  var item = "";
  var insert = "";

  fetch("./assets/json/navbar.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.mainNavigation[e].pages.length; i++) {
        item = data.mainNavigation[e].pages[i].title;
        link = data.mainNavigation[e].pages[i].link;
        insert += '<li><a href="' + link + '">' + item + "</a></li>";
      }
      document.getElementById("navMainDropDown").innerHTML = insert;
    });
  }

// -----------------------------------------------------
// This controls the dropdown menubar event listener waiting for a click on the burger
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


