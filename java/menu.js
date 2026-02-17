const menuButton = document.querySelector('.menu-toggle');
const closeButton = document.querySelector('.nav-close');
const navMenu = document.querySelector('.nav-menu');

menuButton.addEventListener('click', () => {
  navMenu.classList.add('open');
});

closeButton.addEventListener('click', () => {
  navMenu.classList.remove('open');
});

  const swiper = new Swiper('.mySwiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 5,
    pagination: {
      el:'.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });