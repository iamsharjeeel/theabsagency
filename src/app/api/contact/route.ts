import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";

const WEBHOOK_URL =
  process.env.CONTACT_WEBHOOK_URL ??
  "https://services.leadconnectorhq.com/hooks/PeUGl5hUMfWxbaSLw4jD/webhook-trigger/62950ec7-6220-4199-b866-9a1e33d8732e";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Validation failed.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const payload = {
    name: parsed.data.name,
    company: parsed.data.company,
    email: parsed.data.email,
    phone: parsed.data.phone,
    message: parsed.data.message,
    source: "theabsagency.com",
    submittedAt: new Date().toISOString(),
  };

  try {
    const webhookRes = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!webhookRes.ok) {
      return NextResponse.json(
        { error: "Unable to deliver your inquiry. Please try again shortly." },
        { status: 502 }
      );
    }
  } catch {
    return NextResponse.json(
      { error: "Unable to deliver your inquiry. Please try again shortly." },
      { status: 502 }
    );
  }

  return NextResponse.json({
    message: "Thank you. We'll be in touch shortly.",
  });
}
