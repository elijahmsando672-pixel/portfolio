"use client";

import { useState, type FormEvent } from "react";
import { track } from "@vercel/analytics/react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: (data.get("name") ?? "").toString().trim(),
      email: (data.get("email") ?? "").toString().trim(),
      message: (data.get("message") ?? "").toString().trim(),
      website: (data.get("website") ?? "").toString().trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        track("contact_form_submit_success");
        form.reset();
      } else {
        track("contact_form_submit_error");
        setStatus("error");
      }
    } catch {
      track("contact_form_submit_error");
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-stone-300/40 bg-stone-100 p-6 dark:border-stone-700/30 dark:bg-stone-900/30"
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="mt-1 w-full rounded-lg border border-stone-300/50 bg-transparent px-4 py-2 text-sm outline-none focus:border-stone-500 dark:border-stone-700/50 dark:focus:border-stone-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1 w-full rounded-lg border border-stone-300/50 bg-transparent px-4 py-2 text-sm outline-none focus:border-stone-500 dark:border-stone-700/50 dark:focus:border-stone-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            autoComplete="off"
            className="mt-1 w-full resize-y rounded-lg border border-stone-300/50 bg-transparent px-4 py-2 text-sm outline-none focus:border-stone-500 dark:border-stone-700/50 dark:focus:border-stone-500"
          />
        </div>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 inline-block rounded-full bg-stone-800 px-5 py-2.5 text-sm font-medium text-stone-100 transition hover:opacity-90 disabled:opacity-50 dark:bg-stone-100 dark:text-stone-900"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
      {status === "success" && (
        <p className="mt-3 text-sm text-green-600 dark:text-green-400" role="status">
          Message sent successfully!
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm text-red-600 dark:text-red-400" role="alert">
          Something went wrong. Try emailing directly instead.
        </p>
      )}
    </form>
  );
}
