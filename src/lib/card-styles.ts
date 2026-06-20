export const cardAccents = [
  "border-t-amber-500",
  "border-t-sky-500",
  "border-t-emerald-500",
  "border-t-violet-500",
] as const;

export const cardBase =
  "rounded-2xl border border-black/10 border-t-4 bg-white p-5 transition hover:-translate-y-0.5 hover:border-black/25 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/30";

export const skillColors = [
  "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-800/30 dark:bg-amber-950/30 dark:text-amber-300",
  "border-sky-200 bg-sky-50 text-sky-800 dark:border-sky-800/30 dark:bg-sky-950/30 dark:text-sky-300",
  "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-800/30 dark:bg-emerald-950/30 dark:text-emerald-300",
  "border-violet-200 bg-violet-50 text-violet-800 dark:border-violet-800/30 dark:bg-violet-950/30 dark:text-violet-300",
] as const;

export const infoCard =
  "rounded-2xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-white/[0.02]";

export function getCardAccent(index: number): string {
  return cardAccents[index % cardAccents.length];
}

export function getSkillColor(index: number): string {
  return skillColors[index % skillColors.length];
}
