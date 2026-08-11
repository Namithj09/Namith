import { useEffect } from "react";

/**
 * Hook that adds `.in` to any element with the `.reveal` class
 * as it enters the viewport. Mirrors the IntersectionObserver pattern
 * used in the original HTML.
 */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    
    // For hero-left: trigger reveal on minimal scroll
    const heroLeft = document.querySelector<HTMLElement>(".hero-left");
    let scrolled = 0;
    
    const handleScroll = () => {
      scrolled = window.scrollY;
      // Reveal after just 30px of scroll
      if (scrolled > 30 && heroLeft && !heroLeft.classList.contains("in")) {
        heroLeft.classList.add("in");
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.target !== heroLeft) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    els.forEach((el) => {
      if (el !== heroLeft) {
        io.observe(el);
      }
    });
    
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}

/** Adds a `.scrolled` class to the nav once the page is scrolled. */
export function useNavScroll() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    if (!nav) return;
    const onScroll = () => {
      if (window.scrollY > 60) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
