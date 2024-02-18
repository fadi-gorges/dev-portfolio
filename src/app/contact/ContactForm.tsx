"use client";
import { contactSendAction } from "@/actions/contact";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils/cn";
import { ContactFormData, contactFormSchema } from "@/lib/validations/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface ContactFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const ContactForm = ({ className }: ContactFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    disabled: isLoading,
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    const res = await contactSendAction(data);

    if (res.success) {
      toast.success("Your message has been sent successfully.");
    } else {
      toast.error("Something went wrong. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex flex-col gap-3 items-start", className)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>
                <p>Your Name *</p>
              </FormLabel>
              <FormControl>
                <Input type="text" autoComplete="name" required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>
                <p>Your Email *</p>
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  autoComplete="email"
                  autoCorrect="off"
                  required
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>
                <p>Message *</p>
              </FormLabel>
              <FormControl>
                <Textarea rows={5} required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="gradient" size="lg" loading={isLoading}>
          <p>Submit</p>
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
