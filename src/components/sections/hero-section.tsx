import Link from "next/link";

export function HeroSection() {
  return (
    <section className="space-y-8 py-16 sm:py-20">
      <p className="inline-flex rounded-full border border-black/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-zinc-600 dark:border-white/10 dark:text-zinc-300">
        Full-stack developer based in Nigeria
      </p>
      <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
        Hi, I am Elijah. I build clean digital products that people actually
        enjoy using.
      </h1>
      <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
        I care about thoughtful UX, maintainable architecture, and shipping
        features that solve real problems for teams and customers.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/projects"
          className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-black"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-black/20 px-5 py-2.5 text-sm font-medium transition hover:border-black/40 dark:border-white/25 dark:hover:border-white/50"
        >
          Let us talk
        </Link>
      </div>
    </section>
  );
}
