import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-6 py-8 text-sm text-zinc-600 dark:text-zinc-400 sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Elijah. Crafted with care.</p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/elijahmsando672-pixel"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-black dark:hover:text-white"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/elijah"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-black dark:hover:text-white"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:elijahmsando672@gmail.com"
            className="transition hover:text-black dark:hover:text-white"
          >
            Email
          </Link>
          <p className="text-zinc-400">Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
