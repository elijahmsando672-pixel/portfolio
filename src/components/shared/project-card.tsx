import Link from "next/link";
import type { Project } from "@/types/project";
import { cardBase, getCardAccent } from "@/lib/card-styles";

type Props = {
  project: Project;
  index: number;
  headingLevel?: "h2" | "h3";
};

function liveLabel(url: string) {
  return url.includes("github.com") ? "View project" : "Live";
}

export function ProjectCard({ project, index, headingLevel = "h2" }: Props) {
  const showCodeLink = project.repoUrl !== project.liveUrl;
  const accent = getCardAccent(index);
  const Heading = headingLevel;

  return (
    <article className={`${cardBase} ${accent} group`}>
      <div className="flex items-start justify-between">
        <Heading className="text-lg font-semibold">{project.name}</Heading>
        <span className="shrink-0 text-xs text-zinc-400">{project.year}</span>
      </div>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
        {project.description}
      </p>
      <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies used">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
          >
            {tech}
          </li>
        ))}
      </ul>
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
          {liveLabel(project.liveUrl)} &rarr;
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
}
