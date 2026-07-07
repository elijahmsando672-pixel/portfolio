import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { ProjectCard } from "@/components/shared/project-card";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies, live demos, and source links for Elijah's work.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-14 sm:py-16">
      <AnimatedSection>
        <h1 className="text-4xl font-semibold">Projects</h1>
        <p className="mt-3 max-w-2xl text-stone-600 dark:text-stone-300">
          A curated mix of shipped products and experiments. Each one reflects
          how I approach product decisions, architecture, and user experience.
        </p>
      </AnimatedSection>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <AnimatedSection key={project.slug}>
            <ProjectCard project={project} index={i} />
          </AnimatedSection>
        ))}
      </div>
    </main>
  );
}
