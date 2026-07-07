import { testimonials } from "@/content/profile";

export function TestimonialsSection() {
  return (
    <section className="space-y-6 py-12">
      <h2 className="text-2xl font-semibold">What people say</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {testimonials.map((item) => (
          <blockquote
            key={item.author}
            className="relative rounded-2xl border border-stone-300/40 bg-stone-100 p-5 dark:border-stone-700/30 dark:bg-stone-900/30"
          >
            <span className="absolute -left-1 -top-2 text-4xl leading-none text-stone-400 dark:text-stone-600">
              &ldquo;
            </span>
            <p className="mt-2 text-sm italic text-stone-700 dark:text-stone-200">
              {item.quote}
            </p>
            <footer className="mt-3 text-xs font-medium text-stone-500">
              &mdash; <cite className="not-italic">{item.author}</cite>
              {item.role ? `, ${item.role}` : ""}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
