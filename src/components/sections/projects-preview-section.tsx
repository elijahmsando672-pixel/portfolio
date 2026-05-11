import Link from "next/link";
import { projects } from "@/content/projects";

const cardAccents = [
  "border-t-amber-500",
  "border-t-sky-500",
  "border-t-emerald-500",
];

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
          See all projects &rarr;
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {featuredProjects.map((project, i) => {
          const liveLabel = project.liveUrl.includes("github.com")
            ? "View project"
            : "Live";
          const showCodeLink = project.repoUrl !== project.liveUrl;
          const accent = cardAccents[i % cardAccents.length];

          return (
            <article
              key={project.slug}
              className={`group rounded-2xl border border-black/10 border-t-4 bg-white p-5 transition hover:-translate-y-0.5 hover:border-black/25 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/30 ${accent} dark:border-t-4`}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <span className="shrink-0 text-xs text-zinc-400">{project.year}</span>
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-4 text-sm">
                <Link
                  href={`/projects/${project.slug}`}
                  className="font-medium underline underline-offset-4 transition group-hover:opacity-80"
                >
                  Case study
                </Link>
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-600 transition hover:text-black dark:text-zinc-300 dark:hover:text-white"
                >
                  {liveLabel} &rarr;
                </Link>
                {showCodeLink ? (
                  <Link
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-600 transition hover:text-black dark:text-zinc-300 dark:hover:text-white"
                  >
                    Source code
                  </Link>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
