export const siteConfig = {
  name: "Elijah Portfolio",
  title: "Elijah Portfolio",
  description:
    "Portfolio of Elijah - full-stack developer focused on clean architecture and polished product experiences.",
  defaultUrl: "https://elijahmsando672-pixel.github.io",
};

export function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || siteConfig.defaultUrl;
}
