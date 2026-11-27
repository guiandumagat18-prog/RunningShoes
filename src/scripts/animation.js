import gsap from "gsap";

let heroContext = null;
let currentHero = null;

function initHeroAnimation() {
  const hero = document.querySelector(".hero");

  // Stop if the hero section does not exist
  if (!hero) {
    heroContext?.revert();
    heroContext = null;
    currentHero = null;
    return;
  }

  // Prevent duplicate animations on the same hero
  if (hero === currentHero) return;

  // Clean up previous animations
  heroContext?.revert();
  heroContext = null;
  currentHero = hero;

  // Respect reduced motion preferences
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  // Create a scoped GSAP context
  heroContext = gsap.context(() => {
    const timeline = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    // Background image animation
    timeline.fromTo(
      ".hero-bg-image",
      {
        scale: 1.15,
      },
      {
        scale: 1,
        duration: 2.5,
        ease: "power2.out",
      },
      0
    );

    // Hero overlay animation
    timeline.from(
      ".hero .absolute.inset-0 > div",
      {
        opacity: 0,
        duration: 1.5,
      },
      0
    );

    // Small introductory text
    timeline.from(
      ".eyebrow",
      {
        y: 25,
        opacity: 0,
        duration: 0.8,
      },
      0.3
    );

    // Main heading animation
    timeline.from(
      ".hero-line",
      {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.16,
        ease: "power4.out",
      },
      0.5
    );

    // Description animation
    timeline.from(
      ".hero-description",
      {
        y: 30,
        opacity: 0,
        duration: 0.9,
      },
      "-=0.45"
    );

    // Buttons animation
    timeline.from(
      ".hero-buttons > *",
      {
        y: 25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
      },
      "-=0.4"
    );

    // Bottom hero content
    timeline.from(
      ".hero-bottom",
      {
        y: 20,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.3"
    );

  }, hero);
}

// Initial page load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initHeroAnimation, {
    once: true,
  });
} else {
  initHeroAnimation();
}

// Support Astro navigation
document.addEventListener("astro:page-load", initHeroAnimation);
