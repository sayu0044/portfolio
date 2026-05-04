"use client";

import { useState } from "react";
import { services } from "@/lib/data";
import { useScrollReveal } from "@/components/hooks/useScrollReveal";

export default function SkillsSection() {
  const sectionRef = useScrollReveal<HTMLDivElement>({ threshold: 0.06 });
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const active = services[activeIdx];

  return (
    <section
      id="skills"
      className="relative bg-[#050505] overflow-hidden"
      aria-label="What I do"
    >
      {/* Accent glow — top center */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-150 h-75 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(250,235,215,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Section index */}
      <div
        className="absolute top-10 right-6 lg:right-12 text-[9px] text-white/10 tracking-[0.3em] uppercase select-none"
        style={{ fontFamily: "monospace" }}
        aria-hidden="true"
      >
        03 — Skills
      </div>

      <div
        ref={sectionRef}
        className="relative z-10 max-w-300 mx-auto px-4 sm:px-5 md:px-7 lg:px-10 pt-14 md:pt-22 lg:pt-28 pb-14 md:pb-20"
      >
        {/* ── Header ──────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-9 md:mb-14 pb-7 md:pb-10 border-b border-white/5">
          <div>
            <span className="reveal suptitle text-white/25 block mb-6">
              What I do
            </span>
            <h2
              className="reveal text-[clamp(2rem,10vw,4.8rem)] font-light leading-[1.03] tracking-tight text-white"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              Craft over
              <br />
              <span className="font-semibold">
                convenience<span className="text-accent">.</span>
              </span>
            </h2>
          </div>
          <p className="reveal reveal-delay-1 text-white/28 text-sm leading-relaxed max-w-60 shrink-0">
            Not just mockups. Production-ready products built to last.
          </p>
        </div>

        {/* ── Two-panel layout ─────────────────────────────
            LEFT: vertical service selector tabs
            RIGHT: active service detail
        ──────────────────────────────────────────────────── */}
        <div
          data-motion="scale"
          className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-white/7 rounded-2xl overflow-hidden"
        >
          {/* Left — service list */}
          <div className="flex overflow-x-auto lg:block lg:col-span-2 border-b lg:border-b-0 lg:border-r border-white/7">
            {services.map((service, i) => (
              <button
                key={service.number}
                onClick={() => setActiveIdx(i)}
                className={`
                  reveal reveal-delay-${i + 1}
                  min-w-[72%] sm:min-w-[48%] lg:min-w-0 lg:w-full text-left flex items-center gap-4 px-5 md:px-7 py-4 md:py-5
                  border-r lg:border-r-0 lg:border-b border-white/6 last:border-r-0 lg:last:border-b-0
                  transition-all duration-200 group
                  ${
                    activeIdx === i
                      ? "bg-white/4"
                      : "hover:bg-white/2"
                  }
                `}
                aria-pressed={activeIdx === i}
              >
                {/* Indicator */}
                <span
                  className={`w-px h-8 rounded-full shrink-0 transition-all duration-300 ${
                    activeIdx === i ? "bg-accent" : "bg-white/10"
                  }`}
                  aria-hidden="true"
                />

                {/* Number + Title */}
                <div className="flex-1 min-w-0">
                  <span className="block text-[10px] text-white/18 tracking-widest mb-1 tabular-nums">
                    {service.number}
                  </span>
                  <span
                    className={`block text-sm md:text-base font-medium tracking-tight truncate transition-colors duration-200 ${
                      activeIdx === i
                        ? "text-white"
                        : "text-white/40 group-hover:text-white/65"
                    }`}
                  >
                    {service.title}
                  </span>
                </div>

                {/* Arrow */}
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className={`w-3.5 h-3.5 shrink-0 transition-all duration-200 ${
                    activeIdx === i
                      ? "text-accent"
                      : "text-white/12 group-hover:text-white/30"
                  }`}
                  aria-hidden="true"
                >
                  <path d="M3 8a.5.5 0 0 1 .5-.5h7.793L8.146 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L11.293 8.5H3.5A.5.5 0 0 1 3 8z" />
                </svg>
              </button>
            ))}
          </div>

          {/* Right — active service detail */}
          <div className="lg:col-span-3 p-5 md:p-8 flex flex-col justify-between min-h-68 md:min-h-84">
            {/* Large number watermark */}
            <div className="flex items-start justify-between mb-6 md:mb-8">
              <span
                className="text-white/6 text-[3.8rem] md:text-[6.4rem] font-semibold leading-none select-none tabular-nums"
                aria-hidden="true"
              >
                {active.number}
              </span>
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-2">
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 text-accent"
                  aria-hidden="true"
                >
                  <path d="M3 8a.5.5 0 0 1 .5-.5h7.793L8.146 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L11.293 8.5H3.5A.5.5 0 0 1 3 8z" />
                </svg>
              </div>
            </div>

            <div>
              <h3
                className="text-white text-2xl md:text-3xl font-light tracking-tight mb-4 leading-snug"
                style={{ fontFamily: "var(--font-primary)" }}
              >
                {active.title}
              </h3>
              <p className="text-white/40 text-sm leading-[1.85] mb-8">
                {active.description}
              </p>

              {/* Tool tags */}
              <div className="flex flex-wrap gap-2">
                {active.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-[10px] text-white/35 border border-white/10 rounded-full px-3 py-1.5 tracking-wide hover:border-accent/30 hover:text-white/55 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
