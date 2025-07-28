const openButtons = document.querySelectorAll(".open");
const closeButtons = document.querySelectorAll(".close");
const answers = document.querySelectorAll(".answer");

const setButtonState = (currentButton, buttons, index) => {
  currentButton.classList.remove("active");
  currentButton.classList.add("inactive");
  buttons[index].classList.add("active");
  buttons[index].classList.remove("inactive");
};

const closeAll = () => {
  answers.forEach(answer => answer.classList.remove("active"));
  openButtons.forEach(btn => {
    btn.classList.add("active");
    btn.classList.remove("inactive");
  });
  closeButtons.forEach(btn => {
    btn.classList.remove("active");
    btn.classList.add("inactive");
  });
};

openButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    closeAll(); // Close everything
    answers[index].classList.add("active");
    setButtonState(button, closeButtons, index);
  });
});

closeButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    answers[index].classList.remove("active");
    setButtonState(button, openButtons, index);
  });
});
