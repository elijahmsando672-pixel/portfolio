import Link from "next/link";
import { projects } from "@/content/projects";

export function ProjectsPreviewSection() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="space-y-6 py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <Link
          href="/projects"
          className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-300 dark:hover:text-white"
        >
          See all projects
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {featuredProjects.map((project) => (
          <article
            key={project.slug}
            className="group rounded-2xl border border-black/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-black/25 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/30"
          >
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              {project.description}
            </p>
            <p className="mt-3 text-xs text-zinc-500">
              {project.stack.join(" • ")}
            </p>
            <div className="mt-4 flex items-center gap-4 text-sm">
              <Link
                href={`/projects/${project.slug}`}
                className="font-medium underline underline-offset-4 transition group-hover:opacity-80"
              >
                Case study
              </Link>
              <Link href={project.liveUrl} className="text-zinc-600 dark:text-zinc-300">
                Live
              </Link>
              <Link href={project.repoUrl} className="text-zinc-600 dark:text-zinc-300">
                Code
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
