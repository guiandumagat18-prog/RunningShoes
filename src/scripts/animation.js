import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Main entrance animation
const tl = gsap.timeline({
  defaults: {
    ease: "sine.out",
  },
});

tl.from("header", {
  y: -25,
  opacity: 0,
  duration: 0.9,
})
  .from(
    ".hero-title",
    {
      y: 45,
      opacity: 0,
      duration: 1.1,
    },
    "-=0.4",
  )
  .from(
    ".hero-description",
    {
      y: 25,
      opacity: 0,
      duration: 0.9,
    },
    "-=0.6",
  )
  .from(
    ".hero-button",
    {
      y: 15,
      opacity: 0,
      duration: 0.7,
    },
    "-=0.5",
  );

// Scroll reveal animation
gsap.utils.toArray(".reveal").forEach((element) => {
  gsap.from(element, {
    y: 35,
    opacity: 0,
    duration: 0.9,
    ease: "sine.out",
    scrollTrigger: {
      trigger: element,
      start: "top 88%",
      toggleActions: "play none none none",
    },
  });
});

// Staggered card animation
gsap.utils.toArray(".card-container").forEach((container) => {
  const cards = container.querySelectorAll(".card");

  gsap.from(cards, {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "sine.out",
    scrollTrigger: {
      trigger: container,
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });
});
