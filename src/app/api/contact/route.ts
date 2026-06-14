import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/data/site";

const MAX = { name: 100, email: 200, message: 5000 };
const INTENTS = ["collaboration", "feedback", "other"] as const;
type Intent = (typeof INTENTS)[number];

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never see this field. If it's filled, it's a bot —
  // accept the request so the bot moves on, but drop the message.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  // Allowlist intent — never let arbitrary text into the email subject/body.
  const intent: Intent = INTENTS.includes(body.intent as Intent)
    ? (body.intent as Intent)
    : "other";

  if (!name || name.length > MAX.name) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!isEmail(email) || email.length > MAX.email) {
    return NextResponse.json(
      { error: "Please enter a valid email." },
      { status: 400 },
    );
  }
  if (!message || message.length > MAX.message) {
    return NextResponse.json(
      { error: "Please enter a message." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;

  // Never pretend a message was sent. If email isn't wired up, say so.
  if (!apiKey || !from) {
    console.error(
      "Contact form: RESEND_API_KEY and/or CONTACT_FROM_EMAIL are not set.",
    );
    return NextResponse.json(
      { error: "Messaging isn’t live yet — please email us directly." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `[Glinc] ${intent} — ${name}`,
    text: `Intent: ${intent}\nName: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    console.error("Contact form: Resend send failed", error);
    return NextResponse.json(
      { error: "Couldn’t send right now. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
