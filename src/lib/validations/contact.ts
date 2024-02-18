import * as z from "zod";

export const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email("Invalid email address"),
  message: z.string(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
