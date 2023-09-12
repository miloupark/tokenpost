// swiper mainnew script
var swiper = new Swiper(".mySwiper1", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// tokenpost main / newscards slider
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 5,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// tokenpost main / keyword newscards slider
  var splide = new Splide( '.splide', {
  type   : 'loop',
  drag   : 'free',
  perPage: 3,
} );
splide.mount();
