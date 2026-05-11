import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsPreviewSection } from "@/components/sections/projects-preview-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Elijah is a full-stack developer building reliable products with thoughtful UX and maintainable architecture.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6">
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>
      <AnimatedSection>
        <ProjectsPreviewSection />
      </AnimatedSection>
      <AnimatedSection>
        <SkillsSection />
      </AnimatedSection>
      <AnimatedSection>
        <TestimonialsSection />
      </AnimatedSection>
      <AnimatedSection>
        <ContactCtaSection />
      </AnimatedSection>
    </main>
  );
}
