import type { Metadata } from "next";
import { experiences } from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Elijah's background, engineering approach, and experience timeline.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-14 sm:py-16">
      <h1 className="text-4xl font-semibold">About</h1>
      <div className="mt-5 max-w-3xl space-y-4 text-zinc-700 dark:text-zinc-300">
        <p>
          I am Elijah, a full-stack developer focused on building fast,
          accessible, and maintainable web applications.
        </p>
        <p>
          My work combines product thinking with strong engineering discipline,
          from architecture and API design to polished user experiences.
        </p>
        <p>
          Outside of client and team work, I enjoy refining developer workflows,
          documenting better processes, and experimenting with modern frontend
          tooling.
        </p>
      </div>
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold">Experience timeline</h2>
        <div className="space-y-3">
          {experiences.map((item) => (
            <article
              key={item.period}
              className="rounded-2xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-white/[0.02]"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                {item.period}
              </p>
              <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
