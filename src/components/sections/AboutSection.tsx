"use client";

import Image from "next/image";
import { personal } from "@/lib/data";
import { useScrollReveal } from "@/components/hooks/useScrollReveal";

export default function AboutSection() {
  const sectionRef = useScrollReveal<HTMLDivElement>({ threshold: 0.06 });

  return (
    <section
      id="about"
      className="relative bg-[#0c0c0c] overflow-hidden"
      aria-label="About me"
    >
      {/* Section index — barely visible */}
      <div
        className="absolute top-10 right-6 lg:right-12 text-[9px] text-white/10 tracking-[0.3em] uppercase select-none"
        style={{ fontFamily: "monospace" }}
        aria-hidden="true"
      >
        02 — About
      </div>

      <div
        ref={sectionRef}
        className="max-w-300 mx-auto px-4 sm:px-5 md:px-7 lg:px-10 pt-14 md:pt-22 lg:pt-28 pb-14 md:pb-20"
      >
        {/* ── Opening statement — full width, large type ─── */}
        <div className="reveal border-b border-white/6 pb-7 md:pb-12 mb-8 md:mb-12">
          <span className="suptitle text-white/25 block mb-6">About me</span>
          <h2
            className="text-[clamp(2.1rem,11vw,6.1rem)] font-light leading-[1.03] tracking-tight text-white"
            style={{ fontFamily: "var(--font-primary)" }}
          >
            I design &amp;
            <br />
            <span className="text-white/18">build digital</span>
            <br />
            <span className="font-semibold">experiences.</span>
          </h2>
        </div>

        {/* ── Two-column narrative ──────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-16 items-start">
          {/* Left 2/5 — narrative text */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            <p className="reveal text-white/58 leading-[1.85] text-[0.9375rem] md:text-base">
              {personal.bio}
            </p>

            <p className="reveal reveal-delay-1 text-white/32 leading-relaxed text-sm">
              {personal.bioSecondary}
            </p>

            {/* Quote */}
            <blockquote className="reveal reveal-delay-2 pl-5 border-l-2 border-accent/60">
              <p className="text-white/50 text-sm leading-relaxed italic">
                &ldquo;Design is not just what it looks like — design is how it
                works.&rdquo;
              </p>
              <cite className="text-white/20 text-[10px] mt-2 block not-italic tracking-widest uppercase">
                — Steve Jobs
              </cite>
            </blockquote>

            {/* Compact stats */}
            <div className="reveal reveal-delay-3 grid grid-cols-3 gap-3 pt-6 md:pt-8 border-t border-white/6">
              {[
                { value: "6+", label: "Years" },
                { value: "48", label: "Projects" },
                { value: "32", label: "Clients" },
              ].map((s) => (
                <div key={s.label}>
                  <span className="text-accent text-2xl md:text-[1.9rem] font-semibold block leading-none mb-1.5 tabular-nums">
                    {s.value}
                  </span>
                  <span className="text-white/22 text-[10px] tracking-[0.18em] uppercase">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right 3/5 — editorial photo */}
          <div className="lg:col-span-3 reveal reveal-delay-1">
            <div
              data-motion="scale"
              className="relative w-full aspect-[4/4.7] md:aspect-3/4 lg:aspect-4/5 rounded-2xl overflow-hidden bg-white/4"
            >
              <Image
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=75"
                alt={`${personal.name} — ${personal.role}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority={false}
              />

              {/* Bottom info strip */}
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 bg-linear-to-t from-black/80 via-black/40 to-transparent">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-white font-medium text-sm">
                      {personal.name}
                    </p>
                    <p className="text-white/40 text-xs mt-0.5">
                      {personal.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"
                      aria-hidden="true"
                    />
                    <span className="text-white/40 text-xs">Available</span>
                  </div>
                </div>
              </div>

              {/* Decorative accent glow */}
              <div
                className="absolute -top-6 -right-6 w-20 h-20 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(250,235,215,0.26), transparent 70%)",
                }}
                aria-hidden="true"
              />
            </div>

            {/* Technology tags */}
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Figma",
                "Tailwind CSS",
                "Node.js",
                "UI/UX",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] text-white/28 border border-white/9 rounded-full px-3 py-1 tracking-wide hover:border-accent/35 hover:text-white/45 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
