const slider = function () {
  // Slider
  const slides = document.querySelectorAll(".slide");
  const slider = document.querySelector(".slider");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length - 1;

  // Functions
  // Dots
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  // slider.style.transform = "scale(0.3) translateX(-1200px)";
  // slider.style.overflow = "visible";

  // Go to slide
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  // Previous slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  // Event handler
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  // Keydown
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") nextSlide();
    e.key === "ArrowLeft" && prevSlide();
  });

  // Dots
  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

/*********************************************************************************************************/
/* SCROLL NAVIGATION PAGE */
/*********************************************************************************************************/
document
  .querySelector(".main-nav-list")
  .addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("nav__link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

// // Sticky Navigation
// // const section1 = document.querySelector("#section1");
// const header = document.querySelector(".header");
// const nav = document.querySelector(".nav");
// const navHeight = section1.getBoundingClientRect().height;

// const stickyNav = function (entries) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) header.classList.add("sticky");
//   else header.classList.remove("sticky");
// };

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0.1,
//   rootMargin: `-${navHeight}px`,
// });
// headerObserver.observe(header);
