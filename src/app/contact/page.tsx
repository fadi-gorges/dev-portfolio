import ContactForm from "@/app/contact/_components/ContactForm";
import Main from "@/components/page/Main";
import { Title, TitleSeparator } from "@/components/page/Title";
import { UseIntersectionObserver } from "@/lib/utils/useIntersectionObserver";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "",
};

const ContactPage = () => {
  return (
    <Main className="in-view [&:not(.show)]:opacity-0 [&:not(.show)]:-translate-y-5 transition-[opacity,translate]">
      <UseIntersectionObserver />
      <Title>Contact</Title>
      <TitleSeparator />
      <div>
        <h5>Feel free to send me an email at:</h5>
        <h5>
          <a
            href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
            className="relative text-blue-400 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-[width] after:ease-out after:duration-300 hover:after:w-full"
          >
            {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
          </a>
        </h5>
      </div>
      <h5>Or, you can contact me through the form below:</h5>
      <ContactForm />
    </Main>
  );
};

export default ContactPage;
