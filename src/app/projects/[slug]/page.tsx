import Block from "@/app/projects/[slug]/Block";
import projects from "@/app/projects/projects.json";
import {
  MonoIcons,
  frameworks,
  languages,
  platforms,
  tools,
} from "@/components/Icons";
import CardStack from "@/components/custom/card-stack";
import Main from "@/components/page/Main";
import { Title } from "@/components/page/Title";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils/cn";
import { ExternalLinkIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HTMLAttributes } from "react";

export const getProject = (slug: string) => {
  return projects.find((project) => project.slug === slug);
};

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);

  if (!project) {
    return {
      title: "404",
    };
  }

  return {
    title: getProject(params.slug)?.title,
    description: getProject(params.slug)?.description,
  };
}
const CitizenshipAUPage = ({ params }: { params: { slug: string } }) => {
  const project = getProject(params.slug);

  if (!project) {
    return notFound();
  }

  const PlatformIcon = platforms[project.platform];
  const FrameworkIcon = frameworks[project.framework];
  const LanguageIcons = project.languages.map(
    (language) => languages[language]
  );
  const ToolIcons = project.tools?.map((tool) => tools[tool]);

  return (
    <Main className="gap-10 lg:gap-y-20">
      <div className="grid grid-cols-12 lg:min-h-[386px]">
        <div className="col-span-12 lg:col-span-6 lg:pr-8 flex flex-col justify-center gap-7 lg:gap-4">
          <div className="space-y-3">
            <Title>{project?.title}</Title>
            <h6 className="text-muted-foreground">
              {project?.short_description}
            </h6>
          </div>
          <MainImage type="sm" project={project} className="mb-3" />
          {project.link && (
            <Link
              href={project?.link}
              target="_blank"
              className={cn(
                buttonVariants({
                  variant: "gradient",
                  size: "lg",
                  className: "w-full py-7",
                })
              )}
            >
              <h6>Visit {project?.title}</h6>
              <ExternalLinkIcon />
            </Link>
          )}
          <Table>
            <TableBody>
              <FilterTableRow title="Platform">
                <FilterIcon title={project.platform}>
                  <PlatformIcon />
                </FilterIcon>
              </FilterTableRow>
              <FilterTableRow title="Framework">
                <FilterIcon title={project.framework}>
                  <FrameworkIcon />
                </FilterIcon>
              </FilterTableRow>
              <FilterTableRow title="Languages">
                <div className="flex gap-7">
                  {LanguageIcons.map((Icon, index) => (
                    <FilterIcon key={index} title={project.languages[index]}>
                      <Icon />
                    </FilterIcon>
                  ))}
                </div>
              </FilterTableRow>
              {project.tools && ToolIcons && (
                <FilterTableRow title="Tools">
                  <div className="flex gap-7">
                    {ToolIcons.map((Icon, index) => (
                      <FilterIcon key={index} title={project.tools[index]}>
                        <Icon />
                      </FilterIcon>
                    ))}
                  </div>
                </FilterTableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="hidden lg:grid lg:pl-8 col-span-6">
          <MainImage type="lg" project={project} />
        </div>
      </div>
      <Separator />
      <div className="space-y-16 lg:space-y-36">
        <Block
          imageSrc={`/citizenshipau/citizenship-tests.jpg`}
          imageAlt={`CitizenshipAU Tests`}
          title="The Best Resources for Future Citizens"
          alignText="right"
        >
          <h6 className="text-muted-foreground">
            CitizenshipAU is an online platform designed by Fadi Gorges and
            Nagham Shalal to help individuals prepare for the Australian
            citizenship test. Our goal is to make the process of becoming an
            Australian citizen as smooth and easy as possible.
            <br />
            <br />
            The website features a vast database of questions based on the
            official Australian citizenship test. We have curated these
            questions to ensure they are up-to-date and relevant to the current
            test requirements. Our platform is user-friendly and easy to
            navigate, making it a great resource for individuals at any stage of
            their citizenship journey.
          </h6>
        </Block>
        <Block
          imageSrc={`/citizenshipau/practice-test.jpg`}
          imageAlt={`CitizenshipAU Practice Test`}
          title="Integrated Translation and Text-to-Speech"
          alignText="left"
        >
          <h6 className="text-muted-foreground">
            Users can complete chapter tests and mock practice tests. The
            chapter tests are focused on specific sections of the citizenship
            test, while the mock practice tests provide a full simulation of the
            actual test.
            <br />
            <br />
            A key feature of CitizenshipAU is the integrated language
            translation feature, which allows users to take the test in a number
            of languages they are comfortable with.
            <br />
            <br />
            Users can also utilise the text-to-speech functionality, which reads
            out the questions and answer options, catering to auditory learners
            and those with visual impairments.
          </h6>
        </Block>
        <Block
          imageSrc={`/citizenshipau/nextjs.jpg`}
          imageAlt={`Next.js Website`}
          title="Harnessing the Power of Next.js"
          alignText="right"
        >
          <h6 className="text-muted-foreground">
            CitizenshipAU is built on the Next.js framework. This open-source
            development framework enabled me to create an efficient,
            server-rendered React application. It provided me with the
            scalability necessary to handle a large database of questions and
            users, alongside improved performance, SEO, and user experience.
            <br />
            <br />
            The website is crafted using HTML, CSS, and TypeScript. These
            technologies allowed me to create a clean, interactive, and
            responsive user interface. TypeScript, a statically typed superset
            of JavaScript, ensured safer and more reliable code, reducing the
            likelihood of runtime errors.
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
          <h6 className="text-muted-foreground">
            For the design and layout of CitizenshipAU, I utilised TailwindCSS
            and Shadcn/UI. TailwindCSS, a utility-first CSS framework, provided
            me with low-level utility classes to build custom designs easily.
            The flexibility and efficiency of TailwindCSS allowed me to create
            unique, responsive, and aesthetically pleasing designs with relative
            ease.
            <br />
            <br />
            Shadcn/UI, a UI library, was used to implement consistent and
            reusable components across the website, enhancing the overall user
            experience. The use of this library ensured that the website
            maintained a uniform look and feel, and ensured consistency between
            components across all pages of my website.
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
          <h6 className="text-muted-foreground">
            The backend of CitizenshipAU is powered by MongoDB and PayloadCMS.
            MongoDB, a source-available cross-platform document-oriented
            database program, was used for its flexibility and scalability. It
            allowed us to store our vast database of questions in a format
            that&apos;s easy to query.
            <br />
            <br />
            PayloadCMS, a powerful Node.js headless CMS and application
            framework, was used to manage content on the website. It provided us
            with a simple yet powerful interface for managing the database of
            questions and user data.
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
    </Main>
  );
};

type MainImageProps = HTMLAttributes<HTMLDivElement> & {
  type: "sm" | "lg";
  project: Project;
};

const MainImage = ({ type, project, className }: MainImageProps) => {
  const cardStack = (
    <CardStack
      className={cn(
        "w-full ",
        type === "sm" ? "lg:hidden aspect-video" : "aspect-auto h-full",
        className
      )}
      cardClassName={cn(
        "relative w-full h-full overflow-hidden",
        type === "lg" ? "group-hover:border-primary transition-[border]" : ""
      )}
      stackClassName={
        type === "lg" ? "group-hover:border-primary transition-[border]" : ""
      }
      hoverEffect
    >
      <Image
        src={`/${project?.slug}/screenshot.jpg`}
        alt={`Screenshot of ${project?.title}`}
        fill
        className={cn(
          "object-cover",
          project.alignScreenshotCenter ? "object-center" : "object-top"
        )}
      />
    </CardStack>
  );

  return project.link ? (
    <Link href={project?.link} target="_blank">
      {cardStack}
    </Link>
  ) : (
    cardStack
  );
};

const FilterIcon = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger className="hover:cursor-default">
          {children}
        </TooltipTrigger>
        <TooltipContent>
          <small>{title}</small>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const FilterTableRow = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <TableRow className="border-0 hover:bg-transparent">
      <TableCell className="p-0 font-medium w-24 border-r">{title}</TableCell>
      <TableCell className="py-3">{children}</TableCell>
    </TableRow>
  );
};

export default CitizenshipAUPage;
