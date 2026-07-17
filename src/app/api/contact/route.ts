import { NextResponse } from "next/server";
import { site } from "@/lib/data";

/*
  Contact delivery via Brevo's transactional email API. The visitor's
  address is set as replyTo so answering the notification replies
  straight to them. Requires BREVO_API_KEY and BREVO_SENDER_EMAIL in
  .env.local (see .env.example); without them the endpoint fails
  gracefully and the form tells the visitor to email directly.
*/
const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never fill this field.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const subject = String(body.subject ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Please fill in every field." },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "That email address doesn't look valid." },
      { status: 400 },
    );
  }
  if (name.length > 120 || subject.length > 200 || message.length > 5000) {
    return NextResponse.json(
      { error: "One of the fields is too long." },
      { status: 400 },
    );
  }

  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  if (!apiKey || !senderEmail) {
    console.warn(
      "Contact email skipped: BREVO_API_KEY or BREVO_SENDER_EMAIL is missing.",
    );
    return NextResponse.json(
      { error: "Could not send right now. Please email directly." },
      { status: 500 },
    );
  }

  try {
    const res = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          email: senderEmail,
          name: process.env.BREVO_SENDER_NAME ?? "Sayu Portfolio",
        },
        to: [{ email: process.env.CONTACT_TO_EMAIL ?? site.email }],
        replyTo: { email, name },
        subject: `[Portfolio] ${subject}`,
        textContent: `From: ${name} <${email}>\n\n${message}`,
      }),
      signal: AbortSignal.timeout(10000),
      cache: "no-store",
    });
    if (!res.ok) {
      console.error("Brevo request failed:", res.status, await res.text());
      throw new Error(`Brevo responded ${res.status}`);
    }
  } catch (error) {
    console.error("Contact email failed:", error);
    return NextResponse.json(
      { error: "Could not send right now. Please email directly." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
