import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  company: z
    .string()
    .trim()
    .min(1, "Company is required")
    .max(120, "Company is too long"),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address")
    .max(200, "Email is too long"),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(30, "Phone is too long")
    .regex(/^[\d\s()+.-]+$/, "Enter a valid phone number"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
});

export type ContactInput = z.infer<typeof contactSchema>;
