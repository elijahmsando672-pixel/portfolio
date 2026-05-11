import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Elijah for freelance projects, collaborations, and full-time opportunities.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-14 sm:py-16">
      <h1 className="text-4xl font-semibold">Contact</h1>
      <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-300">
        Want to collaborate or discuss an opportunity? Reach out through one of
        these channels.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Link
          href="mailto:elijahmsando672@gmail.com"
          className="rounded-2xl border border-black/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-black/30 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/30"
        >
          <p className="text-sm text-zinc-500">Email</p>
          <p className="mt-2 text-lg font-medium">elijahmsando672@gmail.com</p>
        </Link>
        <Link
          href="https://github.com/elijahmsando672-pixel"
          className="rounded-2xl border border-black/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-black/30 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/30"
        >
          <p className="text-sm text-zinc-500">GitHub</p>
          <p className="mt-2 text-lg font-medium">
            github.com/elijahmsando672-pixel
          </p>
        </Link>
        <Link
          href="https://github.com/elijahmsando672-pixel?tab=repositories"
          className="rounded-2xl border border-black/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-black/30 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/30"
        >
          <p className="text-sm text-zinc-500">Featured repos</p>
          <p className="mt-2 text-lg font-medium">github.com/elijahmsando672-pixel</p>
        </Link>
        <article className="rounded-2xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-white/[0.02]">
          <p className="text-sm text-zinc-500">Location / timezone</p>
          <p className="mt-2 text-lg font-medium">Nigeria (WAT, UTC+1)</p>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
            Available for freelance and full-time remote roles.
          </p>
        </article>
      </div>
    </main>
  );
}
