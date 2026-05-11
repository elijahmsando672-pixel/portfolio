import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies, live demos, and source links for Elijah's work.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-14 sm:py-16">
      <h1 className="text-4xl font-semibold">Projects</h1>
      <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-300">
        A curated mix of shipped products and experiments. Each one reflects how
        I approach product decisions, architecture, and user experience.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => {
          const liveLabel = project.liveUrl.includes("github.com")
            ? "View project"
            : "Live";
          const showCodeLink = project.repoUrl !== project.liveUrl;

          return (
            <article
              key={project.slug}
              className="rounded-2xl border border-black/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-black/25 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/30"
            >
              <h2 className="text-xl font-semibold">{project.name}</h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                {project.description}
              </p>
              <p className="mt-3 text-xs text-zinc-500">
                {project.stack.join(" • ")}
              </p>
              <p className="mt-2 text-xs text-zinc-500">{project.year}</p>
              <div className="mt-4 flex items-center gap-4 text-sm">
                <Link
                  href={`/projects/${project.slug}`}
                  className="font-medium underline underline-offset-4"
                >
                  Case study
                </Link>
                <Link href={project.liveUrl} className="text-zinc-600 dark:text-zinc-300">
                  {liveLabel}
                </Link>
                {showCodeLink ? (
                  <Link href={project.repoUrl} className="text-zinc-600 dark:text-zinc-300">
                    Source code
                  </Link>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
