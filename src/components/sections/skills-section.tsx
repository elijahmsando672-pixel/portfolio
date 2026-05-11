import Link from "next/link";
import { skills } from "@/content/profile";

const colors = [
  "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-800/30 dark:bg-amber-950/30 dark:text-amber-300",
  "border-sky-200 bg-sky-50 text-sky-800 dark:border-sky-800/30 dark:bg-sky-950/30 dark:text-sky-300",
  "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-800/30 dark:bg-emerald-950/30 dark:text-emerald-300",
  "border-violet-200 bg-violet-50 text-violet-800 dark:border-violet-800/30 dark:bg-violet-950/30 dark:text-violet-300",
  "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-800/30 dark:bg-amber-950/30 dark:text-amber-300",
  "border-sky-200 bg-sky-50 text-sky-800 dark:border-sky-800/30 dark:bg-sky-950/30 dark:text-sky-300",
];

export function SkillsSection() {
  return (
    <section className="space-y-6 py-12">
      <h2 className="text-2xl font-semibold">Skills with proof</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((skill, i) => (
          <Link key={skill.name} href={skill.href}>
            <article
              className={`rounded-2xl border bg-white p-5 transition hover:-translate-y-0.5 dark:bg-white/[0.02] ${colors[i % colors.length]}`}
            >
              <h3 className="text-base font-semibold">{skill.name}</h3>
              <p className="mt-2 text-sm opacity-80">{skill.proof}</p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
