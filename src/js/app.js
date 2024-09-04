import './modules/accordion.js'
import './modules/animations.js'
import * as flsFunctions from './modules/functions.js'
import './modules/modal.js'

flsFunctions.isWebp()
flsFunctions.sliders()

const header = document.querySelector('.header')
const burger = document.querySelector('.burger')
const menu = document.querySelector('.header__nav')

if (burger && menu) {
    flsFunctions.burger(burger, menu, header)
}
if (header) {
    flsFunctions.fixedHeader(header)
}
if (document.querySelectorAll('[data-dropdown]')) {
    flsFunctions.dropdown()
}


new Swiper(".slider-benefits__body", {
    observer: true,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    effect: 'slide',
    simulateTouch: true,
    preloadImages: false,
    lazy: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
})

new Swiper('.slider-photo__body', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
    speed: 800,
    touchRatio: 1,
    simulateTouch: true,
    preloadImages: false,
    lazy: true,

    navigation: {
        prevEl: '.slider-arrow__prev',
        nextEl: '.slider-arrow__next',
    },
})
