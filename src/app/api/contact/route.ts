import { NextResponse } from "next/server";

type RateLimitEntry = {
  count: number;
  expiresAt: number;
};

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const ipRequests = new Map<string, RateLimitEntry>();

function getClientKey(req: Request) {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  return req.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const entry = ipRequests.get(key);

  if (!entry || entry.expiresAt < now) {
    ipRequests.set(key, { count: 1, expiresAt: now + WINDOW_MS });
    return false;
  }

  if (entry.count >= MAX_REQUESTS) return true;

  entry.count += 1;
  return false;
}

function validateInput(name: string, email: string, message: string) {
  if (!name || !email || !message) return false;
  if (name.length > 80 || email.length > 160 || message.length > 2000) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(req: Request) {
  const key = getClientKey(req);
  if (isRateLimited(key)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  try {
    const body = (await req.json()) as {
      name?: string;
      email?: string;
      message?: string;
      website?: string;
    };

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";
    const website = body.website?.trim() ?? "";

    // Honeypot field catches most bot submissions.
    if (website) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (!validateInput(name, email, message)) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid name, email, and message." },
        { status: 400 },
      );
    }

    const target = process.env.CONTACT_TARGET_EMAIL ?? "elijahmsando672@gmail.com";
    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("message", message);
    formData.set("_captcha", "false");
    formData.set("_subject", `New portfolio message from ${name}`);

    const response = await fetch(`https://formsubmit.co/ajax/${target}`, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Contact proxy failed", response.status, await response.text());
      return NextResponse.json(
        { ok: false, error: "Unable to send your message right now." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Contact API unexpected error", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
