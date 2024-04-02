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



// Слайдер с навигацией в виде картинок //

/*const swiper1 = new Swiper('.swiper-container', {
  slidesPerView: 1,
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
  slidesPerView: 2,
  spaceBetween: 10,
  watchSlidesProgress: true,
});*/

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 40,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      spaceBetween: 20,
    },

    768: {
      spaceBetween: 40,
    }

  }
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
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
});

// Подключение слайдера на определенном брейкпоинте //

var init = false;
  var swiper;
  function swiperCard() {
    if (window.innerWidth <= 768) {
      if (!init) {
        init = true;
        swiper = new Swiper('.articles__slider', {
          slidesPerView: 'auto',
          spaceBetween: 30,
          observer: true,
          observeParents: true,
          observeSlideChildren: true,
          autoHeight: true,
          calculateHeight: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        });
      }
    } else if (init) {
      swiper.destroy();
      init = false;
    }
  }

  swiperCard();
  window.addEventListener("resize", swiperCard);
  
  
  // Закрытие элемента по клику и сохранение состояния закрытия после перезагрузки страницы //

  document.addEventListener("DOMContentLoaded", function () {
    const block = document.getElementById("block");
    const closeButton = document.getElementById("closeButton");
    const openButton = document.getElementById("openButton");

    if (localStorage && localStorage.hasOwnProperty('blockHidden')) {
        if (localStorage.getItem("blockHidden") === "true") {
            block.style.display = "none";
        }
    }

    closeButton.addEventListener("click", function () {
        block.style.display = "none";
        localStorage.setItem("blockHidden", "true");
    });

    openButton.addEventListener("click", function () {
        block.style.display = "block";
        localStorage.setItem('blockHidden', 'false');
    })
}); */



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


/*$(document).ready(function () {
  $(".pipe-machines__link-text").click(function () {
    $(this).siblings(".pipe-machines__sublist").toggleClass("pipe-machines__sublist--active")
  })
})*/




/*let link = document.querySelectorAll('.pipe-machines__link');
let dropdownMenu = document.querySelectorAll('.pipe-machines__sublist');

let clicks = 0;

link.addEventListener('click', function (event) {
  event.preventDefault();
  clicks++;

  if (clicks === 1) {

    dropdownMenu.style.display = 'flex';
  } else {

    window.location = link.href;
  }
});*/


$(document).ready(function () {
  $('.pipe-machines__link').on('click', function (e) {
    e.preventDefault();

    const menu = $(this).next('.pipe-machines__sublist');
    if (!menu.hasClass('show')) {
      $('.pipe-machines__sublist').removeClass('show');
      menu.addClass('show');
    } else {
      window.location.href = $(this).attr('href');
    }

    $('.pipe-machines__link').removeClass('pipe-machines__link--active');
    $(this).addClass('pipe-machines__link--active');
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.pipe-machines__link, .pipe-machines__sublist').length) {
      $('.pipe-machines__sublist').removeClass('show');
      $('.pipe-machines__link').removeClass('pipe-machines__link--active');
    }
  });
});










