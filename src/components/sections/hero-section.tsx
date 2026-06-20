import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl dark:bg-amber-500/10" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-72 w-72 rounded-full bg-amber-100/20 blur-3xl dark:bg-amber-400/5" />
      <div className="relative space-y-8">
        <p className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/50 bg-amber-50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-amber-800 dark:border-amber-800/30 dark:bg-amber-950/30 dark:text-amber-300">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
          Full-stack developer based in Nairobi, Kenya
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
            aria-label="Go to contact page"
            className="rounded-full border border-black/20 px-5 py-2.5 text-sm font-medium transition hover:border-black/40 dark:border-white/25 dark:hover:border-white/50"
          >
            Let us talk
          </Link>
        </div>
      </div>
    </section>
  );
}
