import { testimonials } from "@/content/profile";

export function TestimonialsSection() {
  return (
    <section className="space-y-6 py-12">
      <h2 className="text-2xl font-semibold">What people say</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {testimonials.map((item) => (
          <blockquote
            key={item.author}
            className="relative rounded-2xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-white/[0.02]"
          >
            <span className="absolute -left-1 -top-2 text-4xl leading-none text-zinc-300 dark:text-zinc-600">
              &ldquo;
            </span>
            <p className="mt-2 text-sm italic text-zinc-700 dark:text-zinc-200">
              {item.quote}
            </p>
            <footer className="mt-3 text-xs font-medium text-zinc-500">
              &mdash; <cite className="not-italic">{item.author}</cite>
              {item.role ? `, ${item.role}` : ""}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
