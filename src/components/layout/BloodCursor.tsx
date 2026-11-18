"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

/**
 * Desktop cursor: a soft, finely spaced crimson crosshair with a faint halo.
 * Small drops of blood fall from its centre as you move or scroll, and a click
 * lands a drop that runs briefly before fading. Text fields keep the normal
 * text cursor; touch and reduced motion keep the system one.
 */
export default function BloodCursor() {
  const crossRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !window.matchMedia("(pointer: fine) and (hover: hover)").matches) return;
    const cross = crossRef.current;
    const layer = layerRef.current;
    if (!cross || !layer) return;

    const html = document.documentElement;
    html.classList.add("has-blood-cursor");

    const target = { x: -100, y: -100 };
    const pos = { x: -100, y: -100 };
    let visible = false;
    let travel = 0;
    let lastDrip = 0;
    let lastScrollY = window.scrollY;
    let raf = 0;
    let live = 0;

    /* A stain where a drop lands, with a short run beneath it */
    const stain = (x: number, y: number, size: number, runMax: number) => {
      if (live > 18) return;
      live++;
      const s = document.createElement("span");
      s.className = "blood-stain";
      s.style.cssText = `left:${x}px;top:${y}px;width:${size}px;height:${size * 0.88}px;`;
      const run = document.createElement("span");
      run.className = "blood-run";
      s.appendChild(run);
      layer.appendChild(s);
      s.animate(
        [
          { transform: "translate(-50%,-50%) scale(0)", opacity: 0.95 },
          { transform: "translate(-50%,-50%) scale(1.15)", opacity: 0.95, offset: 0.1 },
          { transform: "translate(-50%,-50%) scale(1)", opacity: 0.9, offset: 0.2 },
          { transform: "translate(-50%,-50%) scale(1)", opacity: 0.8, offset: 0.65 },
          { transform: "translate(-50%,-50%) scale(1)", opacity: 0 },
        ],
        { duration: 1900, easing: "ease-out" },
      ).onfinish = () => {
        s.remove();
        live--;
      };
      run.animate(
        [{ height: "0px" }, { height: "0px", offset: 0.15 }, { height: `${runMax * (0.5 + Math.random() * 0.5)}px` }],
        { duration: 1300, easing: "cubic-bezier(.3,.6,.4,1)", fill: "forwards" },
      );
    };

    /* A small drop that falls from the centre and sometimes leaves a mark */
    const drip = (x: number, y: number) => {
      if (live > 18) return;
      live++;
      const size = 3 + Math.random() * 2.5;
      const d = document.createElement("span");
      d.className = "blood-fall";
      d.style.cssText = `left:${x - size / 2}px;top:${y + 4}px;width:${size}px;height:${size * 1.4}px;`;
      layer.appendChild(d);
      const fall = 30 + Math.random() * 46;
      const lands = Math.random() < 0.35;
      d.animate(
        [
          { transform: "translate3d(0,0,0) scale(.4)", opacity: 0 },
          { transform: "translate3d(0,3px,0) scale(1)", opacity: 0.95, offset: 0.15 },
          { transform: `translate3d(0,${fall}px,0) scale(.8,1.15)`, opacity: lands ? 0.95 : 0 },
        ],
        { duration: 700 + Math.random() * 350, easing: "cubic-bezier(.55,0,1,.45)" },
      ).onfinish = () => {
        d.remove();
        live--;
        if (lands) stain(x, y + fall + 6, size * 1.5, 8);
      };
    };

    const loop = () => {
      // a gentle ease keeps the motion fluid without losing precision
      pos.x += (target.x - pos.x) * 0.45;
      pos.y += (target.y - pos.y) * 0.45;
      cross.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    /* Drip once enough distance has been covered by moving or scrolling */
    const maybeDrip = () => {
      const now = performance.now();
      if (!visible || travel < 60 || now - lastDrip < 130) return;
      travel = 0;
      lastDrip = now;
      drip(target.x, target.y);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      if (visible) travel += Math.hypot(e.clientX - target.x, e.clientY - target.y);
      target.x = e.clientX;
      target.y = e.clientY;
      if (!visible) {
        visible = true;
        pos.x = target.x;
        pos.y = target.y;
        cross.style.opacity = "1";
      }
      maybeDrip();
    };
    const onScroll = () => {
      const y = window.scrollY;
      travel += Math.abs(y - lastScrollY) * 0.6;
      lastScrollY = y;
      maybeDrip();
    };
    const onOver = (e: PointerEvent) => {
      const el = e.target as HTMLElement;
      const field = el.closest("input, textarea, select, [contenteditable='true']");
      const hover = !field && !!el.closest("a, button, [role='button'], label, summary");
      cross.dataset.state = field ? "field" : hover ? "hover" : "idle";
    };
    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || cross.dataset.state === "field") return;
      cross.dataset.pressed = "true";
      stain(e.clientX, e.clientY, 8 + Math.random() * 3, 26);
    };
    const onUp = () => {
      delete cross.dataset.pressed;
    };
    const onLeave = () => {
      visible = false;
      cross.style.opacity = "0";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    html.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      html.classList.remove("has-blood-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      html.removeEventListener("pointerleave", onLeave);
      layer.replaceChildren();
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[200] hidden [@media(pointer:fine)]:block">
      <div ref={layerRef} className="absolute inset-0" />
      <div
        ref={crossRef}
        data-state="idle"
        className="crosshair-cursor absolute left-0 top-0 opacity-0 transition-opacity duration-300"
      >
        <span className="ch-halo" />
        <span className="ch ch-t" />
        <span className="ch ch-b" />
        <span className="ch ch-l" />
        <span className="ch ch-r" />
        <span className="ch-dot" />
      </div>
    </div>
  );
}
