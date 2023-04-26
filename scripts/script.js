console.log("Start...");

var buttonMenu = document.getElementById("button-menu");
var menuMobile = document.getElementById("menu-mobile");
var menuIcon = document.querySelector(".menu-icon");

buttonMenu.addEventListener("click", function () {
  if (menuMobile.style.display === "block") {
    menuMobile.style.display = "none";
    menuIcon.classList.remove("rotated");
  } else {
    menuMobile.style.display = "block";
    menuIcon.classList.add("rotated");
  }
});