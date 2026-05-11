import Link from "next/link";

export function ContactCtaSection() {
  return (
    <section className="my-12 rounded-2xl border border-amber-200/50 bg-gradient-to-br from-amber-50 to-white p-8 dark:border-amber-800/20 dark:from-zinc-900 dark:to-zinc-950">
      <h2 className="text-2xl font-semibold">Have an idea worth building?</h2>
      <p className="mt-3 max-w-xl text-zinc-600 dark:text-zinc-300">
        I am open to freelance projects, product collaborations, and full-time
        roles. Send a message and I will get back quickly.
      </p>
      <Link
        href="/contact"
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-black"
      >
        Send a message
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </section>
  );
}
