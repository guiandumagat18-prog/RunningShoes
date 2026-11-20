import gsap from "gsap";

let heroContext;
let currentHero;

function initHeroAnimation() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const hero = document.querySelector(".hero");

  if (!hero || hero === currentHero) return;

  currentHero = hero;
  heroContext?.revert();

  heroContext = gsap.context(() => {
    const timeline = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    timeline
      .fromTo(
        ".hero-bg-image",
        {
          scale: 1.15,
        },
        {
          scale: 1,
          duration: 2.5,
          ease: "power2.out",
        },
        0,
      )

      .from(
        ".hero .absolute.inset-0 > div",
        {
          opacity: 0,
          duration: 1.5,
        },
        0,
      )

      .from(
        ".eyebrow",
        {
          y: 25,
          opacity: 0,
          duration: 0.8,
        },
        0.3,
      )

      .from(
        ".hero-line",
        {
          y: 80,
          opacity: 0,
          duration: 1,
          stagger: 0.16,
          ease: "power4.out",
        },
        0.5,
      )

      .from(
        ".hero-description",
        {
          y: 30,
          opacity: 0,
          duration: 0.9,
        },
        "-=0.45",
      )

      .from(
        ".hero-buttons > *",
        {
          y: 25,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
        },
        "-=0.4",
      )

      .from(
        ".hero-bottom",
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.3",
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

// Astro page navigation support
document.addEventListener("astro:page-load", initHeroAnimation);
