"use client";

import Image from "next/image";
import { personal } from "@/lib/data";
import { useScrollReveal } from "@/components/hooks/useScrollReveal";

export default function AboutSection() {
  const sectionRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="about" className="bg-white relative overflow-hidden" aria-label="About me">
      <div
        ref={sectionRef}
        className="max-w-[1320px] mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-36"
      >
        {/* Section label */}
        <div className="reveal mb-10 md:mb-14">
          <span className="suptitle text-black/40">About me</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Text side */}
          <div>
            <h2
              className="reveal text-[clamp(2rem,7vw,3.6rem)] font-light leading-[1.15] tracking-tight text-black mb-8"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              Discover <br />
              <span className="font-semibold">Who I Am</span>
            </h2>

            <div className="space-y-5">
              <p className="reveal reveal-delay-1 text-black/55 leading-relaxed text-[0.9375rem] md:text-base">
                {personal.bio}
              </p>
              <p className="reveal reveal-delay-2 text-black/55 leading-relaxed text-[0.9375rem] md:text-base">
                {personal.bioSecondary}
              </p>
            </div>

            {/* Quote */}
            <blockquote className="reveal reveal-delay-3 mt-10 pl-5 border-l-2 border-accent">
              <p className="text-black/80 font-medium text-base md:text-lg leading-snug">
                &ldquo;Design is not just what it looks like — design is how it works.&rdquo;
              </p>
              <cite className="text-black/35 text-xs mt-2 block not-italic tracking-wide">
                — Steve Jobs
              </cite>
            </blockquote>

            {/* Skills grid */}
            <div className="reveal reveal-delay-4 mt-12 grid grid-cols-2 gap-6">
              {[
                { label: "UI/UX Design", pct: 95 },
                { label: "React / Next.js", pct: 92 },
                { label: "Brand Identity", pct: 85 },
                { label: "Tailwind CSS", pct: 95 },
              ].map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-black/60 text-xs tracking-wide">
                      {skill.label}
                    </span>
                    <span className="text-accent text-xs font-medium">
                      {skill.pct}%
                    </span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill animate"
                      style={{ "--tw-scale-x": skill.pct / 100 } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo side — below on mobile, right on desktop */}
          <div className="relative reveal reveal-delay-2">
            {/* Decorative accent */}
            <div
              className="absolute -top-4 -right-4 w-32 h-32 rounded-full opacity-20"
              style={{
                background:
                  "radial-gradient(circle, #FF9800 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            {/* Aspect ratio wrapper */}
            <div className="relative w-full aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden bg-soft-bg">
              <Image
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=75"
                alt="Ashley — Creative Developer & UI/UX Designer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                priority={false}
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-xs rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 animate-pulse" />
                  <div>
                    <p className="text-white text-sm font-medium leading-tight">
                      {personal.name}
                    </p>
                    <p className="text-white/45 text-xs mt-0.5">
                      {personal.role}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <span className="bg-accent text-black text-[10px] font-semibold uppercase tracking-wide px-2 py-1 rounded-full">
                      Open to work
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-5 -left-2 md:-left-6 bg-black text-white rounded-2xl p-4 md:p-5 shadow-xl">
              <span className="text-accent text-2xl md:text-3xl font-semibold leading-none block">
                6+
              </span>
              <span className="text-white/50 text-xs mt-1 block tracking-wide">
                Years of
                <br />
                Experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
