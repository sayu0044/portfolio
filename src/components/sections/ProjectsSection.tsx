"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { useScrollReveal } from "@/components/hooks/useScrollReveal";

export default function ProjectsSection() {
  const sectionRef = useScrollReveal<HTMLDivElement>({ threshold: 0.04 });
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const listProjects = projects.filter((p) => p.id !== featured.id);

  return (
    <section
      id="work"
      className="relative bg-[#0f0f0f] overflow-hidden"
      aria-label="Portfolio — Selected work"
    >
      {/* Section index */}
      <div
        className="absolute top-10 right-6 lg:right-12 text-[9px] text-white/10 tracking-[0.3em] uppercase select-none"
        style={{ fontFamily: "monospace" }}
        aria-hidden="true"
      >
        04 — Work
      </div>

      <div
        ref={sectionRef}
        className="max-w-300 mx-auto px-4 sm:px-5 md:px-7 lg:px-10 pt-14 md:pt-22 lg:pt-28 pb-14 md:pb-20"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-9 md:mb-14 pb-7 md:pb-10 border-b border-white/6">
          <div>
            <span className="reveal suptitle text-white/25 block mb-6">
              Selected work
            </span>
            <h2
              className="reveal text-[clamp(2rem,10vw,4.5rem)] font-light leading-[1.05] tracking-tight text-white"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              Projects that
              <br />
              <span className="font-semibold">define the work.</span>
            </h2>
          </div>
          <Link
            href="#contact"
            className="reveal shrink-0 group inline-flex items-center gap-2 text-xs text-white/30 hover:text-accent transition-colors tracking-widest uppercase"
          >
            All projects
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            >
              <path d="M3 8a.5.5 0 0 1 .5-.5h7.793L8.146 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L11.293 8.5H3.5A.5.5 0 0 1 3 8z" />
            </svg>
          </Link>
        </div>

        {/* ── Featured hero project ──────────────────────── */}
        <div className="reveal mb-4 md:mb-6">
          <article
            className="group relative w-full overflow-hidden rounded-2xl bg-white/3 border border-white/6"
            aria-label={`Featured: ${featured.title}`}
          >
            <div
              data-motion="scale"
              className="relative w-full aspect-[4/4.6] sm:aspect-video md:aspect-[2.4/1]"
            >
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                sizes="(max-width: 768px) 100vw, 90vw"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />

              {/* Featured label */}
              <div className="absolute top-4 left-4 md:top-7 md:left-7">
                <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/25 rounded-full px-3 py-1 text-accent text-[10px] tracking-widest uppercase font-medium">
                  <span
                    className="w-1 h-1 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  Featured
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-7 flex items-end justify-between gap-4">
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mb-2">
                    {featured.category} · {featured.year}
                  </p>
                  <h3 className="text-white text-xl md:text-3xl font-medium leading-tight">
                    {featured.title}
                  </h3>
                </div>
                <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 text-black"
                    aria-hidden="true"
                  >
                    <path d="M3 8a.5.5 0 0 1 .5-.5h7.793L8.146 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L11.293 8.5H3.5A.5.5 0 0 1 3 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* ── Numbered project list ──────────────────────── */}
        <div className="mt-7 md:mt-8">
          {listProjects.map((project, i) => (
            <article
              key={project.id}
              className={`reveal reveal-delay-${(i % 4) + 1} project-list-item group`}
              aria-label={project.title}
            >
              {/* Number */}
              <span
                className="text-white/12 text-xs tracking-widest tabular-nums w-8 shrink-0 select-none"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Category tag */}
              <span className="hidden md:block shrink-0 text-[10px] text-white/25 border border-white/8 rounded-full px-2.5 py-1 tracking-wide min-w-22.5 text-center">
                {project.category}
              </span>

              {/* Title — grows */}
              <div className="flex-1 min-w-0">
                <h3 className="text-white/75 text-base md:text-xl font-light tracking-tight group-hover:text-white transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-white/22 md:hidden">
                  {project.category} / {project.year}
                </p>
              </div>

              {/* Year */}
              <span className="hidden md:block shrink-0 text-white/18 text-xs tracking-widest">
                {project.year}
              </span>

              {/* Arrow — appears on hover */}
              <div className="shrink-0 w-7 h-7 rounded-full border border-white/8 flex items-center justify-center text-white/20 group-hover:border-accent/40 group-hover:text-accent transition-all duration-200">
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-3 h-3"
                  aria-hidden="true"
                >
                  <path d="M3 8a.5.5 0 0 1 .5-.5h7.793L8.146 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L11.293 8.5H3.5A.5.5 0 0 1 3 8z" />
                </svg>
              </div>

              {/* Hover thumbnail (desktop only — CSS positioned) */}
              <div className="project-hover-thumb" aria-hidden="true">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="220px"
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
