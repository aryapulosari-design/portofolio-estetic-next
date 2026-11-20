"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const links = [
  { id: "hero", href: "/#hero", label: "Home" },
  { id: "about", href: "/#about", label: "About" },
  { id: "experience", href: "/#experience", label: "Experience" },
  { id: "projects", href: "/#projects", label: "Projects" },
  { id: "certificates", href: "/#certificates", label: "Certificates" },
  { id: "contact", href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let frame = 0;
    let lastY = window.scrollY;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      if (y < 96) {
        setHidden(false);
        lastY = y;
      } else if (Math.abs(y - lastY) > 12) {
        setHidden(y > lastY);
        lastY = y;
      }
      const readingLine = window.innerHeight * 0.42;
      let current = "hero";
      for (const { id } of links) {
        const top = document.getElementById(id)?.getBoundingClientRect().top;
        if (top !== undefined && top <= readingLine) current = id;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) current = "contact";
      setActive(current);
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header onFocusCapture={() => setHidden(false)} className={`nav-shell sticky top-4 z-50 mx-auto mt-4 w-[calc(100%-2rem)] max-w-3xl border border-border bg-card/95 p-1 text-foreground shadow-xl shadow-black/30 backdrop-blur-xl lg:w-fit ${menuOpen ? "rounded-[1.75rem]" : "rounded-full"} ${hidden && !menuOpen ? "is-hidden" : ""}`}>
      <a href="#main-content" className="sr-only absolute left-2 top-1 z-10 rounded-full bg-primary px-3 py-2 font-medium text-primary-foreground focus:not-sr-only focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        Skip to content
      </a>
      <div className="flex items-center gap-1">
        <Link href="/#hero" aria-label="Arya Kharisudin Irfani — Home" className="grid size-11 shrink-0 place-items-center rounded-full border border-primary/30 bg-primary/10 text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
          <svg viewBox="0 0 32 32" fill="none" className="size-6" aria-hidden="true">
            <path d="M6 24 16 6l10 18M10 18h12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-0.5 lg:flex">
          {links.map(({ id, href, label }) => (
            <Link key={id} href={href} aria-current={active === id ? "location" : undefined} className={`inline-flex h-11 items-center gap-1 rounded-full px-3.5 text-xs font-medium motion-safe:transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${active === id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`}>
              {label}{active === id && <ArrowUpRight className="size-3.5" aria-hidden="true" />}
            </Link>
          ))}
        </nav>

        <span className="mr-auto inline-flex h-9 items-center rounded-full bg-primary px-4 text-xs font-semibold text-primary-foreground lg:hidden">
          {links.find(({ id }) => id === active)?.label ?? "Home"}
        </span>
        <button ref={menuButton} type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-controls="mobile-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="grid size-11 shrink-0 place-items-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:hidden">
          {menuOpen ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-nav-enter max-h-[70dvh] overflow-y-auto rounded-b-[1.5rem] border-t border-border px-3 pb-3 pt-2 lg:hidden">
          {links.map(({ id, href, label }) => (
            <Link key={id} href={href} onClick={() => setMenuOpen(false)} aria-current={active === id ? "location" : undefined} className={`flex min-h-12 items-center justify-between rounded-full px-4 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${active === id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`}>
              <span>{label}</span>
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
