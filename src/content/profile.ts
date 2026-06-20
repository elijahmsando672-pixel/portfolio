import type { Experience, Skill, Testimonial } from "@/types/project";

export const skills: Skill[] = [
  {
    name: "Frontend Engineering",
    proof:
      "Architected and built a responsive portfolio site with Next.js, React, and Tailwind CSS. Reached 95+ Lighthouse performance score and 100% accessible routing. Built a study planner UI with real-time filtering and keyboard-navigable components.",
    href: "/projects/portfolio-site",
  },
  {
    name: "Backend APIs",
    proof:
      "Designed RESTful API routes for a study schedule app with Node.js and PostgreSQL — handling auth, CRUD, and data validation. Built a Bizflow dashboard backend with Prisma, integrating uptime checks and aggregated performance metrics.",
    href: "/projects/bizflow",
  },
  {
    name: "TypeScript",
    proof:
      "Primary language across every project. Used for type-safe React components, API route handlers with Zod schemas, and shared type definitions that reduced runtime errors by catching mismatches at compile time.",
    href: "/projects",
  },
  {
    name: "Product Thinking",
    proof:
      "Defined feature scope and UX priorities for three shipped products. Translated ambiguous requirements into clear user flows, cutting feature bloat by focusing on measurable outcomes over nice-to-haves.",
    href: "/projects",
  },
  {
    name: "UI / UX Design",
    proof:
      "Designed interfaces with a focus on visual hierarchy, consistent spacing, and accessible color contrast. Iterated on layouts through usability feedback, reducing task completion time in the study planner by simplifying navigation.",
    href: "/projects/portfolio-site",
  },
  {
    name: "DevOps & Deployment",
    proof:
      "Set up CI/CD pipelines with GitHub Actions, automated Vercel preview deployments, and managed environment variables across staging and production. Used Git workflows with feature branches and code review practices.",
    href: "/projects",
  },
];

export const experiences: Experience[] = [
  {
    period: "2026 - Present",
    title: "Freelance Full-Stack Developer",
    detail:
      "Building responsive portfolio sites, business dashboards, and custom web tools for clients. Managing end-to-end delivery from requirements gathering through deployment and monitoring.",
  },
  {
    period: "2025 - 2026",
    title: "Independent Product Builder",
    detail:
      "Shipped three practical side projects — a study schedule planner, a business workflow dashboard (Bizflow), and this portfolio. Each project was designed, built, and deployed independently with production-grade tooling.",
  },
  {
    period: "2024 - 2025",
    title: "Frontend-Focused Learning Sprint",
    detail:
      "Developed deep skills in React, Next.js, TypeScript, and Tailwind CSS. Focused on performance optimization (Core Web Vitals), accessible component patterns, and modern React patterns like Server Components and streaming SSR.",
  },
  {
    period: "2023 - 2024",
    title: "Self-Taught Developer Journey",
    detail:
      "Built foundational knowledge in HTML, CSS, JavaScript, and Node.js through project-based learning. Completed full-stack tutorials and began contributing to open-source projects on GitHub.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Elijah brings clarity to messy product ideas and turns them into clean, working software quickly. The study planner he built cut our planning overhead in half.",
    author: "Product Collaborator",
    role: "Startup founder",
  },
  {
    quote:
      "Strong communication, thoughtful architecture decisions, and reliable execution from start to finish. Elijah was a key contributor to getting our dashboard shipped on time.",
    author: "Engineering Peer",
    role: "Full-stack engineer",
  },
  {
    quote:
      "Elijah has a rare ability to see both the big picture and the fine details. The portfolio site he built is fast, accessible, and a pleasure to navigate.",
    author: "Design Partner",
    role: "UX designer",
  },
];
