const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    slidesPerView: 4.5,
    spaceBetween: 20,
    loop: true,
    freeMode: true,
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1.5,
          spaceBetween: 20
        },
        // when window width is >= 640px
        600: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
  });