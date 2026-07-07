export const cardAccents = [
  "border-t-orange-600",
  "border-t-stone-500",
  "border-t-emerald-700",
  "border-t-orange-700",
] as const;

export const cardBase =
  "rounded-2xl border border-stone-300/40 border-t-4 bg-stone-100 p-5 transition hover:-translate-y-0.5 hover:border-stone-400 dark:border-stone-700/30 dark:bg-stone-900/30 dark:hover:border-stone-600";

export const skillColors = [
  "border-orange-200 bg-orange-50 text-orange-800 dark:border-orange-800/30 dark:bg-orange-950/30 dark:text-orange-300",
  "border-stone-300 bg-stone-100 text-stone-800 dark:border-stone-700/40 dark:bg-stone-900/30 dark:text-stone-300",
  "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-800/30 dark:bg-emerald-950/30 dark:text-emerald-300",
  "border-orange-300 bg-orange-50 text-orange-800 dark:border-orange-700/30 dark:bg-orange-950/30 dark:text-orange-300",
] as const;

export const infoCard =
  "rounded-2xl border border-stone-300/40 bg-stone-100 p-5 dark:border-stone-700/30 dark:bg-stone-900/30";

export function getCardAccent(index: number): string {
  return cardAccents[index % cardAccents.length];
}

export function getSkillColor(index: number): string {
  return skillColors[index % skillColors.length];
}
