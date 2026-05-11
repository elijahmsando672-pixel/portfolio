import { testimonials } from "@/content/profile";

export function TestimonialsSection() {
  return (
    <section className="space-y-6 py-12">
      <h2 className="text-2xl font-semibold">What people say</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {testimonials.map((item) => (
          <blockquote
            key={item.author}
            className="rounded-2xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-white/[0.02]"
          >
            <p className="text-sm text-zinc-700 dark:text-zinc-200">
              &ldquo;{item.quote}&rdquo;
            </p>
            <footer className="mt-3 text-xs font-medium text-zinc-500">
              {item.author}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
