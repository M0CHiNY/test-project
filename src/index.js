import './index.html';

import './index.scss';

import Swiper from 'swiper/bundle';


const swiper = new Swiper('.swiper', {
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


