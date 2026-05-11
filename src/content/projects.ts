import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "portfolio-site",
    name: "Portfolio Website",
    description:
      "Responsive personal website with refined information architecture and strong page performance.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2026",
    liveUrl: "https://github.com/elijahmsando672-pixel/emoh",
    repoUrl: "https://github.com/elijahmsando672-pixel/emoh",
    role: "Designer and full-stack developer",
    problem:
      "I needed a personal platform to present my work clearly and make it easy for people to contact me.",
    solution:
      "Built a modular Next.js portfolio with reusable sections, better content structure, and dedicated project detail pages.",
    outcome:
      "Created a fast, maintainable portfolio foundation that can scale with new projects and case studies.",
    featured: true,
  },
  {
    slug: "study-schedule",
    name: "Study Schedule",
    description:
      "Planning app that helps learners organize study sessions with clear structure and daily focus.",
    stack: ["React", "Node.js", "PostgreSQL"],
    year: "2025",
    liveUrl: "https://github.com/elijahmsando672-pixel/study-schedule",
    repoUrl: "https://github.com/elijahmsando672-pixel/study-schedule",
    role: "Full-stack engineer",
    problem:
      "Users needed a simple way to organize daily work without heavyweight project-management tools.",
    solution:
      "Designed a lightweight task flow with priority levels, reminder support, and quick status updates.",
    outcome:
      "Improved day-to-day planning flow and reduced friction in tracking personal and team tasks.",
    featured: true,
  },
  {
    slug: "bizflow",
    name: "Bizflow",
    description:
      "Business workflow platform focused on process visibility and smoother team execution.",
    stack: ["Next.js", "Prisma", "Charting"],
    year: "2025",
    liveUrl: "https://github.com/elijahmsando672-pixel/Bizflow",
    repoUrl: "https://github.com/elijahmsando672-pixel/Bizflow",
    role: "Frontend and backend developer",
    problem:
      "Engineering teams lacked a single place to view endpoint health, incidents, and performance trends.",
    solution:
      "Built a dashboard consolidating uptime checks, latency metrics, and incident snapshots into one interface.",
    outcome:
      "Teams gained faster visibility into service health and could react to regressions earlier.",
  },
];
