import Block from "@/app/projects/[slug]/_components/Block";
import { MonoIcons } from "@/components/Icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";

const BabylonFadezProject = (
  <div className="space-y-16 lg:space-y-36">
    <Block
      imageSrc={`/babylonfadez/1.jpg`}
      imageAlt={`1`}
      title="A Modern Landing Page"
      alignText="right"
    >
      <h6>
        BabylonFadez is a modern, responsive landing page designed for a local
        barbershop in Sydney. The website serves as the digital front door of
        the barbershop, providing information about the shop in an aesthetic and
        modern format.
        <br />
        <br />
        The website features a clean, minimalistic design, showcasing an
        introduction to the team as well as photos and a video of the team in
        action. A table of services is also provided, allowing users to easily
        check the prices of each service. The website also features the
        shop&apos;s contact information and an integrated map with each
        location.
      </h6>
    </Block>
    <Block
      imageSrc={`/babylonfadez/2.jpg`}
      imageAlt={`2`}
      title="Building with Figma and Next.js"
      alignText="left"
    >
      <h6>
        The layout of BabylonFadez was designed using Figma, a powerful digital
        design tool. Figma allowed for a collaborative and iterative design
        process, enabling the creation of a visually appealing and user-friendly
        layout that reflects the barbershop&apos;s brand.
        <br />
        <br />
        The frontend of BabylonFadez was built using a combination of Next.js,
        TypeScript and TailwindCSS. Next.js, a React framework, was used for its
        performance, providing a quick load up and seamless browsing experience.
        TypeScript, a statically typed superset of JavaScript, ensured safer and
        more reliable code. HTML and TailwindCSS were used to structure and
        style the website, creating a clean and interactive user interface.
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
  </div>
);

export default BabylonFadezProject;
