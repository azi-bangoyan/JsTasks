const decButton = document.querySelector(".decrease");
const resButton = document.querySelector(".reset");
const incButton = document.querySelector(".increase");
const countDiv = document.querySelector(".count");
let count = 0;
countDiv.textContent = count;

function updateCount(value = "") {
  switch (value) {
    case "decrease":
      if (count > 0) {
        count--;
      }
      break;
    case "increase":
      count++;
      break;

    default:
      count = 0;
  }

  return (countDiv.textContent = count);
}

decButton.addEventListener("click", () => updateCount("decrease"));

resButton.addEventListener("click", updateCount);

incButton.addEventListener("click", () => updateCount("increase"));
