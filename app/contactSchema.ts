import { z } from "zod";

export const contactReasonValues = [
  "price-order",
  "materials-process",
  "collaboration",
  "feedback",
] as const;

export type ContactReason = (typeof contactReasonValues)[number];

export const contactFormSchema = z.object({
  locale: z.enum(["en", "sr"]),
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160),
  subject: z.string().trim().min(2).max(160),
  reason: z
    .string()
    .refine((value) =>
      contactReasonValues.includes(value as ContactReason),
    ),
  message: z.string().trim().min(10).max(3000),
  website: z.string().max(0).optional(),
});

export type ContactFormFields = z.infer<typeof contactFormSchema>;
