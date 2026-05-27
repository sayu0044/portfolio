"use client";

import { personal } from "@/lib/data";
import { useScrollReveal } from "@/components/hooks/useScrollReveal";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const profileTestimonials = [
  {
    quote: "Available",
    name: personal.name,
    designation: personal.tagline,
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=75",
  },
];

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
        <div className="reveal mb-7 md:mb-9">
          <span className="suptitle text-white/25 block mb-6">About me</span>
          <h2
            className="text-[clamp(2rem,7vw,4.4rem)] font-light leading-[1.04] tracking-tight text-white"
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
        <div className="grid grid-cols-1 items-start gap-8 md:gap-10 lg:grid-cols-7 lg:gap-12">
          {/* Left 2/5 — narrative text */}
          <div className="order-2 space-y-6 md:space-y-8 lg:order-1 lg:col-span-4">
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
          <div className="order-1 reveal reveal-delay-1 lg:order-2 lg:col-span-3 lg:-mt-30 xl:-mt-36 lg:justify-self-center">
            <AnimatedTestimonials
              testimonials={profileTestimonials}
              className="max-w-88"
            />

            {/* Technology tags */}
            <div className="mx-auto mt-5 flex max-w-88 flex-wrap justify-center gap-2">
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

