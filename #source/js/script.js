document.querySelector('.header__burger').addEventListener('click', function () {
   document.querySelector('.header__burger').classList.toggle('active');
   document.querySelector('.header-burger__block').classList.toggle('active');
   document.querySelector('body').classList.toggle('lock');
});
document.querySelector('.header__btn').addEventListener('mouseover', function () {
   document.querySelector('.header__shadow').classList.add('active');
   document.querySelector('.header__input').classList.add('active');
});
document.querySelector('.header__btn').addEventListener('mouseout', function () {
   document.querySelector('.header__shadow').classList.remove('active');
   document.querySelector('.header__input').classList.remove('active');
});



const mySwiper = new Swiper('.product__slider', {
   slidesPerView: 1,
   spaceBetween: 30,
   slidesPerGroup: 1,
   breakpoints: {
      992: {
         slidesPerView: 1,
         slidesPerGroup: 1,
      },
   }
});
const mySwiperTwo = new Swiper('.product__slider-2', {
   loop: true,
   slidesPerView: 3,
   slideToClickedSlide: true,
   spaceBetween: 27,
   slidesPerGroup: 1,
   thumbs: {
      swiper: {
         el: '.product__slider',
         slidesPerView: 1,
         spaceBetween: 30,
         slidesPerGroup: 1,
      }
   }
});

const swiperPrevTwo = document.getElementById('swiperPrev')
const swiperNextTwo = document.getElementById('swiperNext')

swiperPrevTwo.addEventListener('click', () => {
   mySwiperTwo.slidePrev();
})
swiperNextTwo.addEventListener('click', () => {
   mySwiperTwo.slideNext();
})

const mySwiperFour = new Swiper('.products__slider2', {
   loop: true,
   slidesPerView: 4,
   spaceBetween: 32,
   slidesPerGroup: 1,
   breakpoints: {
      1200: {
         slidesPerView: 4,
         slidesPerGroup: 1,
      },
      767: {
         spaceBetween: 30,
         slidesPerView: 3,
         slidesPerGroup: 1,
      },
      500: {
         spaceBetween: 16,
         slidesPerView: 2,
         slidesPerGroup: 1,
      },
      200: {
         spaceBetween: 16,
         slidesPerView: 1,
         slidesPerGroup: 1,
      },
   }
});

const swiperPrevFour = document.getElementById('swiperPrev-3')
const swiperNextFour = document.getElementById('swiperNext-3')

swiperPrevFour.addEventListener('click', () => {
   mySwiperFour.slidePrev();
})
swiperNextFour.addEventListener('click', () => {
   mySwiperFour.slideNext();
})


const mySwiperThree = new Swiper('.products__slider', {
   loop: true,
   slidesPerView: 4,
   spaceBetween: 32,
   slidesPerGroup: 1,
   breakpoints: {
      1200: {
         slidesPerView: 4,
         slidesPerGroup: 1,
      },
      767: {
         spaceBetween: 30,
         slidesPerView: 3,
         slidesPerGroup: 1,
      },
      500: {
         spaceBetween: 16,
         slidesPerView: 2,
         slidesPerGroup: 1,
      },
      200: {
         spaceBetween: 16,
         slidesPerView: 1,
         slidesPerGroup: 1,
      },
   }
});

const swiperPrevThree = document.getElementById('swiperPrev-2')
const swiperNextThree = document.getElementById('swiperNext-2')

swiperPrevThree.addEventListener('click', () => {
   mySwiperThree.slidePrev();
})
swiperNextThree.addEventListener('click', () => {
   mySwiperThree.slideNext();
})