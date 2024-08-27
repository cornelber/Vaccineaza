import * as flsFunctions from './modules/functions.js'

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

gsap.registerPlugin(ScrollTrigger);

const leftIllustrations = document.querySelectorAll('.left-illustration');
const rightIllustrations = document.querySelectorAll('.right-illustration');

// // Animația inițială pentru SVG-uri
// gsap.fromTo(leftIllustrations,
//     { x: -100, opacity: 0, y: 100, scale: 0.8 },
//     {
//         x: 0,
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         duration: 1,
//         stagger: 0.2,
//         ease: "power2.out" // Efect de ieșire mai lină
//     }
// );

// gsap.fromTo(rightIllustrations,
//     { x: 100, opacity: 0, y: 100, scale: 0.8 },
//     {
//         x: 0,
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         duration: 1,
//         stagger: 0.2,
//         ease: "power2.out" // Efect de ieșire mai lină
//     }
// );

// Animația pentru mișcare la scroll
leftIllustrations.forEach((illustration, index) => {
    gsap.fromTo(illustration, 
        { x: -100, opacity: 0 }, 
        { 
            x: 0, 
            opacity: 1, 
            scrollTrigger: {
                trigger: illustration,
                start: "top 80%",
                end: "top 20%",
                scrub: true
            }
        }
    );
});

rightIllustrations.forEach((illustration, index) => {
    gsap.fromTo(illustration, 
        { x: 100, opacity: 0 }, 
        { 
            x: 0, 
            opacity: 1, 
            scrollTrigger: {
                trigger: illustration,
                start: "top 80%",
                end: "top 20%",
                scrub: true
            }
        }
    );
});

// Animatie "bouncing" (sus-jos) - static
function addHoverAnimation() {
    gsap.to(leftIllustrations, {
        y: -15,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 2,
        stagger: 0.2,
        paused: false
    });

    gsap.to(rightIllustrations, {
        y: 10,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 2,
        stagger: 0.2,
        paused: false 
    });
}
addHoverAnimation();