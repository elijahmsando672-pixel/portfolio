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

export type Skill = {
  name: string;
  proof: string;
  href: string;
};

export type Experience = {
  period: string;
  title: string;
  detail: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};
