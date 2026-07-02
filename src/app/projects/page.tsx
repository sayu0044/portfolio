import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectGrid from "@/components/projects/ProjectGrid";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollRestoration from "@/components/ui/ScrollRestoration";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Complete portfolio projects by Sayu.",
};

export default function ProjectsPage() {
  return (
    <>
      <ScrollRestoration />
      <ScrollProgress />
      <Header />
      <main className="relative overflow-hidden bg-[#050505] pt-15 md:pt-18">
        <div
          className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:36px_36px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-28 top-20 h-96 w-72 rounded-full bg-cyan-950/25 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-28 bottom-24 h-96 w-72 rounded-full bg-sky-950/25 blur-3xl"
          aria-hidden="true"
        />

        <section
          className="relative z-10 mx-auto min-h-screen max-w-300 px-4 py-14 sm:px-5 sm:py-16 md:px-7 md:py-20 lg:px-10"
          aria-labelledby="all-projects-heading"
        >
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
            <h1
              id="all-projects-heading"
              className="text-[clamp(2.8rem,7vw,4.8rem)] font-extrabold leading-none text-white"
            >
              All Projects
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/58 md:text-lg">
              Complete portfolio of my innovative projects and cutting-edge
              solutions.
            </p>
          </div>

          <ProjectGrid projects={projects} />
        </section>
      </main>
      <Footer />
    </>
  );
}
