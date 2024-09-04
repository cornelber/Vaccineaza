// animations.js
gsap.registerPlugin(ScrollTrigger);

const leftIllustrations = document.querySelectorAll(".left-illustration");
const rightIllustrations = document.querySelectorAll(".right-illustration");
const leftIllustrationsWrapper = document.querySelector(".left-illustrations");
const rightIllustrationsWrapper = document.querySelector(".right-illustrations");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

// Timeline for initial animations
const tl = gsap.timeline({ defaults: { duration: 0.8, ease: "power2.out" } });

// Animation for main content
tl.fromTo(main, { y: 100, opacity: 0 }, { y: 0, opacity: 1 });

// Animation for footer with slight overlap
tl.fromTo(footer, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.2");

// Function to animate illustrations
function animateIllustrations(wrapper, elements) {
  const topStart = parseFloat(getComputedStyle(wrapper).top);

  // Ensure initial state is correctly set by applying GSAP set
  gsap.set(wrapper, {
    top: `${topStart}px`,
  });

  // Scroll-triggered animation that adjusts "top" based on scroll position
  gsap.to(wrapper, {
    ease: "none",  
    scrollTrigger: {
      trigger: wrapper,
      start: "top bottom",  
      end: "bottom top",  
      scrub: true,  
      onUpdate: () => {
        const scrollAmount = window.scrollY;
        const moveBy = topStart - (scrollAmount * 0.03);  // Adjust speed by changing multiplier
        wrapper.style.top = `${moveBy}%`;  
      },
    },
  });


  // Animate individual elements inside the wrapper
  elements.forEach((element, index) => {
    const yStart = 0;
    const yEnd = 0;

    // Ensure initial state is correctly set by applying GSAP set
    gsap.set(element, {
      x: 0,
      y: yStart,
      opacity: 0,
      rotation: 0,
    });

    // Scroll-triggered animation with parallax effect and fade in/out
    gsap.fromTo(
      element,
      { y: yStart, opacity: 0, rotation: -10 }, // Start with opacity 0
      {
        y: yEnd + 10,
        opacity: 1, // End with opacity 1
        rotation: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",  
          end: "bottom 0%",
          scrub: true,
          onEnter: () => gsap.to(element, { opacity: 1, duration: 0.5 }), // Fade in on enter
          onLeave: () => gsap.to(element, { opacity: 0, duration: 0.5 }), // Fade out on leave
          onEnterBack: () => gsap.to(element, { opacity: 1, duration: 0.5 }), // Fade in on enter back
          onLeaveBack: () => gsap.to(element, { opacity: 0, duration: 0.5 }), // Fade out on leave back
        },
      }
    );

    // Subtle rotation animation
    gsap.to(element, {
      rotation: 5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 2,
      stagger: 0.2,
    });

    // Subtle bouncing animation
    gsap.to(element, {
      y: yEnd - 30,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 3,
      stagger: 0.2,
    });
  });
}
animateIllustrations(leftIllustrationsWrapper, leftIllustrations);
animateIllustrations(rightIllustrationsWrapper, rightIllustrations);