export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  defaultUrl: string;
  author: string;
  keywords: string[];
};

export const siteConfig: SiteConfig = {
  name: "Elijah Portfolio",
  title: "Elijah — Full-Stack Developer",
  description:
    "Portfolio of Elijah - full-stack developer focused on clean architecture and polished product experiences.",
  defaultUrl: "https://elijahmsando672-pixel.github.io",
  author: "Elijah",
  keywords: [
    "full-stack developer",
    "portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "web development",
    "Nairobi",
  ],
};

export function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || siteConfig.defaultUrl;
}
