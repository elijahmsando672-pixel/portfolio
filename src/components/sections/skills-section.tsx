import { skills } from "@/content/profile";

export function SkillsSection() {
  return (
    <section className="space-y-6 py-12">
      <h2 className="text-2xl font-semibold">Skills with proof</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((skill) => (
          <article
            key={skill.name}
            className="rounded-2xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-white/[0.02]"
          >
            <h3 className="text-base font-semibold">{skill.name}</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              {skill.proof}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
