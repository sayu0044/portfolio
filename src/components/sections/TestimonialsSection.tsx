"use client";

import { useState, useRef, useCallback } from "react";
import { testimonials } from "@/lib/data";
import { useScrollReveal } from "@/components/hooks/useScrollReveal";

export default function TestimonialsSection() {
  const sectionRef = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });
  const [activeIdx, setActiveIdx] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const active = testimonials[activeIdx];

  const prev = useCallback(() => setActiveIdx((i) => Math.max(i - 1, 0)), []);
  const next = useCallback(
    () => setActiveIdx((i) => Math.min(i + 1, testimonials.length - 1)),
    [],
  );

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX.current === null) return;
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(dx) > 40) {
        if (dx < 0) {
          next();
        } else {
          prev();
        }
      }
      touchStartX.current = null;
    },
    [next, prev],
  );

  return (
    <section
      id="testimonials"
      className="relative bg-[#0c0c0c] overflow-hidden"
      aria-label="Client testimonials"
    >
      {/* Subtle center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(250,235,215,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Section index */}
      <div
        className="absolute top-10 right-6 lg:right-12 text-[9px] text-white/10 tracking-[0.3em] uppercase select-none"
        style={{ fontFamily: "monospace" }}
        aria-hidden="true"
      >
        05 — Voices
      </div>

      <div
        ref={sectionRef}
        className="relative z-10 max-w-300 mx-auto px-4 sm:px-5 md:px-7 lg:px-10 pt-14 md:pt-22 lg:pt-28 pb-14 md:pb-20"
      >
        {/* Header row — label left, counter right */}
        <div className="reveal flex items-end justify-between gap-5 mb-10 md:mb-16 pb-7 md:pb-8 border-b border-white/5">
          <div>
            <span className="suptitle text-white/25 block mb-6">
              Client voices
            </span>
            <h2
              className="text-[clamp(1.9rem,9vw,3.8rem)] font-light leading-[1.05] tracking-tight text-white"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              What they
              <br />
              <span className="font-semibold">say.</span>
            </h2>
          </div>

          {/* Nav controls — top right */}
          <div className="flex items-center gap-2 md:gap-3 mb-1">
            <button
              onClick={prev}
              disabled={activeIdx === 0}
              className="w-11 h-11 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/30 disabled:opacity-20 transition-all"
              aria-label="Previous testimonial"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              onClick={next}
              disabled={activeIdx === testimonials.length - 1}
              className="w-11 h-11 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/30 disabled:opacity-20 transition-all"
              aria-label="Next testimonial"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Testimonial body ─────────────────────────────── */}
        <div
          className="reveal"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          aria-live="polite"
        >
          {/* Large opening quote mark */}
          <div
            data-motion="parallax"
            className="mb-8 md:mb-12"
            aria-hidden="true"
          >
            <span className="text-accent/20 text-[4.5rem] md:text-[7.5rem] font-semibold leading-none select-none block -mb-7 md:-mb-12">
              &ldquo;
            </span>
          </div>

          {/* Quote text — large editorial type */}
          <blockquote key={activeIdx}>
            <p
              className="text-white/72 text-[clamp(1.08rem,5vw,2.15rem)] font-light leading-normal tracking-tight mb-8 md:mb-11 max-w-3xl"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              {active.text}
            </p>

            {/* Author */}
            <footer className="flex items-center gap-4">
              {/* Initials avatar */}
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                <span className="text-accent text-xs font-semibold">
                  {active.name.charAt(0)}
                </span>
              </div>
              <cite className="not-italic">
                <span className="text-white text-sm font-medium block">
                  {active.name}
                </span>
                <span className="text-white/30 text-xs tracking-widest uppercase mt-0.5 block">
                  {active.role}
                </span>
              </cite>
            </footer>
          </blockquote>
        </div>

        {/* Progress indicator */}
        <div
          className="mt-10 md:mt-12 flex items-center gap-3"
          role="tablist"
          aria-label="Testimonial navigation"
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIdx}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => setActiveIdx(i)}
              className={`h-0.5 rounded-full transition-all duration-400 ${
                i === activeIdx
                  ? "w-8 bg-accent"
                  : "w-4 bg-white/15 hover:bg-white/30"
              }`}
            />
          ))}
          <span className="ml-auto text-white/18 text-[11px] tabular-nums tracking-widest">
            {String(activeIdx + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
