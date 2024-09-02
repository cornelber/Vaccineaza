// animations.js
gsap.registerPlugin(ScrollTrigger);

const leftIllustrations = document.querySelectorAll(".left-illustration");
const rightIllustrations = document.querySelectorAll(".right-illustration");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

// Timeline for initial animations
const tl = gsap.timeline({ defaults: { duration: 0.8, ease: "power2.out" } });

// Animation for main content
tl.fromTo(main, { y: 100, opacity: 0 }, { y: 0, opacity: 1 });

// Animation for footer with slight overlap
tl.fromTo(footer, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.2");

// Function to animate illustrations
function animateIllustrations(elements, xStart, yBouncing, scrollEase, scrollXStart, scrollYEffect) {
  elements.forEach((element) => {
    // Ensure initial state is correctly set by applying GSAP set
    gsap.set(element, {
      x: scrollXStart,
      y: 50, 
    });

    // Initial animation from slightly offscreen bottom to top on page load
    gsap.fromTo(
      element,
      { y: 50 }, 
      { 
        y: 0, 
        duration: 1.2, 
        ease: "power2.out" 
      }
    );

    // Scroll-triggered animation with parallax effect
    gsap.fromTo(
      element,
      { x: scrollXStart },
      {
        x: 0,  
        y: scrollYEffect, 
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",  
          end: "bottom 20%",
          scrub: scrollEase,
        },
      }
    );

    // Subtle bouncing animation
    gsap.to(element, {
      y: yBouncing,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 2,
      stagger: 0.2,
    });
  });
}

animateIllustrations(leftIllustrations, -100, -15, true, -50, -20); 
animateIllustrations(rightIllustrations, 100, 10, true, 50, 20);