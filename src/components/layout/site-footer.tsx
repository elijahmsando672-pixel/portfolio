export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-zinc-600 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Elijah. Crafted with care.</p>
        <p>Built with Next.js and TypeScript</p>
      </div>
    </footer>
  );
}
