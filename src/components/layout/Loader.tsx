"use client";

import { useEffect, useRef, useState } from "react";
import { getGsap, getLenis, prefersReducedMotion } from "@/lib/motion";

const LINES = [
  ["Little", "by", "little,"],
  ["you", "build", "the", "figure."],
];
const WORDS = LINES.flat();

declare global {
  interface Window {
    __loaderDone?: boolean;
  }
}

/**
 * Opening sequence (under 5 seconds). Blood gathers along the top edge, then
 * one drip at a time lets go a single drop that lands on a word and brings it
 * up. A loading bar fills underneath the whole time. When it reaches 100 the
 * intro simply fades away and the site is there. No sweeps, no flashes.
 */
export default function Loader() {
  const root = useRef<HTMLDivElement>(null);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const { gsap, ScrollTrigger } = getGsap();
    const html = document.documentElement;
    window.scrollTo(0, 0);
    getLenis()?.stop();

    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      html.classList.remove("is-loading");
      getLenis()?.start();
      window.__loaderDone = true;
      window.dispatchEvent(new Event("loader:done"));
      requestAnimationFrame(() => ScrollTrigger.refresh());
      setGone(true);
    };

    const words = gsap.utils.toArray<HTMLElement>("[data-word]", el);
    const drips = gsap.utils.toArray<HTMLElement>("[data-drip]", el);
    const drops = gsap.utils.toArray<HTMLElement>("[data-drop]", el);
    const splashes = gsap.utils.toArray<HTMLElement>("[data-splash]", el);
    const count = el.querySelector<HTMLElement>("[data-count]");
    const bar = el.querySelector<HTMLElement>("[data-bar]");
    const progress = { v: 0 };
    const render = () => {
      if (count) count.textContent = `${Math.round(progress.v)}%`;
      if (bar) bar.style.transform = `scaleX(${progress.v / 100})`;
    };

    if (prefersReducedMotion()) {
      gsap.set(words, { opacity: 1 });
      const tl = gsap
        .timeline({ onComplete: finish })
        .to(progress, { v: 100, duration: 1.2, onUpdate: render })
        .to(el, { opacity: 0, duration: 0.4 });
      return () => {
        tl.kill();
      };
    }

    /* Line each drip and drop up with its word */
    const marks = words.map((w, i) => {
      const r = w.getBoundingClientRect();
      const x = r.left + r.width / 2;
      drips[i].style.left = `${x}px`;
      drops[i].style.left = `${x}px`;
      splashes[i].style.left = `${x}px`;
      splashes[i].style.top = `${r.top + r.height * 0.18}px`;
      return { land: r.top + r.height * 0.12, drip: 22 + ((i * 41) % 46) };
    });

    const tl = gsap.timeline({ defaults: { ease: "power2.out" }, onComplete: finish });

    tl.fromTo("[data-ledge]", { scaleY: 0 }, { scaleY: 1, duration: 0.7, ease: "power3.out" }, 0.1)
      .fromTo("[data-loader-meta]", { opacity: 0 }, { opacity: 1, duration: 0.6 }, 0.15)
      .to(progress, { v: 100, duration: 3.8, ease: "power1.inOut", onUpdate: render }, 0.2);

    words.forEach((w, i) => {
      const t = 0.45 + i * 0.36;
      const { land, drip } = marks[i];
      tl.fromTo(drips[i], { height: 0 }, { height: drip, duration: 0.42, ease: "power2.inOut" }, t)
        .set(drops[i], { opacity: 1, y: drip - 6, scaleX: 1, scaleY: 1 }, t + 0.36)
        .to(drops[i], { y: land - 10, scaleY: 1.35, scaleX: 0.82, duration: 0.44, ease: "power2.in" }, t + 0.36)
        .to(drips[i], { height: drip * 0.55, duration: 0.6, ease: "elastic.out(1, 0.5)" }, t + 0.38)
        .set(drops[i], { opacity: 0 }, t + 0.8)
        .fromTo(splashes[i], { scale: 0.2, opacity: 0.8 }, { scale: 1.8, opacity: 0, duration: 0.7 }, t + 0.8)
        .fromTo(
          w,
          { opacity: 0, y: 8, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7 },
          t + 0.78,
        );
    });

    /* A quiet exit: everything fades together */
    tl.to(el, { opacity: 0, duration: 0.7, ease: "power2.inOut" }, 4.15);

    /* Safety net: if animation frames are paused (background tab), still reveal the site */
    const fallback = window.setTimeout(() => {
      tl.progress(1);
      finish();
    }, 7000);

    return () => {
      window.clearTimeout(fallback);
      tl.kill();
    };
  }, []);

  if (gone) return null;

  return (
    <div
      ref={root}
      data-loader
      role="status"
      aria-label="Loading"
      className="fixed inset-0 z-[110] overflow-hidden bg-night"
    >
      {/* Goo filter lets the drips and drops read as liquid */}
      <svg aria-hidden className="absolute h-0 w-0">
        <filter id="blood-goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="b" />
          <feColorMatrix in="b" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10" result="g" />
          <feComposite in="SourceGraphic" in2="g" operator="atop" />
        </filter>
      </svg>

      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(55%_45%_at_50%_45%,rgb(42_4_10/.5),transparent_70%)]" />

      {/* Liquid layer */}
      <div aria-hidden className="absolute inset-0" style={{ filter: "url(#blood-goo)" }}>
        <div data-ledge className="absolute inset-x-0 top-0 h-2.5 origin-top bg-gradient-to-b from-[#3a0610] to-crimson" />
        {WORDS.map((w) => (
          <div
            key={`drip-${w}`}
            data-drip
            className="absolute top-0 w-[8px] -translate-x-1/2 rounded-b-full bg-gradient-to-b from-crimson to-wine"
            style={{ height: 0 }}
          />
        ))}
        {WORDS.map((w) => (
          <div key={`drop-${w}`} data-drop className="absolute top-0 -ml-[5px] opacity-0">
            <span className="block h-2.5 w-2.5 rotate-45 rounded-[0_50%_50%_50%] bg-gradient-to-br from-flare to-crimson" />
          </div>
        ))}
      </div>

      {/* Ripples where each drop lands */}
      {WORDS.map((w) => (
        <span
          key={`splash-${w}`}
          data-splash
          aria-hidden
          className="absolute h-2.5 w-9 -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-flare/60 opacity-0"
        />
      ))}

      {/* The line, built one word at a time, with the loading bar beneath */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <p className="text-center text-[clamp(1.4rem,3vw,2.3rem)] font-normal leading-[1.45] tracking-[-0.01em] text-rose">
          {LINES.map((line, li) => (
            <span key={li} className="block">
              {line.map((w) => (
                <span key={w} data-word className="mx-[0.16em] inline-block opacity-0 motion-reduce:opacity-100">
                  {w}
                </span>
              ))}
            </span>
          ))}
        </p>

        <div data-loader-meta className="mt-14 w-[min(16rem,60vw)]">
          <div className="h-px w-full overflow-hidden bg-rose/15">
            <div data-bar className="h-full w-full origin-left bg-gradient-to-r from-crimson to-flare" style={{ transform: "scaleX(0)" }} />
          </div>
          <div className="mt-4 flex items-center justify-between text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-dim">
            <span>Loading</span>
            <span data-count className="tabular-nums text-mist">
              0%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
