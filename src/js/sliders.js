const heroSwiper = new Swiper('.hero__slider', {
  loop: true,
  navigation: {
    nextEl: ".hero__next",
    prevEl: ".hero__prev"
  },
  scrollbar: {
    hide: true,
  }
});

const stockSwiper = new Swiper('.stock__slider', {
  slidesPerView: "auto",
  spaceBetween: 30,
  navigation: {
    nextEl: ".stock__next",
    prevEl: ".stock__prev",
    disabledClass: "stock__dis"
  },
  scrollbar: {
    hide: true,
  },
  breakpoints: {
    630: {
      slidesPerView: 2
    },
    668: {
      slidesPerView: 4
    },
    1300: {
      slidesPerView: 4
    },
    1500: {
      slidesPerView: 5
    }
  }
});

const newsSwiper = new Swiper('.news__slider', {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".news__next",
    prevEl: ".news__prev",
    disabledClass: "news__dis"
  },
  scrollbar: {
    hide: true,
  }
});