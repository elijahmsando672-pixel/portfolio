export type Project = {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  year: string;
  liveUrl: string;
  repoUrl: string;
  role: string;
  problem: string;
  solution: string;
  outcome: string;
  featured?: boolean;
};
