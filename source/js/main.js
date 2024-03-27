import { initAccordion } from './modules/accordion/init-accordion';
import { initHeaderAccordion } from './modules/header-accordion/init-header-accordion';
import { initCustomSelect } from './modules/custom-select/init-custom-select';
import { initHeader } from './modules/header/init-header';
import { initModals } from './modules/modal/init-modals';
import { initPhoneMask } from './modules/init-phone-mask';
import { initPhoneValidation } from './modules/init-phone-validation';
import { initInfoSlider } from './modules/init-info-slider';


window.addEventListener('DOMContentLoaded', () => {
  initHeader();

  window.addEventListener('load', () => {
    initHeaderAccordion();
    initModals();
    initCustomSelect();
    initAccordion();
    initPhoneMask();
    initPhoneValidation();
    initInfoSlider();
  });
});





const swiper1 = new Swiper('.swiper-container', {
  loop: false,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: '.swiper-thumbs',
  },
});

const swiper2 = new Swiper(".swiper-thumbs", {
  spaceBetween: 10,
  watchSlidesProgress: true,
});


/*const swiper = new Swiper('.articles__slider', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  autoHeight: true,
  calculateHeight: true,



  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const mySwiper2Prev = document.querySelector('.swiper-button-prev-two')
const mySwiper2Next = document.querySelector('.swiper-button-next-two')
const main = new Swiper('.buy__slider', {
  slidesPerView: 2,
  spaceBetween: 20,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  breakpoints: {
    280: {
      slidesPerView: 1,
    },

    600: {
      slidesPerView: 1,
    },

    601: {
      slidesPerView: 2,
    }


  },


  navigation: {
    nextEl: mySwiper2Next,
    prevEl: mySwiper2Prev,
  },
});

document.addEventListener('DOMContentLoaded', () => {

  let myBtns = document.querySelectorAll('.pipe-machines__page-link');
  myBtns.forEach(function (btn) {

    btn.addEventListener('click', () => {
      myBtns.forEach(b => b.classList.remove('pipe-machines__page-link--active'));
      btn.classList.add('pipe-machines__page-link--active');
    });

  });
});



const swiper1 = new Swiper('.swiper-container', {
  loop: false,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: '.swiper-thumbs',
  },
});

const swiper2 = new Swiper(".swiper-thumbs", {
  spaceBetween: 10,
  watchSlidesProgress: true,
});*/



const prodBtn = document.querySelectorAll('.view__tab-btn');
const tabsInfo = document.querySelectorAll('.view__tab-info');


for (let item of prodBtn) {
  item.addEventListener('click', function () {
    for (let element of tabsInfo) {
      element.classList.remove('view__tab-info--active')
    }

    const content = document.querySelector('#' + item.dataset.tab);
    content.classList.add('view__tab-info--active')
  })
};

document.addEventListener('DOMContentLoaded', () => {
  prodBtn[0].classList.add('view__tab-btn--active');
  //prodBtn[0].style.borderBottom = 'none';
  tabsInfo[0].classList.add('view__tab-info--active');

  let myBtns = document.querySelectorAll('.view__tab-btn');
  myBtns.forEach(function (btn) {

    btn.addEventListener('click', () => {
      myBtns.forEach(b => b.classList.remove('view__tab-btn--active'));
      btn.classList.add('view__tab-btn--active');
    });

  });

});


$(document).ready(function () {
  $(".popup__close").click(function () {
    $(".popup").toggleClass("popup--hide")
  })

  $(".view__btn").click(function () {
    $(".popup").removeClass("popup--hide")
  })

  $(".popup__background").click(function () {
    $(".popup").addClass("popup--hide")
  })
})


/*const btnClose = document.querySelector('.header__btn-hach');
const mainMenu = document.querySelector('.header');
btnClose.addEventListener('click', function () {
  mainMenu.classList.remove('is-open');
})*/








