const previousButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const wrapper = document.querySelector(".wrapper");
let slides = document.querySelectorAll(".article");

const slideWidth = 50; 
let current = 1;
let intervalId;
let isSliding = false; 


const firstSlide = slides[0].cloneNode(true);
const lastSlide = slides[slides.length - 1].cloneNode(true);
wrapper.appendChild(firstSlide);
wrapper.insertBefore(lastSlide, slides[0]);


slides = document.querySelectorAll(".article");
const totalSlides = slides.length - 2; 
const totalSlidesWithClones = slides.length;

function startInterval() {
  intervalId = setInterval(() => changeSlide(), 5000);
}

function resetInterval() {
  clearInterval(intervalId);
  startInterval();
}

function moveToSlide(index) {
  wrapper.style.transition = "none";
  wrapper.style.transform = `translateX(-${index * slideWidth}rem)`;
}


function changeSlide(isManual = false) {
  if (isSliding) return;
  isSliding = true;

  if (isManual) resetInterval();

  current++;

  wrapper.style.transition = "transform 0.5s ease-in-out";
  wrapper.style.transform = `translateX(-${current * slideWidth}rem)`;

  if (current === totalSlidesWithClones - 1) {
    setTimeout(() => {
      wrapper.style.transition = "none";
      current = 1;
      wrapper.style.transform = `translateX(-${current * slideWidth}rem)`;
      isSliding = false;
    }, 500);
  } else {
    setTimeout(() => {
      isSliding = false;
    }, 500);
  }
}

nextButton.addEventListener("click", () => {
  changeSlide(true);
});

previousButton.addEventListener("click", () => {
  if (isSliding) return;
  isSliding = true;
  resetInterval();

  current--;

  wrapper.style.transition = "transform 0.5s ease-in-out";
  wrapper.style.transform = `translateX(-${current * slideWidth}rem)`;

  if (current === 0) {
    setTimeout(() => {
      wrapper.style.transition = "none";
      current = totalSlides;
      wrapper.style.transform = `translateX(-${current * slideWidth}rem)`;
      isSliding = false;
    }, 500);
  } else {
    setTimeout(() => {
      isSliding = false;
    }, 500);
  }
});


moveToSlide(current);
startInterval();
