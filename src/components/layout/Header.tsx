"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, site } from "@/lib/site-config";
import { getLenis, scrollToId } from "@/lib/motion";
import Magnetic from "@/components/ui/Magnetic";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Fixed header: transparent over the hero, a soft dark bar once scrolled.
 * It steps out of the way while scrolling down and returns on scroll up.
 */
export default function Header() {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let frame = 0;
    let lastY = window.scrollY;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
      }
      setScrolled(y > 24);
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > lastY && y > 320);
        lastY = y;
      }
      const probe = y + window.innerHeight * 0.4;
      let current: string | null = null;
      navLinks.forEach((l) => {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top + y <= probe) current = l.id;
      });
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  /* Mobile menu: lock scroll, Escape closes, focus stays inside */
  useEffect(() => {
    const lenis = getLenis();
    if (!open) {
      if (!document.documentElement.classList.contains("is-loading")) lenis?.start();
      document.body.style.overflow = "";
      return;
    }
    lenis?.stop();
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
      if (e.key === "Tab" && menuRef.current) {
        const items = Array.from(menuRef.current.querySelectorAll<HTMLElement>("a"));
        items.push(buttonRef.current!);
        const i = items.indexOf(document.activeElement as HTMLElement);
        if (e.shiftKey && i <= 0) {
          e.preventDefault();
          items[items.length - 1].focus();
        } else if (!e.shiftKey && i === items.length - 1) {
          e.preventDefault();
          items[0].focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    window.setTimeout(() => scrollToId(id), 150);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color] duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        } ${scrolled && !open ? "border-b border-line bg-night/70 backdrop-blur-xl" : "border-b border-transparent"}`}
      >
        <div className="shell flex h-[var(--nav-h)] items-center justify-between gap-8">
          <a href="#top" className="group flex items-center gap-3" aria-label={`${site.name}, back to top`}>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-rose/40 text-[0.7rem] font-semibold tracking-[0.08em] text-paper transition-colors duration-500 group-hover:border-rose group-hover:bg-crimson/40">
              {site.initials}
            </span>
            <span className="hidden text-[0.95rem] font-medium tracking-tight text-paper sm:inline">{site.shortName}</span>
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-10">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    aria-current={active === l.id ? "true" : undefined}
                    className={`relative py-2 text-[0.86rem] font-medium tracking-wide transition-colors duration-300 ${
                      active === l.id ? "text-paper" : "text-mist hover:text-paper"
                    }`}
                  >
                    {l.label}
                    <span
                      aria-hidden
                      className={`absolute -bottom-0.5 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-flare transition-all duration-500 ${
                        active === l.id ? "opacity-100" : "scale-0 opacity-0"
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <Magnetic>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full bg-paper px-6 py-2.5 text-[0.82rem] font-semibold text-night transition-colors duration-500 hover:bg-rose"
                >
                  Let&apos;s talk
                </a>
              </Magnetic>
            </div>
            <button
              ref={buttonRef}
              type="button"
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen((v) => !v)}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-rose/30 lg:hidden"
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <span aria-hidden className="relative block h-2.5 w-4">
                <span
                  className={`absolute left-0 top-0 h-px w-full bg-paper transition-transform duration-500 ${
                    open ? "translate-y-[5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-px w-full bg-paper transition-transform duration-500 ${
                    open ? "-translate-y-[5px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Reading progress */}
        <div aria-hidden className="absolute inset-x-0 bottom-[-1px] h-px">
          <div
            ref={progressRef}
            className="h-full origin-left bg-gradient-to-r from-crimson via-flare to-rose"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-0 z-40 bg-night lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
            data-lenis-prevent
          >
            <div aria-hidden className="absolute inset-0 bg-[radial-gradient(80%_60%_at_80%_20%,rgb(107_11_25/.5),transparent_70%)]" />
            <div className="shell relative flex h-full flex-col justify-between pb-12 pt-[calc(var(--nav-h)+3rem)]">
              <ol className="space-y-2">
                {navLinks.map((l, i) => (
                  <li key={l.id} className="overflow-hidden">
                    <motion.a
                      href={`#${l.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        go(l.id);
                      }}
                      initial={{ y: "105%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "105%" }}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.06, ease: EASE }}
                      className="flex items-baseline gap-5 py-2"
                    >
                      <span className="w-6 text-xs font-semibold tabular-nums text-rose">0{i + 1}</span>
                      <span className={`text-[2.6rem] font-light leading-none ${active === l.id ? "text-rose" : "text-paper"}`}>
                        {l.label}
                      </span>
                    </motion.a>
                  </li>
                ))}
              </ol>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="space-y-2 text-sm text-mist"
              >
                <a className="block hover:text-paper" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
                <p>{site.location}</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
