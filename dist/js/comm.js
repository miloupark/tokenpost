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
  slidesPerView: 3,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoint: {
    1024: {
      slidesPerView: 4
    },
    744: {
      slidesPerView: 1
    },
    428: {
      slidesPerView: 1
    },
    1440: {
      slidesPerView: 5
    }
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

//   var splide = new Splide( '.splide', {
//   type   : 'loop',
//   drag   : 'free',
//   perPage: 3,
//   breakpoint: {
//     1024: {
//       perPage: 2,
//     }
//   }
// } );
// splide.mount();
