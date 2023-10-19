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