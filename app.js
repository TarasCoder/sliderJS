function main(number = 2) {
  const slides = document.querySelectorAll(".slide");

  slides[number].classList.add("active");

  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveClasses();
      slide.classList.add("active");
    });
  }
  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
}
main(4); //as parameter you can pass which pic can be displayed by default on start screen
