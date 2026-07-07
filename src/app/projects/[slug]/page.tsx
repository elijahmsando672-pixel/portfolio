import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimatedSection } from "@/components/animated-section";
import { projects } from "@/content/projects";
import { getBaseUrl } from "@/lib/site";

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
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: project.name,
      description: project.description,
      type: "article",
      url: `${getBaseUrl()}/projects/${project.slug}`,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${project.name} case study`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      description: project.description,
      images: ["/twitter-image"],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const liveLabel = project.liveUrl.includes("github.com")
    ? "View project"
    : "Live demo";
  const showCodeLink = project.repoUrl !== project.liveUrl;

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-14 sm:py-16">
      <AnimatedSection>
        <Link href="/projects" className="text-sm text-stone-600 dark:text-stone-300">
          ← Back to projects
        </Link>
        <h1 className="mt-4 text-4xl font-semibold">{project.name}</h1>
        <p className="mt-3 text-stone-600 dark:text-stone-300">
          {project.description}
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-stone-300/50 px-3 py-1 text-xs dark:border-stone-600/50"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4 text-sm">
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
             className="rounded-full bg-stone-800 px-4 py-2 text-stone-100 dark:bg-stone-100 dark:text-stone-900"
          >
            {liveLabel}
          </Link>
          {showCodeLink ? (
            <Link
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
               className="rounded-full border border-stone-400/50 px-4 py-2 dark:border-stone-600/50"
            >
              Source code
            </Link>
          ) : null}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-stone-300/40 bg-stone-100 p-6 dark:border-stone-700/30 dark:bg-stone-900/30">
            <h2 className="text-lg font-semibold">Role</h2>
            <p className="mt-2 text-sm text-stone-600 dark:text-stone-300">
              {project.role}
            </p>
          </article>
          <article className="rounded-2xl border border-stone-300/40 bg-stone-100 p-6 dark:border-stone-700/30 dark:bg-stone-900/30">
            <h2 className="text-lg font-semibold">Problem</h2>
            <p className="mt-2 text-sm text-stone-600 dark:text-stone-300">
              {project.problem}
            </p>
          </article>
          <article className="rounded-2xl border border-stone-300/40 bg-stone-100 p-6 dark:border-stone-700/30 dark:bg-stone-900/30">
            <h2 className="text-lg font-semibold">Solution</h2>
            <p className="mt-2 text-sm text-stone-600 dark:text-stone-300">
              {project.solution}
            </p>
          </article>
          <article className="rounded-2xl border border-stone-300/40 bg-stone-100 p-6 dark:border-stone-700/30 dark:bg-stone-900/30">
            <h2 className="text-lg font-semibold">Outcome</h2>
            <p className="mt-2 text-sm text-stone-600 dark:text-stone-300">
              {project.outcome}
            </p>
          </article>
        </section>
      </AnimatedSection>
    </main>
  );
}
