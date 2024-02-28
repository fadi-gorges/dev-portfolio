import Block from "@/app/projects/[slug]/_components/Block";
import { MonoIcons } from "@/components/Icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";

const CitizenshipAUProject = (
  <div className="space-y-16 lg:space-y-36">
    <Block
      imageSrc={`/citizenshipau/citizenship-tests.jpg`}
      imageAlt={`CitizenshipAU Tests`}
      title="The Best Resources for Future Citizens"
      alignText="right"
    >
      <h6>
        CitizenshipAU is an online platform designed by Fadi Gorges and Nagham
        Shalal to help individuals prepare for the Australian citizenship test.
        Our goal is to make the process of becoming an Australian citizen as
        smooth and easy as possible.
        <br />
        <br />
        The website features a vast database of questions based on the official
        Australian citizenship test. We have curated these questions to ensure
        they are up-to-date and relevant to the current test requirements. Our
        platform is user-friendly and easy to navigate, making it a great
        resource for individuals at any stage of their citizenship journey.
      </h6>
    </Block>
    <Block
      imageSrc={`/citizenshipau/practice-test.jpg`}
      imageAlt={`CitizenshipAU Practice Test`}
      title="Integrated Translation and Text-to-Speech"
      alignText="left"
    >
      <h6>
        Users can complete chapter tests and mock practice tests. The chapter
        tests are focused on specific sections of the citizenship test, while
        the mock practice tests provide a full simulation of the actual test.
        <br />
        <br />
        A key feature of CitizenshipAU is the integrated language translation
        feature, which allows users to take the test in a number of languages
        they are comfortable with.
        <br />
        <br />
        Users can also utilise the text-to-speech functionality, which reads out
        the questions and answer options, catering to auditory learners and
        those with visual impairments.
      </h6>
    </Block>
    <Block
      imageSrc={`/citizenshipau/nextjs.jpg`}
      imageAlt={`Next.js Website`}
      title="Harnessing the Power of Next.js"
      alignText="right"
    >
      <h6>
        CitizenshipAU is built on the Next.js framework. This open-source
        development framework enabled me to create an efficient, server-rendered
        React application. It provided me with the scalability necessary to
        handle a large database of questions and users, alongside improved
        performance, SEO, and user experience.
        <br />
        <br />
        The website is crafted using HTML, CSS, and TypeScript. These
        technologies allowed me to create a clean, interactive, and responsive
        user interface. TypeScript, a statically typed superset of JavaScript,
        ensured safer and more reliable code, reducing the likelihood of runtime
        errors.
      </h6>
      <Link
        href="https://nextjs.org/"
        target="_blank"
        className={cn(
          buttonVariants({
            variant: "secondary",
            size: "lg",
            className: "w-full py-6",
          })
        )}
      >
        <h6>View Next.js Documentation</h6>
        <MonoIcons.nextjs />
      </Link>
    </Block>
    <Block
      imageSrc={`/citizenshipau/tailwindcss.jpg`}
      imageAlt={`TailwindCSS Website`}
      title="TailwindCSS and Shadcn/UI for UI Design"
      alignText="left"
    >
      <h6>
        For the design and layout of CitizenshipAU, I utilised TailwindCSS and
        Shadcn/UI. TailwindCSS, a utility-first CSS framework, provided me with
        low-level utility classes to build custom designs easily. The
        flexibility and efficiency of TailwindCSS allowed me to create unique,
        responsive, and aesthetically pleasing designs with relative ease.
        <br />
        <br />
        Shadcn/UI, a UI library, was used to implement consistent and reusable
        components across the website, enhancing the overall user experience.
        The use of this library ensured that the website maintained a uniform
        look and feel, and ensured consistency between components across all
        pages of my website.
      </h6>
      <div className="flex gap-3">
        <Link
          href="https://tailwindcss.com/"
          target="_blank"
          className={cn(
            buttonVariants({
              variant: "secondary",
              className: "flex-1 py-6",
            })
          )}
        >
          <p>View TailwindCSS</p>
          <MonoIcons.tailwindcss />
        </Link>
        <Link
          href="https://ui.shadcn.com/"
          target="_blank"
          className={cn(
            buttonVariants({
              variant: "secondary",
              size: "sm",
              className: "flex-1 py-6",
            })
          )}
        >
          <p>View Shadcn/UI</p>
          <MonoIcons.shadcn />
        </Link>
      </div>
    </Block>
    <Block
      imageSrc={`/citizenshipau/payloadcms.jpg`}
      imageAlt={`PayloadCMS page`}
      title="PayloadCMS for Backend Management"
      alignText="right"
    >
      <h6>
        The backend of CitizenshipAU is powered by MongoDB and PayloadCMS.
        MongoDB, a source-available cross-platform document-oriented database
        program, was used for its flexibility and scalability. It allowed us to
        store our vast database of questions in a format that&apos;s easy to
        query.
        <br />
        <br />
        PayloadCMS, a powerful Node.js headless CMS and application framework,
        was used to manage content on the website. It provided us with a simple
        yet powerful interface for managing the database of questions and user
        data.
      </h6>
      <Link
        href="https://payloadcms.com/"
        target="_blank"
        className={cn(
          buttonVariants({
            variant: "secondary",
            className: "w-full py-6",
          })
        )}
      >
        <h6>View PayloadCMS Documentation</h6>
        <MonoIcons.payload />
      </Link>
    </Block>
  </div>
);

export default CitizenshipAUProject;
