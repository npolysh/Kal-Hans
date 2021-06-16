const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    slidesPerView: 4.5,
    spaceBetween: 20,
    loop: true,
    freeMode: true,

    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
  
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    // mousewheel: true,
  });