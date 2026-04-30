"use client";

import { services } from "@/lib/data";
import { useScrollReveal } from "@/components/hooks/useScrollReveal";
import AnimatedOrbs from "@/components/ui/AnimatedOrbs";

export default function SkillsSection() {
  const sectionRef = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });

  return (
    <section
      id="skills"
      className="bg-black relative overflow-hidden"
      aria-label="What I do"
    >
      <AnimatedOrbs />

      <div
        ref={sectionRef}
        className="relative z-10 max-w-[1320px] mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-36"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <div className="reveal mb-6">
              <span className="suptitle text-white/30">What I do</span>
            </div>
            <h2
              className="reveal text-[clamp(2rem,8vw,4.5rem)] font-light leading-[1.05] tracking-tight text-white"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              Unique <span className="font-semibold">Skills</span>
              <br />
              For Your{" "}
              <span className="font-semibold text-accent">Project.</span>
            </h2>
          </div>
          <p className="reveal reveal-delay-1 text-white/35 text-sm leading-relaxed max-w-xs md:max-w-[220px] shrink-0">
            Focused on shipping real, production-ready products — not just mockups.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10 rounded-2xl overflow-hidden">
          {services.map((service, i) => (
            <div
              key={service.number}
              className={`
                reveal reveal-delay-${i + 1}
                relative group
                border-white/10
                ${i > 0 ? "sm:border-l" : ""}
                ${i >= 2 ? "lg:border-l" : ""}
                p-6 md:p-8
                hover:bg-white/5 transition-colors duration-300
                flex flex-col
                ${i < services.length - 1 ? "border-b sm:border-b-0 sm:border-r lg:border-b-0" : ""}
              `}
              style={{
                borderColor: "rgba(255,255,255,0.07)",
                borderStyle: "solid",
              }}
            >
              {/* Number */}
              <span className="text-white/15 text-4xl font-semibold leading-none mb-6 block">
                {service.number}
              </span>

              {/* Title */}
              <h3 className="text-white text-base md:text-lg font-medium leading-snug mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/40 text-sm leading-relaxed flex-1 mb-6">
                {service.description}
              </p>

              {/* Tools */}
              <div className="flex flex-wrap gap-2">
                {service.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-[10px] text-white/30 border border-white/10 rounded-full px-2.5 py-1 tracking-wide"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Arrow indicator */}
              <div className="absolute top-6 right-6 md:top-8 md:right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                  <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 text-black" aria-hidden="true">
                    <path d="M3 8a.5.5 0 0 1 .5-.5h7.793L8.146 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L11.293 8.5H3.5A.5.5 0 0 1 3 8z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
