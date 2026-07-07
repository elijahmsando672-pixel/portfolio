import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-24 text-center">
      <h1 className="text-6xl font-semibold">404</h1>
      <p className="mt-4 text-stone-600 dark:text-stone-300">
        Page not found.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-stone-800 px-5 py-2.5 text-sm font-medium text-stone-100 transition hover:opacity-90 dark:bg-stone-100 dark:text-stone-900"
      >
        Back home
      </Link>
    </main>
  );
}
