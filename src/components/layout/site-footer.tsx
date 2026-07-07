import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-300/30 dark:border-stone-700/30">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-6 py-8 text-sm text-stone-600 dark:text-stone-400 sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Elijah. Crafted with care.</p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/elijahmsando672-pixel"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-stone-900 dark:hover:text-stone-100"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/elijah"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-stone-900 dark:hover:text-stone-100"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:elijahmsando672@gmail.com"
            className="transition hover:text-stone-900 dark:hover:text-stone-100"
          >
            Email
          </Link>
          <p className="text-stone-500">Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
