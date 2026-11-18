"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getGsap, prefersReducedMotion } from "@/lib/motion";

/**
 * One orchestrator for declarative scroll choreography. Sections stay server
 * components and opt in with data attributes:
 *
 *  data-hero="glow|frame|line|fade"        entrance, played once the intro ends
 *  data-reveal="lines|up|fade|stagger"     reveal when scrolled into view
 *  data-reveal="words"                     words light up as the text scrolls
 *  data-parallax="0.4"                     vertical drift relative to section
 *  data-zoom                               image settles from 1.12 to 1
 *  data-tone="ember|dusk|deep|flare"       re-lights the atmosphere
 *  data-stack / data-stack-card            stacking project cards (desktop)
 *  data-timeline / data-step               process line that fills and lights steps
 */
export default function ScrollScenes() {
  const pathname = usePathname();

  useEffect(() => {
    const { gsap, ScrollTrigger } = getGsap();
    const reduced = prefersReducedMotion();
    const root = document.documentElement;
    let onLoaderDone: (() => void) | null = null;

    const ctx = gsap.context(() => {
      /* Lighting changes per section */
      gsap.utils.toArray<HTMLElement>("[data-tone]").forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 55%",
          end: "bottom 55%",
          onToggle: (self) => {
            if (self.isActive) root.dataset.tone = section.dataset.tone;
          },
        });
      });

      if (reduced) {
        gsap.utils.toArray<HTMLElement>("[data-step]").forEach((s) => s.classList.add("is-active"));
        return;
      }

      /* Hero entrance, after the intro */
      if (document.querySelector("[data-hero-root]")) {
        const tl = gsap.timeline({ paused: true, defaults: { ease: "expo.out" } });
        tl.to("[data-hero='glow']", { opacity: 1, duration: 2.2, stagger: 0.2, ease: "power2.out" }, 0)
          .to("[data-hero='frame']", { clipPath: "inset(0% 0 0 0)", duration: 1.7, ease: "expo.inOut" }, 0.05)
          .fromTo("[data-hero='frame'] [data-hero-inner]", { scale: 1.3 }, { scale: 1, duration: 2.4 }, 0.05)
          .to("[data-hero='line'] > span", { y: 0, duration: 1.4, stagger: 0.12 }, 0.3)
          .to("[data-hero='fade']", { opacity: 1, y: 0, duration: 1.2, stagger: 0.09, ease: "power3.out" }, 0.75);
        onLoaderDone = () => tl.play();
        if (window.__loaderDone) onLoaderDone();
        else window.addEventListener("loader:done", onLoaderDone, { once: true });
      }

      /* Masked line reveals */
      gsap.utils.toArray<HTMLElement>("[data-reveal='lines']").forEach((el) => {
        gsap.to(el.querySelectorAll(".mask > span"), {
          y: 0,
          duration: 1.3,
          ease: "expo.out",
          stagger: 0.1,
          scrollTrigger: { trigger: el, start: "top 86%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal='up']").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 56 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal='fade']").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal='stagger']").forEach((el) => {
        gsap.fromTo(
          el.children,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "expo.out",
            stagger: 0.09,
            scrollTrigger: { trigger: el, start: "top 86%", once: true },
          },
        );
      });

      /* Words that light up with scroll */
      gsap.utils.toArray<HTMLElement>("[data-reveal='words']").forEach((el) => {
        gsap.to(el.querySelectorAll(".w"), {
          opacity: 1,
          ease: "none",
          stagger: 0.12,
          scrollTrigger: { trigger: el, start: "top 78%", end: "bottom 45%", scrub: 0.6 },
        });
      });

      /* Process timeline */
      gsap.utils.toArray<HTMLElement>("[data-timeline]").forEach((list) => {
        const fill = list.querySelector("[data-timeline-fill]");
        if (fill) {
          gsap.fromTo(
            fill,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: { trigger: list, start: "top 62%", end: "bottom 62%", scrub: 0.5 },
            },
          );
        }
        list.querySelectorAll<HTMLElement>("[data-step]").forEach((step) => {
          ScrollTrigger.create({
            trigger: step,
            start: "top 64%",
            onEnter: () => step.classList.add("is-active"),
            onLeaveBack: () => step.classList.remove("is-active"),
          });
        });
      });

      const mm = gsap.matchMedia();

      /* Parallax layers and image settling */
      mm.add({ desktop: "(min-width: 768px)", mobile: "(max-width: 767px)" }, (c) => {
        const factor = c.conditions?.desktop ? 1 : 0.4;
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          const speed = parseFloat(el.dataset.parallax || "0.3") * factor;
          const trigger = el.closest("section") ?? el;
          gsap.fromTo(
            el,
            { y: () => -speed * 110 },
            {
              y: () => speed * 110,
              ease: "none",
              scrollTrigger: { trigger, start: "top bottom", end: "bottom top", scrub: true, invalidateOnRefresh: true },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-zoom]").forEach((el) => {
          gsap.fromTo(
            el,
            { scale: 1.12 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: { trigger: el.parentElement ?? el, start: "top bottom", end: "bottom 40%", scrub: true },
            },
          );
        });
      });

      /* Stacking project cards */
      mm.add("(min-width: 1024px)", () => {
        gsap.utils.toArray<HTMLElement>("[data-stack]").forEach((stack) => {
          const cards = gsap.utils.toArray<HTMLElement>("[data-stack-card]", stack);
          cards.forEach((card, i) => {
            const next = cards[i + 1];
            if (!next) return;
            const inner = card.querySelector("[data-stack-inner]");
            const shade = card.querySelector("[data-stack-shade]");
            gsap
              .timeline({
                scrollTrigger: { trigger: next, start: "top bottom", end: "top 25%", scrub: true },
              })
              .to(inner, { scale: 0.92, ease: "none" }, 0)
              .to(shade, { opacity: 0.7, ease: "none" }, 0);
          });
        });
      });
    });

    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      if (onLoaderDone) window.removeEventListener("loader:done", onLoaderDone);
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
