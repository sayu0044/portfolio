"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { navLinks, personal } from "@/lib/data";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));

    const updateActive = () => {
      const trigger = window.innerHeight * 0.35;
      let current = ids[0] ?? "home";

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= trigger) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  const handleMenuToggle = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const handleMenuClose = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/92 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-4 md:px-7 lg:px-12">
          <div className="flex items-center justify-between h-[62px] md:h-[74px] lg:h-20">
            <Link
              href="/"
              className="text-white font-semibold text-[1.35rem] tracking-tight hover:text-accent transition-colors"
              aria-label={`${personal.name} - Home`}
            >
              {personal.logo}
            </Link>

            <nav
              className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm tracking-[0.08em] uppercase transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-accent after:transition-all after:duration-300 ${
                      isActive
                        ? "text-white after:w-full"
                        : "text-white/55 hover:text-white after:w-0 hover:after:w-full"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <button
              className={`lg:hidden flex flex-col gap-[5px] p-3 -mr-3 text-white transition-colors hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                menuOpen ? "menu-open" : ""
              }`}
              onClick={handleMenuToggle}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={handleMenuClose} />
    </>
  );
}
