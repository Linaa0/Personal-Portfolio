"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type Lenis from "lenis";

let registered = false;
export function getGsap() {
  if (!registered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return { gsap, ScrollTrigger };
}

/** Shared Lenis instance so navigation can scroll through it. */
let lenisInstance: Lenis | null = null;
export function setLenis(l: Lenis | null) {
  lenisInstance = l;
}
export function getLenis() {
  return lenisInstance;
}

export function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToId(id: string) {
  const el = id === "top" ? document.body : document.getElementById(id);
  if (!el) return;
  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(id === "top" ? 0 : el, { duration: 1.6 });
  } else {
    el.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
  }
  if (history.replaceState) history.replaceState(null, "", id === "top" ? "#" : `#${id}`);
}

export const ease = {
  velvet: "expo.out",
  silk: "power3.inOut",
} as const;
