import { buttonTypes } from "@/app/projects/[slug]/_components/VisitButton";
import { ProjectPages } from "@/app/projects/[slug]/_projectPages";
import { frameworks, languages, platforms, tools } from "@/components/Icons";
import CardStack from "@/components/custom/card-stack";
import Main from "@/components/page/Main";
import { Title } from "@/components/page/Title";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils/cn";
import { getProject } from "@/lib/utils/getProject";
import { UseIntersectionObserver } from "@/lib/utils/useIntersectionObserver";
import { ArrowLeftIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HTMLAttributes } from "react";

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

const ProjectPage = ({ params }: { params: { slug: string } }) => {
  const project = getProject(params.slug);

  if (!project) {
    return notFound();
  }

  const ProjectPage = ProjectPages[project.slug];

  const PlatformIcon = platforms[project.platform];
  const FrameworkIcon = frameworks[project.framework];
  const LanguageIcons = project.languages.map(
    (language) => languages[language]
  );
  const ToolIcons = project.tools?.map((tool) => tools[tool]);

  return (
    <Main>
      <UseIntersectionObserver />
      <Link
        href="/projects"
        className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeftIcon size={16} />
        <small>View all Projects</small>
      </Link>
      <div className="grid grid-cols-12 lg:min-h-[386px]">
        <div className="col-span-12 lg:col-span-6 lg:pr-8 flex flex-col justify-center gap-7 lg:gap-3">
          <div className="space-y-3">
            <Title>{project?.title}</Title>
            <h6 className="text-muted-foreground">
              {project?.short_description}
            </h6>
          </div>
          <MainImage type="sm" project={project} className="mb-3" />
          <div className="space-y-2 lg:space-y-3">
            {project.buttons.map((button) => {
              const LinkButton = buttonTypes[button.type];
              return (
                <LinkButton key={button.link} href={button.link}>
                  {"text" in button ? button.text : ""}
                </LinkButton>
              );
            })}
          </div>
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
      <Separator className="my-10 lg:my-16" />
      <div className="space-y-16 lg:space-y-28">{ProjectPage}</div>
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
        src={`/media/${project?.slug}/screenshot.jpg`}
        alt={`Screenshot of ${project?.title}`}
        fill
        className={cn(
          "object-cover",
          project.screenshotAlignment === "top" ? "object-top" : "object-center"
        )}
        priority
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

export default ProjectPage;
