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

const newsSwiper = new Swiper('.news__slider', {
  loop: true,
  slidesPerView: 4,
  navigation: {
    nextEl: ".news__next",
    prevEl: ".news__prev"
  },
  scrollbar: {
    hide: true,
  }
});

const stockSwiper = new Swiper('.stock__slider', {
  loop: true,
  slidesPerView: 4,
  navigation: {
    nextEl: ".stock__next",
    prevEl: ".stock__prev"
  },
  scrollbar: {
    hide: true,
  }
});