import Link from "next/link";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/shared/project-card";

export function ProjectsPreviewSection() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="space-y-6 py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <Link
          href="/projects"
          className="text-sm font-medium text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-stone-100"
        >
          See all projects &rarr;
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {featuredProjects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={i}
            headingLevel="h3"
          />
        ))}
      </div>
    </section>
  );
}
