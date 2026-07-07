import Link from "next/link";
import { skills } from "@/content/profile";
import { getSkillColor } from "@/lib/card-styles";

export function SkillsSection() {
  return (
    <section className="space-y-6 py-12">
      <h2 className="text-2xl font-semibold">Skills with proof</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((skill, i) => (
          <Link
            key={skill.name}
            href={skill.href}
            className={`rounded-2xl border bg-stone-100 p-5 transition hover:-translate-y-0.5 dark:bg-stone-900/30 ${getSkillColor(i)}`}
          >
            <h3 className="text-base font-semibold">{skill.name}</h3>
            <p className="mt-2 text-sm opacity-80">{skill.proof}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
