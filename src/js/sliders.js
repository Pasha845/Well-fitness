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
  slidesPerView: 4,
  grid: {
    rows: 1
  },
  spaceBetween: 30,
  navigation: {
    nextEl: ".stock__next",
    prevEl: ".stock__prev"
  },
  scrollbar: {
    hide: true,
  }
});

const newsSwiper = new Swiper('.news__slider', {
  slidesPerView: 4,
  grid: {
    rows: 1
  },
  spaceBetween: 30,
  navigation: {
    nextEl: ".news__next",
    prevEl: ".news__prev"
  },
  scrollbar: {
    hide: true,
  }
});