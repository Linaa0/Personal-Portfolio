"use client";

import { useRef } from "react";

/** Crimson light that follows the pointer within its bounds. */
export default function Spotlight({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const { clientX, clientY } = e;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--spot-x", `${clientX - r.left}px`);
      el.style.setProperty("--spot-y", `${clientY - r.top}px`);
      el.style.setProperty("--spot-o", "1");
    });
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={() => ref.current?.style.setProperty("--spot-o", "0")}
      className={`relative ${className}`}
    >
      <div aria-hidden className="spotlight pointer-events-none absolute inset-0" style={{ opacity: "var(--spot-o, 0)" }} />
      {children}
    </div>
  );
}
