"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { useScrollReveal } from "@/components/hooks/useScrollReveal";

export default function ProjectsSection() {
  const sectionRef = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="bg-white relative" aria-label="Portfolio — Selected work">
      <div
        ref={sectionRef}
        className="max-w-[1320px] mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-36"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 md:mb-16">
          <div>
            <div className="reveal mb-6">
              <span className="suptitle text-black/40">Selected work</span>
            </div>
            <h2
              className="reveal text-[clamp(1.8rem,6vw,3.4rem)] font-light leading-[1.15] tracking-tight text-black"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              Projects That
              <br />
              <span className="font-semibold">Speak for Themselves</span>
            </h2>
          </div>
          <Link
            href="#contact"
            className="reveal shrink-0 text-sm text-black/45 hover:text-accent transition-colors flex items-center gap-2 group"
            aria-label="View all work"
          >
            <span>View all</span>
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        {/* Featured — 2 large cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-5 md:mb-6">
          {featuredProjects.map((project, i) => (
            <article
              key={project.id}
              className={`reveal reveal-delay-${i + 1} project-card group`}
              aria-label={project.title}
            >
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-soft-bg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="project-card-img"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="project-card-overlay rounded-xl">
                  <div>
                    <span className="text-accent text-[10px] uppercase tracking-wider font-medium block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-white text-lg md:text-xl font-medium leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <div className="ml-auto flex-shrink-0">
                    <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center">
                      <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-black" aria-hidden="true">
                        <path d="M3 8a.5.5 0 0 1 .5-.5h7.793L8.146 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L11.293 8.5H3.5A.5.5 0 0 1 3 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info below image */}
              <div className="flex items-start justify-between pt-4 px-1">
                <div>
                  <h3 className="text-black text-base font-medium leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-black/40 text-xs mt-1">{project.category}</p>
                </div>
                <span className="text-black/25 text-xs mt-1 shrink-0">{project.year}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Other projects — 4 smaller cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {otherProjects.map((project, i) => (
            <article
              key={project.id}
              className={`reveal reveal-delay-${i + 1} project-card group`}
              aria-label={project.title}
            >
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-soft-bg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="project-card-img"
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 25vw"
                  loading="lazy"
                />
                <div className="project-card-overlay rounded-xl">
                  <div>
                    <span className="text-accent text-[10px] uppercase tracking-wider font-medium block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-white text-sm font-medium">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="pt-3 px-1">
                <h3 className="text-black text-sm font-medium">{project.title}</h3>
                <p className="text-black/35 text-xs mt-0.5">{project.year}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
