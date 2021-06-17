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
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 40
          },
        1024: {
            slidesPerView: 3.5,
        },
        1440: {
            slidesPerView: 4.5,
        }
      }
  });