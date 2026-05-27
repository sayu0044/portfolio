"use client";

import Link from "next/link";
import { useScrollReveal } from "@/components/hooks/useScrollReveal";
import AnimatedOrbs from "@/components/ui/AnimatedOrbs";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { personal } from "@/lib/data";

// Duplicated for seamless marquee loop (first half + second half identical)
const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Figma",
  "PostgreSQL",
  "GraphQL",
  "UI/UX Design",
  "Framer",
  "Vercel",
  "AWS",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Figma",
  "PostgreSQL",
  "GraphQL",
  "UI/UX Design",
  "Framer",
  "Vercel",
  "AWS",
];

export default function HeroSection() {
  const sectionRef = useScrollReveal<HTMLElement>({ threshold: 0.04 });

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-svh bg-[#050505] flex flex-col overflow-hidden"
      aria-label="Hero - Introduction"
    >
      <AnimatedOrbs />

      {/* Subtle grid pattern */}
      <div
        data-motion="parallax"
        className="absolute inset-0 opacity-[0.022]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-[#050505] to-transparent pointer-events-none" />

      {/* Main content — pinned to bottom */}
      <div className="relative z-10 flex-1 flex w-full max-w-300 flex-col justify-center mx-auto px-4 sm:px-5 md:px-7 lg:px-10 pb-7 md:pb-11 pt-22 md:pt-30 lg:justify-end">
        {/* Availability badge */}
        {personal.availableForWork && (
          <div className="reveal inline-flex items-center gap-2 bg-white/4 border border-white/8 rounded-full px-3 py-1.5 mb-5 md:mb-6 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
            <span className="text-white/45 text-[11px] tracking-[0.14em] uppercase font-medium">
              Open to new projects
            </span>
          </div>
        )}

        {/* Headline */}
        <div className="reveal reveal-delay-1 mb-5 flex w-full flex-col items-center text-center md:mb-8">
          <h1 className="flex w-full justify-center">
            <LayoutTextFlip
              variant="hero"
              text={personal.name}
              words={["Damar Yunan"]}
            />
          </h1>
        </div>

        {/* CTAs */}
        <div className="reveal reveal-delay-2 flex justify-center mb-8 md:mb-12">
          <div className="grid grid-cols-1 min-[380px]:grid-cols-2 md:flex md:flex-wrap items-center gap-3 shrink-0">
            <Link
              href="#work"
              className="btn-primary justify-center !bg-[#ead7bf] !text-white hover:!bg-[#dec7aa]"
            >
              View my work
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 shrink-0"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link href="#contact" className="btn-ghost justify-center">
              Get in touch
            </Link>
          </div>
        </div>

        {/* Stats row */}
        <div className="reveal reveal-delay-3 pt-6 border-t border-white/7">
          <div className="mx-auto grid w-full max-w-230 grid-cols-2 gap-x-8 gap-y-5 text-center md:grid-cols-4 md:gap-10">
            {[
              { value: "6+", label: "Years Experience" },
              { value: "48", label: "Projects Shipped" },
              { value: "32", label: "Happy Clients" },
              { value: "12", label: "Awards Won" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1.5">
                <span className="text-accent text-[1.55rem] md:text-[2.05rem] font-semibold leading-none tabular-nums">
                  {stat.value}
                </span>
                <span className="text-white/28 text-[10px] md:text-[11px] tracking-widest uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee — tech stack strip */}
      <div className="relative z-10 w-full border-t border-white/5 py-2.5 md:py-3 mt-0 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-track">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-3.5 text-white/18 text-[10px] tracking-[0.22em] uppercase shrink-0 font-medium"
              >
                {tech}
                <span
                  className="w-1 h-1 rounded-full bg-accent/40 shrink-0"
                  aria-hidden="true"
                />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator — minimal */}
      <div className="hidden md:block absolute bottom-16 right-6 lg:right-8 z-20">
        <a
          href="#about"
          className="flex flex-col items-center gap-3 group"
          aria-label="Scroll down to about section"
        >
          <span className="text-white/30 text-[9px] tracking-[0.25em] uppercase font-medium [writing-mode:vertical-lr]">
            Scroll
          </span>
          <span className="w-px h-12 bg-white/10 relative overflow-hidden">
            <span className="absolute inset-x-0 top-0 w-px h-full bg-accent/60 animate-[scrollLine_2s_ease-in-out_infinite]" />
          </span>
        </a>
      </div>
    </section>
  );
}
