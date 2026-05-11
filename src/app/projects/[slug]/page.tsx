import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project not found | Elijah Portfolio",
    };
  }

  return {
    title: `${project.name} | Elijah Portfolio`,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-14 sm:py-16">
      <Link href="/projects" className="text-sm text-zinc-600 dark:text-zinc-300">
        ← Back to projects
      </Link>
      <h1 className="mt-4 text-4xl font-semibold">{project.name}</h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-300">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-black/10 px-3 py-1 text-xs dark:border-white/15"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4 text-sm">
        <Link
          href={project.liveUrl}
          className="rounded-full bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
        >
          Live demo
        </Link>
        <Link
          href={project.repoUrl}
          className="rounded-full border border-black/20 px-4 py-2 dark:border-white/20"
        >
          View code
        </Link>
      </div>

      <section className="mt-10 space-y-6">
        <article className="rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/[0.02]">
          <h2 className="text-lg font-semibold">Role</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{project.role}</p>
        </article>
        <article className="rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/[0.02]">
          <h2 className="text-lg font-semibold">Problem</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
            {project.problem}
          </p>
        </article>
        <article className="rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/[0.02]">
          <h2 className="text-lg font-semibold">Solution</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
            {project.solution}
          </p>
        </article>
        <article className="rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/[0.02]">
          <h2 className="text-lg font-semibold">Outcome</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
            {project.outcome}
          </p>
        </article>
      </section>
    </main>
  );
}
