import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "portfolio-site",
    name: "Portfolio Website",
    description:
      "Responsive personal portfolio with refined information architecture, dark mode, and strong page performance (95+ Lighthouse).",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2026",
    liveUrl: "https://github.com/elijahmsando672-pixel/emoh",
    repoUrl: "https://github.com/elijahmsando672-pixel/emoh",
    role: "Designer and full-stack developer",
    problem:
      "I needed a personal platform to present my work clearly and make it easy for people to contact me. Existing templates were either too bloated or lacked the polish I wanted.",
    solution:
      "Built a modular Next.js portfolio with reusable components, animated scroll sections, a custom dark mode with no flash, and dedicated project detail pages with case study format.",
    outcome:
      "Achieved 95+ Lighthouse scores across performance, accessibility, and SEO. Created a fast, maintainable portfolio foundation that can scale with new projects and case studies.",
    featured: true,
  },
  {
    slug: "study-schedule",
    name: "Study Schedule",
    description:
      "Planning app that helps learners organize study sessions with clear structure, priority levels, and daily focus tracking.",
    stack: ["React", "Node.js", "PostgreSQL"],
    year: "2025",
    liveUrl: "https://github.com/elijahmsando672-pixel/study-schedule",
    repoUrl: "https://github.com/elijahmsando672-pixel/study-schedule",
    role: "Full-stack engineer",
    problem:
      "Students and self-learners needed a simple way to organize daily study sessions without the overhead of heavyweight project-management tools or complex calendar apps.",
    solution:
      "Designed a lightweight task flow with priority levels, status updates, and persistent storage. Built a React frontend with a Node.js REST API backed by PostgreSQL for reliable data handling.",
    outcome:
      "Improved day-to-day planning flow for users. Reduced friction in tracking tasks by providing quick status updates and a clean, focused interface.",
    featured: true,
  },
  {
    slug: "bizflow",
    name: "Bizflow",
    description:
      "Business workflow platform focused on process visibility, endpoint health monitoring, and smoother team execution.",
    stack: ["Next.js", "Prisma", "Charting"],
    year: "2025",
    liveUrl: "https://github.com/elijahmsando672-pixel/Bizflow",
    repoUrl: "https://github.com/elijahmsando672-pixel/Bizflow",
    role: "Frontend and backend developer",
    problem:
      "Engineering teams lacked a single place to view endpoint health, incidents, and performance trends. Monitoring was scattered across tools and required manual effort to correlate data.",
    solution:
      "Built a dashboard consolidating uptime checks, latency metrics, and incident snapshots into one interface. Used Prisma for data modeling and charting libraries for visual performance trends.",
    outcome:
      "Teams gained faster visibility into service health and could react to regressions earlier. Reduced the time to identify and diagnose incidents by consolidating data into a single view.",
    featured: true,
  },
];
