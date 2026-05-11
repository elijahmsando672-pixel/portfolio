"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/70">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-wide">
          Elijah
        </Link>
        <nav className="flex items-center gap-2 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-1.5 transition-colors ${
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href))
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/elijah-resume.txt"
            download
            className="rounded-full border border-black/20 px-3 py-1.5 font-medium dark:border-white/20"
          >
            Resume
          </Link>
        </nav>
      </div>
    </header>
  );
}
