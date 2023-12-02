function toggleMenu() {
    const menu = document.querySelector('.header__nav');
    menu.classList.toggle('menu-open');
  }
  var swiper = new Swiper(".mySwiperThumb", {
    loop: true,
    slidesPerView: 3,
    direction: "vertical",
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiperMain", {
    loop: true,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    thumbs: {
      swiper: swiper,
    },
  });