import { NextResponse } from "next/server";
import { site } from "@/data/site";

type Payload = {
  name?: string;
  phone?: string;
  email?: string;
  zip?: string;
  service?: string;
  details?: string;
  company_website?: string; // honeypot
};

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Bots fill the hidden field; humans never see it.
  if (body.company_website) return NextResponse.json({ ok: true });

  const name = body.name?.trim();
  const phone = body.phone?.trim();
  const email = body.email?.trim();
  const zip = body.zip?.trim();
  const service = body.service?.trim();
  const details = body.details?.trim() ?? "";

  if (!name || !phone || !email || !zip || !service) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }
  if (!/^\d{5}$/.test(zip)) return NextResponse.json({ error: "ZIP code must be 5 digits." }, { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });

  const text = [
    `New estimate request from ${site.name} website`,
    ``,
    `Name:    ${name}`,
    `Phone:   ${phone}`,
    `Email:   ${email}`,
    `ZIP:     ${zip}`,
    `Service: ${service}`,
    ``,
    `Details:`,
    details || "(none)",
  ].join("\n");

  // Delivery: Resend (https://resend.com) when configured, otherwise log so nothing is lost on Vercel.
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL ?? site.email;
  const from = process.env.LEAD_FROM_EMAIL ?? `Lion Construction Website <onboarding@resend.dev>`;

  if (apiKey) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject: `Estimate request: ${service} in ${zip} — ${name}`, text }),
    });
    if (!res.ok) {
      console.error("Resend error", res.status, await res.text());
      return NextResponse.json({ error: "We could not send your request. Please call us instead." }, { status: 502 });
    }
  } else {
    console.log("[estimate-request]\n" + text);
  }

  return NextResponse.json({ ok: true });
}
