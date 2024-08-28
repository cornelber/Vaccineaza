import * as flsFunctions from './modules/functions.js'
import './modules/animations.js'
import './modules/modal.js'
import './modules/accordion.js'

flsFunctions.isWebp();

const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');

if (burger && menu) {
    flsFunctions.burger(burger, menu, header)
}
if (header) {
    flsFunctions.fixedHeader(header)
}

if(document.querySelectorAll('[data-dropdown]')){
    flsFunctions.dropdown()
}


let benefitsSwiper = new Swiper(".slider-benefits", {
    pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    },
});
