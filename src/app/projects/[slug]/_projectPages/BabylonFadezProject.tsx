import Block from "@/app/projects/[slug]/_components/Block";
import VisitButton from "@/app/projects/[slug]/_components/buttons/VisitButton";
import { MonoIcons } from "@/components/Icons";

const BabylonFadezProject = (
  <>
    <Block
      imageSrc="/babylonfadez/screenshot2.jpg"
      imageAlt="BabylonFadez website"
      title="A Modern Landing Page"
      alignText="right"
      imagePriority
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
      imageSrc="/babylonfadez/figma.jpg"
      imageAlt="Figma Website"
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
        The frontend of BabylonFadez was built using a combination of Next.js
        and TypeScript. Next.js, a React framework, was used for its
        performance, providing a quick load up and seamless browsing experience.
        TypeScript, a statically typed superset of JavaScript, ensured safer and
        more reliable code.
      </h6>
      <div className="flex gap-3">
        <VisitButton href="https://www.figma.com/" icon={MonoIcons.figma} small>
          View Figma
        </VisitButton>
        <VisitButton href="https://nextjs.org/" icon={MonoIcons.nextjs} small>
          View Next.js
        </VisitButton>
      </div>
    </Block>
    <Block
      imageSrc="/babylonfadez/daisyui.jpg"
      imageAlt="DaisyUI Website"
      title="Styling with TailwindCSS and DaisyUI"
      alignText="right"
    >
      <h6>
        The styling of BabylonFadez was achieved using TailwindCSS and DaisyUI,
        two powerful tools that brought the design vision to life. TailwindCSS,
        a utility-first CSS framework, provided the flexibility to create custom
        designs with ease through the use of low-level utility classes.
        <br />
        <br />
        DaisyUI, a plugin that extends TailwindCSS, was utilised to provide well
        crafted UI components and to extend the design possibilities. The
        combination of TailwindCSS and DaisyUI allowed for a highly customizable
        design process, resulting in a visually appealing, modern, and
        responsive landing page that encapsulates the vibe of BabylonFadez.
      </h6>
      <div className="flex gap-3">
        <VisitButton
          href="https://tailwindcss.com/"
          icon={MonoIcons.tailwindcss}
          small
        >
          View TailwindCSS
        </VisitButton>
        <VisitButton href="https://daisyui.com/" icon={MonoIcons.daisyui} small>
          View DaisyUI
        </VisitButton>
      </div>
    </Block>
  </>
);

export default BabylonFadezProject;
