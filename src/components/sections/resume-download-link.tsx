"use client";

import { track } from "@vercel/analytics/react";

export function ResumeDownloadLink() {
  return (
    <a
      href="/elijah-resume.txt"
      download
      onClick={() => track("resume_download_click")}
      className="mt-6 inline-flex items-center gap-2 rounded-full bg-stone-800 px-5 py-2.5 text-sm font-medium text-stone-100 transition hover:opacity-90 dark:bg-stone-100 dark:text-stone-900"
    >
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      Download resume
    </a>
  );
}
