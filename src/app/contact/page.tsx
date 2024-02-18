import ContactForm from "@/app/contact/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "",
};

const ContactPage = () => {
  return (
    <main className="main page-container">
      <h2 className="font-bold">Contact me</h2>
      <div>
        <h5>Feel free to send me an email at:</h5>
        <h5>
          <a
            href="mailto:fadi@fadigorges.dev"
            className="relative text-blue-400 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-[width] after:ease-out after:duration-300 hover:after:w-full"
          >
            fadi@fadigorges.dev
          </a>
        </h5>
      </div>
      <h5>Or, you can contact me through the form below:</h5>
      <ContactForm />
    </main>
  );
};

export default ContactPage;
