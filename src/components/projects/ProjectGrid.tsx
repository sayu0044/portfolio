import ProjectCard from "@/components/projects/ProjectCard";
import type { Project } from "@/lib/data";

type ProjectGridProps = {
  projects: Project[];
};

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} priority={index < 3} />
      ))}
    </div>
  );
}
