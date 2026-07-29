import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";
import { getSupabaseAdmin } from "@/lib/supabase/server";

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

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json(
      {
        error:
          "Contact form is not configured. Add Supabase environment variables.",
      },
      { status: 503 }
    );
  }

  const { error } = await supabase.from("inquiries").insert({
    name: parsed.data.name,
    company: parsed.data.company,
    email: parsed.data.email,
    phone: parsed.data.phone,
    message: parsed.data.message,
  });

  if (error) {
    console.error("Supabase insert error:", error.message);
    return NextResponse.json(
      { error: "Unable to save your inquiry. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({
    message: "Thank you. We'll be in touch shortly.",
  });
}
