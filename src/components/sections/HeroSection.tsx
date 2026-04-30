import Link from "next/link";
import AnimatedOrbs from "@/components/ui/AnimatedOrbs";
import { personal } from "@/lib/data";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] bg-black flex items-end overflow-hidden"
      aria-label="Hero - Introduction"
    >
      <AnimatedOrbs />

      <div
        className="absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4 md:px-7 lg:px-12 pb-14 md:pb-20 lg:pb-24 pt-24 md:pt-32">
        <div className="max-w-none lg:max-w-4xl">
          {personal.availableForWork && (
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 mb-7 md:mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <span className="text-white/60 text-[11px] tracking-[0.12em] uppercase">
                Available for new projects
              </span>
            </div>
          )}

          <h1
            className="text-[clamp(2.3rem,12vw,6.8rem)] font-light leading-[1.02] tracking-tight text-white mb-5 md:mb-8"
            style={{ fontFamily: "var(--font-primary)" }}
          >
            Designing a Better
            <br />
            {/* <span className="font-semibold">Digital</span> */}
            <span className="text-accent">World Today.</span>
          </h1>

          <div className="max-w-sm md:max-w-lg mb-9 md:mb-12">
            <p className="text-white/45 text-[0.94rem] md:text-lg leading-relaxed font-light">
              {personal.bio}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <Link href="#work" className="btn-primary">
              View my work
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link href="#contact" className="btn-ghost">
              Get in touch
            </Link>
          </div>
        </div>

        {/* <div className="mt-14 md:mt-20 pt-7 md:pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {[
              { value: "6+", label: "Years Experience" },
              { value: "48", label: "Projects Shipped" },
              { value: "32", label: "Happy Clients" },
              { value: "12", label: "Awards Won" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-accent text-[1.55rem] md:text-3xl font-semibold leading-none">
                  {stat.value}
                </span>
                <span className="text-white/35 text-[11px] md:text-xs tracking-[0.08em] uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      <div className="hidden md:block absolute bottom-6 right-6 lg:right-8 z-20">
        <div className="mil-circle-text">
          <svg
            viewBox="0 0 300 300"
            className="mil-ct-svg mil-rotate"
            aria-hidden="true"
          >
            <defs>
              <path
                id="heroCirclePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
              />
            </defs>
            <circle cx="150" cy="100" r="75" fill="none" />
            <g>
              <text style={{ letterSpacing: "6.5px" }}>
                <textPath href="#heroCirclePath">
                  Scroll down - Scroll down -
                </textPath>
              </text>
            </g>
          </svg>
          <a
            href="#about"
            className="mil-arrow-down-btn"
            aria-label="Scroll down to about section"
          >
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
