import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-orange-200/20 blur-3xl dark:bg-orange-900/10" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-72 w-72 rounded-full bg-stone-200/30 blur-3xl dark:bg-orange-950/5" />
      <div className="relative space-y-8">
        <p className="inline-flex items-center gap-1.5 rounded-full border border-stone-300/60 bg-stone-100 px-3 py-1 text-xs font-medium uppercase tracking-wider text-stone-800 dark:border-stone-700/40 dark:bg-stone-900/40 dark:text-stone-300">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
          Full-stack developer based in Nairobi, Kenya
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
          Hi, I am Elijah. I build clean digital products that people actually
          enjoy using.
        </h1>
        <p className="max-w-2xl text-lg text-stone-600 dark:text-stone-300">
          I care about thoughtful UX, maintainable architecture, and shipping
          features that solve real problems for teams and customers.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-full bg-stone-800 px-5 py-2.5 text-sm font-medium text-stone-100 transition hover:opacity-90 dark:bg-stone-100 dark:text-stone-900"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            aria-label="Go to contact page"
            className="rounded-full border border-stone-400/40 px-5 py-2.5 text-sm font-medium transition hover:border-stone-500 dark:border-stone-600/60 dark:hover:border-stone-500"
          >
            Let us talk
          </Link>
        </div>
      </div>
    </section>
  );
}
