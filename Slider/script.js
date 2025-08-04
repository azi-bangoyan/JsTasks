const previousButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const wrapper = document.querySelector(".wrapper");
let slides = document.querySelectorAll(".article");

const slideWidth = 50; 
let current = 1;
let intervalId;

slides = document.querySelectorAll(".article");
const totalSlides = slides.length;


const firstSlide = slides[0].cloneNode(true);
const lastSlide = slides[slides.length - 1].cloneNode(true);
wrapper.appendChild(firstSlide); 
wrapper.insertBefore(lastSlide, slides[0]); 

slides = document.querySelectorAll(".article");
const totalSlidesWithClones = slides.length;

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

  if (current === totalSlidesWithClones) {
    setTimeout(() => {
      wrapper.style.transition = "none"; 
      wrapper.style.transform = `translateX(0rem)`; 
      current = 1; 

  
      setTimeout(() => {
        wrapper.style.transition = "transform 0.5s ease-in-out";
      }, 50); 
    }, 500); 

  } else if (current === 0) {
    setTimeout(() => {
      wrapper.style.transition = "none"; 
      wrapper.style.transform = `translateX(-${(totalSlides - 1) * slideWidth}rem)`; 
      current = totalSlides; 

   
      setTimeout(() => {
        wrapper.style.transition = "transform 0.5s ease-in-out"; 
      }, 50); 
    }, 500); 

  } else {
    wrapper.style.transition = "transform 0.5s ease-in-out"; 
    wrapper.style.transform = `translateX(-${(current - 1) * slideWidth}rem)`;
  }
}

nextButton.addEventListener("click", () => {
  if (wrapper.style.transition !== "none") {
    changeSlide(true); 
  }
});

previousButton.addEventListener("click", () => {
  resetInterval();

  current--;

  if (current === 0) {
    
    setTimeout(() => {
      wrapper.style.transition = "none"; 
      wrapper.style.transform = `translateX(-${(totalSlides - 1) * slideWidth}rem)`; 
      current = totalSlides; 
      setTimeout(() => {
        wrapper.style.transition = "transform 0.5s ease-in-out";
      }, 50); 
    }, 500); 
  } else {
    wrapper.style.transition = "transform 0.5s ease-in-out"; 
    wrapper.style.transform = `translateX(-${(current - 1) * slideWidth}rem)`;
  }
});

moveToSlide(current);
startInterval();
