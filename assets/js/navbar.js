// const dropDownContent = `
//   <div class="footerMenu">
//     <ul id="footerMainNav" class="footerMainNav"></ul>
//     <div class="footerHorizontalLine"></div>
//     <ul id="footerSocialNav"></ul>
//     <div class="footerHorizontalLine"></div>
//     <ul id="footerPoliciesNav"></ul>
//   </div>
//   <div class="footerCopyright" aria-hidden="true">
//     <a href="https://srwebtek.github.io/">Copyright srwebtek &copy 2023</a>
//   </div>
// `;
// document.getElementById("++++++++").innerHTML = dropDownContent;

// -----------------------------------------
//  navigation menu
// -----------------------------------------



fetch("./assets/json/navbar.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    for (var i = 0; i < data.mainNavigation[0].pages.length; i++) {
      console.log(data.mainNavigation[0].pages[i].title);

  }});

// var mainNavOutput = "";

// fetch("../assets/json/navbar.json")
//   .then(function (resp) {
//     return resp.json();
//   })
//   .then(function (data) {
//     for (var i = 0; i < data.main.length; i++) {
//       mainNavOutput +=
//         '<li><a href="' +
//         data.main[i].link +
//         '">' +
//         data.main[i].title +
//         "</a></li>";
//     }

//     document.getElementById("footerMainNav").innerHTML = mainNavOutput;

//   });

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
