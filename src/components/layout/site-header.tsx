"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useSyncExternalStore } from "react";
import { useTheme } from "@/components/theme-provider";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function useHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const mounted = useHydrated();

  return (
    <header className="sticky top-0 z-20 border-b border-stone-300/30 bg-stone-100/80 backdrop-blur dark:border-stone-700/30 dark:bg-stone-900/70">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="Go to homepage" className="text-sm font-semibold tracking-wide text-stone-800 dark:text-stone-100">
          Elijah
        </Link>
        <nav className="hidden items-center gap-2 text-sm sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-1.5 transition-colors ${
                pathname === link.href
                  ? "bg-stone-800 text-stone-100 dark:bg-stone-100 dark:text-stone-900"
                  : "text-stone-700 hover:text-stone-900 dark:text-stone-300 dark:hover:text-stone-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-2 rounded-full border border-stone-400/50 p-1.5 text-sm transition hover:border-stone-500 dark:border-stone-600 dark:hover:border-stone-500"
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === "light" ? (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )
            ) : (
              <span className="inline-block h-4 w-4" />
            )}
          </button>
        </nav>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-full border border-stone-400/50 p-1.5 sm:hidden dark:border-stone-600"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <nav
          id="mobile-nav"
          className="flex flex-col items-center gap-2 border-t border-stone-300/30 px-6 pb-4 pt-3 text-sm sm:hidden dark:border-stone-700/30"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`w-full rounded-full px-3 py-1.5 text-center transition-colors ${
                pathname === link.href
                  ? "bg-stone-800 text-stone-100 dark:bg-stone-100 dark:text-stone-900"
                  : "text-stone-700 hover:text-stone-900 dark:text-stone-300 dark:hover:text-stone-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="mt-2 rounded-full border border-stone-400/50 p-1.5 text-sm transition hover:border-stone-500 dark:border-stone-600 dark:hover:border-stone-500"
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === "light" ? (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )
            ) : (
              <span className="inline-block h-4 w-4" />
            )}
          </button>
        </nav>
      )}
    </header>
  );
}
