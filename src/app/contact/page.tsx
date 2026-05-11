import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send a message or find alternative ways to reach Elijah.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-14 sm:py-16">
      <AnimatedSection>
        <h1 className="text-4xl font-semibold">Contact</h1>
        <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-300">
          Want to collaborate or discuss an opportunity? Send a message or reach
          out through the channels below.
        </p>
      </AnimatedSection>
      <AnimatedSection>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <ContactForm />
          <div className="flex flex-col gap-4">
            <a
              href="mailto:elijahmsando672@gmail.com"
              className="rounded-2xl border border-black/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-black/30 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/30"
            >
              <p className="text-sm text-zinc-500">Email</p>
              <p className="mt-2 text-lg font-medium">elijahmsando672@gmail.com</p>
            </a>
            <a
              href="https://github.com/elijahmsando672-pixel"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-black/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-black/30 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/30"
            >
              <p className="text-sm text-zinc-500">GitHub</p>
              <p className="mt-2 text-lg font-medium">
                github.com/elijahmsando672-pixel
              </p>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-black/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-black/30 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/30"
            >
              <p className="text-sm text-zinc-500">LinkedIn</p>
              <p className="mt-2 text-lg font-medium">linkedin.com/in/elijah</p>
            </a>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
