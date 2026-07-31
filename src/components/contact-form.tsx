"use client";

import { useState, type FormEvent } from "react";
import { contactSchema, type ContactInput } from "@/lib/validations/contact";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type FieldErrors = Partial<Record<keyof ContactInput, string>>;

const initial: ContactInput = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<ContactInput>(initial);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [serverMessage, setServerMessage] = useState("");

  function update<K extends keyof ContactInput>(key: K, value: ContactInput[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setServerMessage("");

    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ContactInput;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      setStatus("idle");
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = (await res.json()) as {
        error?: string;
        message?: string;
        mailto?: string;
      };

      if (!res.ok) {
        setStatus("error");
        setServerMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      if (data.mailto) {
        window.location.href = data.mailto;
      }

      setStatus("success");
      setValues(initial);
      setServerMessage(
        data.message ?? "Thank you. We'll be in touch shortly."
      );
    } catch {
      setStatus("error");
      setServerMessage("Unable to send right now. Please try again shortly.");
    }
  }

  const fields: {
    key: keyof ContactInput;
    label: string;
    type?: string;
    autoComplete?: string;
  }[] = [
    { key: "name", label: "Name", autoComplete: "name" },
    { key: "company", label: "Company", autoComplete: "organization" },
    { key: "email", label: "Email", type: "email", autoComplete: "email" },
    { key: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  ];

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8" aria-live="polite">
      <div className="grid gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8">
        {fields.map((field) => (
          <div key={field.key} className="space-y-3">
            <Label htmlFor={field.key} className="label-caps text-on-surface-variant">
              {field.label}
            </Label>
            <Input
              id={field.key}
              name={field.key}
              type={field.type ?? "text"}
              autoComplete={field.autoComplete}
              value={values[field.key]}
              onChange={(e) => update(field.key, e.target.value)}
              aria-invalid={!!errors[field.key]}
              aria-describedby={errors[field.key] ? `${field.key}-error` : undefined}
              className="h-11 rounded-sm border-outline-variant bg-surface-lowest font-medium"
            />
            {errors[field.key] && (
              <p id={`${field.key}-error`} className="text-xs text-destructive">
                {errors[field.key]}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <Label htmlFor="message" className="label-caps text-on-surface-variant">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="rounded-sm border-outline-variant bg-surface-lowest font-medium"
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className={cn(
          "inline-flex w-full items-center justify-center bg-cta px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.1em] text-on-cta uppercase transition-all duration-300 hover:scale-[1.01] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
        )}
      >
        {status === "loading" ? "Sending…" : "Send Inquiry"}
      </button>

      {status === "success" && (
        <p className="text-sm text-tertiary" role="status">
          {serverMessage}
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-destructive" role="alert">
          {serverMessage}
        </p>
      )}
    </form>
  );
}
