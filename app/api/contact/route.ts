import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  contactFormSchema,
  type ContactReason,
} from "../../contactSchema";
import { copy, site } from "../../data";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const payload = parsed.data;

  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Missing RESEND_API_KEY" },
      { status: 500 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const reason =
    copy[payload.locale].contactForm.reasons[payload.reason as ContactReason];
  const to = process.env.CONTACT_EMAIL_TO ?? site.email;
  const from =
    process.env.CONTACT_EMAIL_FROM ??
    "Dalibor Trkulja <onboarding@resend.dev>";
  const subject = `[trkulja.rs] ${payload.subject}`;
  const text = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Reason: ${reason}`,
    `Locale: ${payload.locale}`,
    "",
    payload.message,
  ].join("\n");

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: payload.email,
      subject,
      text,
      html: contactEmailHtml({
        name: payload.name,
        email: payload.email,
        reason,
        subject: payload.subject,
        message: payload.message,
        locale: payload.locale,
      }),
    });
  } catch (error) {
    console.error("Contact form email failed", error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

function contactEmailHtml({
  name,
  email,
  reason,
  subject,
  message,
  locale,
}: {
  name: string;
  email: string;
  reason: string;
  subject: string;
  message: string;
  locale: string;
}) {
  const rows = [
    ["Name", name],
    ["Email", email],
    ["Reason", reason],
    ["Subject", subject],
    ["Locale", locale],
  ]
    .map(
      ([label, value]) =>
        `<p><strong>${label}:</strong> ${escapeHtml(value)}</p>`,
    )
    .join("");

  return `
    <div style="font-family: Georgia, serif; line-height: 1.5; color: #111;">
      <h1 style="font-size: 22px;">New contact form message</h1>
      ${rows}
      <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;" />
      <p style="white-space: pre-line;">${escapeHtml(message)}</p>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
