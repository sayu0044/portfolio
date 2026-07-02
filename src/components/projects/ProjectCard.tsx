import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

export default function ProjectCard({
  project,
  priority = false,
}: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0b0b0b] p-4 shadow-[0_18px_48px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#101010] focus-within:border-accent/55">
      <div className="relative aspect-video overflow-hidden rounded-xl bg-white/[0.04]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority={priority}
          sizes="(max-width: 767px) 92vw, (max-width: 1023px) 44vw, 30vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.035]"
        />
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <h3 className="text-xl font-bold leading-tight text-white md:text-[1.35rem]">
          {project.title}
        </h3>
        <p className="mt-3 overflow-hidden text-sm leading-relaxed text-white/58 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4]">
          {project.description}
        </p>

        <ul
          className="mt-5 flex flex-wrap gap-2"
          aria-label={`${project.title} technologies`}
        >
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-white/[0.08] bg-white/[0.035] px-2.5 py-1 text-[0.7rem] font-semibold text-white/78"
            >
              {technology}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/view inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[14px] bg-[#EAD7BF] px-4 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#DFC7A9] active:translate-y-0 active:scale-[0.99] active:bg-[#D4B995] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EAD7BF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b0b]"
              aria-label={project.ariaLabel ?? `View ${project.title}`}
            >
              View
              <ArrowUpRight
                className="h-4 w-4 text-white transition-transform duration-200 group-hover/view:translate-x-0.5 group-hover/view:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          ) : (
            <span className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-white/[0.09] bg-white/[0.035] px-4 text-sm font-bold text-white/42">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
