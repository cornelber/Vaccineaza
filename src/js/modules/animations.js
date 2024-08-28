// animations.js
gsap.registerPlugin(ScrollTrigger);

const leftIllustrations = document.querySelectorAll(".left-illustration");
const rightIllustrations = document.querySelectorAll(".right-illustration");
const main = document.querySelector("main");
const footer = document.querySelector("footer");



const tl = gsap.timeline(); // pentru gestionarea animatiilor
// Animația pentru main
tl.fromTo(
  main,
  { y: 100, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power2.out",
  }
);
// Animația pentru footer
tl.fromTo(
  footer,
  { y: 100, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power2.out",
  },
  "-=0.5"
);

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
leftIllustrations.forEach((illustration) => {
  gsap.fromTo(
    illustration,
    { x: -100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: illustration,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    }
  );
});

rightIllustrations.forEach((illustration) => {
  gsap.fromTo(
    illustration,
    { x: 100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: illustration,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
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
    paused: false,
  });

  gsap.to(rightIllustrations, {
    y: 10,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    duration: 2,
    stagger: 0.2,
    paused: false,
  });
}

addHoverAnimation();
