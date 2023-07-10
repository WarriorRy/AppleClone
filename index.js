var slides = document.getElementsByClassName("slide");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = "block";
}
  
  function previousSlide() {
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].style.display = "block";
  }
  