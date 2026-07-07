import Link from "next/link";

export function ContactCtaSection() {
  return (
    <section className="my-12 rounded-2xl border border-stone-300/50 bg-gradient-to-br from-stone-100 to-stone-50 p-8 dark:border-stone-700/30 dark:from-stone-900 dark:to-stone-950">
      <h2 className="text-2xl font-semibold">Have an idea worth building?</h2>
      <p className="mt-3 max-w-xl text-stone-600 dark:text-stone-300">
        I am open to freelance projects, product collaborations, and full-time
        roles. Send a message and I will get back quickly.
      </p>
      <Link
        href="/contact"
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-stone-800 px-5 py-2.5 text-sm font-medium text-stone-100 transition hover:opacity-90 dark:bg-stone-100 dark:text-stone-900"
      >
        Send a message
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </section>
  );
}
