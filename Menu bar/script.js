const menuBar = document.querySelector(".menu-bar");
const menu = document.querySelector(".menu");

function toggleMenu() {
  menu.classList.toggle("visible");
  menuBar.classList.toggle("fa-bars");
  menuBar.classList.toggle("fa-xmark");
}

menuBar.addEventListener("click", toggleMenu);
