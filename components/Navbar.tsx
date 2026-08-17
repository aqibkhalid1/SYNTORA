"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Property Creative", href: "#property" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-premium ${
        scrolled ? "bg-bg/85 backdrop-blur-md border-b border-line" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-content mx-auto px-6 md:px-10 h-[76px] flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-tight text-ink">
          SYNTORA
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13px] tracking-wide text-muted hover:text-ink transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 border border-brass/70 text-ink text-[13px] px-5 py-2.5 tracking-wide hover:bg-brass hover:text-bg hover:border-brass transition-all duration-300 ease-premium"
        >
          Book a Creative Call
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden relative w-8 h-6 flex flex-col justify-between"
        >
          <span
            className={`block h-px bg-ink transition-transform duration-300 ${open ? "translate-y-[11px] rotate-45" : ""}`}
          />
          <span className={`block h-px bg-ink transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
          <span
            className={`block h-px bg-ink transition-transform duration-300 ${open ? "-translate-y-[11px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ease-premium bg-bg border-b border-line ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-muted hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 border border-brass/70 text-ink text-sm px-5 py-3 tracking-wide"
            >
              Book a Creative Call
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
