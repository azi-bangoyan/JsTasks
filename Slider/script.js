const previousButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const wrapper = document.querySelector(".wrapper");
let slides = document.querySelectorAll(".article");

const slideWidth = 50; // rem (your current fixed width)
let current = 1;
let intervalId;

// Clone the first slide and add it to the end
const firstClone = slides[0].cloneNode(true);
wrapper.appendChild(firstClone);

// Update slides count
slides = document.querySelectorAll(".article");
const totalSlides = slides.length;

function startInterval() {
  intervalId = setInterval(() => changeSlide(), 5000);
}

function resetInterval() {
  clearInterval(intervalId);
  startInterval();
}

function moveToSlide(index) {
  wrapper.style.transition = "transform 0.5s ease-in-out";
  wrapper.style.transform = `translateX(-${(index - 1) * slideWidth}rem)`;
}

function changeSlide(isManual = false) {
  if (isManual) resetInterval();

  current++;
  wrapper.style.transition = "transform 0.5s ease-in-out";
  wrapper.style.transform = `translateX(-${(current - 1) * slideWidth}rem)`;

  if (current === totalSlides + 1) {
    // At clone → jump to real first
    setTimeout(() => {
      wrapper.style.transition = "none";
      wrapper.style.transform = `translateX(0rem)`;
      current = 1;
    }, 500); // must match transition time
  }
}

nextButton.addEventListener("click", () => changeSlide(true));

previousButton.addEventListener("click", () => {
  resetInterval();
  if (current === 1) {
    wrapper.style.transition = "none";
    wrapper.style.transform = `translateX(-${
      (totalSlides - 1) * slideWidth
    }rem)`;
    current = totalSlides;
    setTimeout(() => {
      wrapper.style.transition = "transform 0.5s ease-in-out";
      wrapper.style.transform = `translateX(-${(current - 1) * slideWidth}rem)`;
    }, 20);
  } else {
    current--;
    wrapper.style.transition = "transform 0.5s ease-in-out";
    wrapper.style.transform = `translateX(-${(current - 1) * slideWidth}rem)`;
  }
});

moveToSlide(current);
startInterval();
