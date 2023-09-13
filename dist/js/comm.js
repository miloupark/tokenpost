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
    }
  }
});

// tokenpost main / keyword newscards slider
  var splide = new Splide( '.splide', {
  type   : 'loop',
  drag   : 'free',
  perPage: 3,
  breakpoint: {
    1024: {
      perPage: 2,
    }
  }
} );
splide.mount();
