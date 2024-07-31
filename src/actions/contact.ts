"use server";

import { actionError } from "@/lib/utils/actionError";
import { mailer } from "@/lib/utils/mailer";
import { ContactFormData, contactFormSchema } from "@/lib/validations/contact";

export const contactSendAction = async (data: ContactFormData) => {
  const validation = contactFormSchema.safeParse(data);

  if (!validation.success)
    return { success: false, error: validation.error.message };

  try {
    await mailer.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
      subject: `PORTFOLIO MESSAGE from ${validation.data.email}`,
      text: (
        `Name: ${validation.data.name}\n` +
        `Email: ${validation.data.email}\n\n` +
        `Message: ${validation.data.message}`
      ).trim(),
    });
    return { success: true };
  } catch (e: any) {
    return actionError(e, "Something went wrong. Please try again.");
  }
};
