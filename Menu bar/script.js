const menuBar = document.querySelector(".menu-bar");
const menu = document.querySelector(".menu");

function openBar() {
  if (menu.classList.contains("visible")) {
    menu.classList.remove("visible");
  } else {
    menu.classList.add("visible");
  }
}

menuBar.onclick = openBar;
