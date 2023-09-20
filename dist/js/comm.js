// swiper mainnew script
var swiper = new Swiper(".mySwiper1", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

// tokenpost main / newscards slider
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 5,
  spaceBetween: 16,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    428: {
      slidesPerView: 1
    },
    744: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  }
});

// tokenpost main / keyword newscards slider
var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
