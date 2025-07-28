const button = document.querySelector(".click");
const colorFlipper = document.querySelector(".flipper");
const hexColor = document.querySelector(".hex");
const colorText = document.querySelector(".color-name");

let current = "";

const simpleColors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "black",
  "gray",
  "brown",
  "lavender",
];
let hexChars = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

function getRandomHexColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hexChars[Math.floor(Math.random() * hexChars.length)];
  }
  return hexColor;
}

function getRandomSimpleColor() {
  return simpleColors[Math.floor(Math.random() * simpleColors.length)];
}

button.addEventListener("click", () => {
  let newColor;

  if (current === "color") {
    newColor = getRandomSimpleColor();
  } else {
    newColor = getRandomHexColor();
  }

  document.body.style.backgroundColor = newColor;
  colorText.textContent = newColor;

  if (
    newColor.toLowerCase() === "black" ||
    newColor.toLowerCase() === "#000000"
  ) {
    button.style.color = "white";
  } else {
    button.style.backgroundColor = ""; // Reset to original
    button.style.color = ""; // Reset to original
  }
});

colorFlipper.addEventListener("click", () => {
  hexColor.classList.remove("active");
  colorFlipper.classList.add("active");
  current = "color";
});

hexColor.addEventListener("click", () => {
  colorFlipper.classList.remove("active");
  hexColor.classList.add("active");
  current = "hex";
});
