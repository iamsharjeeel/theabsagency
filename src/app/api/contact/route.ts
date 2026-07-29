import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";
import { SITE } from "@/lib/constants";

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

  const { name, company, email, phone, message } = parsed.data;
  const subject = encodeURIComponent(`Inquiry from ${name} — ${company}`);
  const bodyText = encodeURIComponent(
    [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      message,
    ].join("\n")
  );

  return NextResponse.json({
    message: "Thank you. We'll be in touch shortly.",
    mailto: `mailto:${SITE.email}?subject=${subject}&body=${bodyText}`,
  });
}
