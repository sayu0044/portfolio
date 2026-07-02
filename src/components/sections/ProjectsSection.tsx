"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { projects } from "@/lib/data";
import { useScrollReveal } from "@/components/hooks/useScrollReveal";

export default function ProjectsSection() {
  const sectionRef = useScrollReveal<HTMLDivElement>({ threshold: 0.04 });
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#050505] py-16 sm:py-20 md:py-24 lg:py-28"
      aria-labelledby="projects-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:36px_36px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-28 top-16 h-96 w-72 rounded-full bg-cyan-950/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-28 bottom-10 h-96 w-72 rounded-full bg-sky-950/25 blur-3xl"
        aria-hidden="true"
      />

      <div
        ref={sectionRef}
        className="relative z-10 mx-auto max-w-300 px-4 sm:px-5 md:px-7 lg:px-10"
      >
        <div className="reveal mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <h2
            id="projects-heading"
            className="text-[clamp(2.6rem,7vw,4.5rem)] font-extrabold leading-none text-white"
          >
            My Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/58 md:text-lg">
            Explore my portfolio of innovative projects and cutting-edge
            solutions.
          </p>
        </div>

        <div className="reveal">
          <ProjectGrid projects={featuredProjects} />
        </div>

        <div className="reveal mt-12 flex justify-center md:mt-14">
          <Link
            href="/projects"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-transparent bg-[#EAD7BF] px-7 text-sm font-bold text-white shadow-[0_10px_28px_rgba(0,0,0,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#DFC7A9] active:translate-y-0 active:scale-[0.98] active:bg-[#D4B995] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EAD7BF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
          >
            View All Projects
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
