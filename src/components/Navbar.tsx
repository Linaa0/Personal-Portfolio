"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container-max flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="font-display text-lg font-bold tracking-tight text-white transition-colors hover:text-accent-light"
        >
          Lina<span className="text-accent-light">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-light"
            >
              Hire Me
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-lg p-2 text-muted transition-colors hover:text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 top-[65px] z-40 bg-background/95 backdrop-blur-lg md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-4 py-3 text-lg text-muted transition-colors hover:bg-surface hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <a
                href="#contact"
                className="block rounded-full bg-accent px-4 py-3 text-center text-lg font-medium text-white"
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
