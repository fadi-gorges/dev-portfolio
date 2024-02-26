import { frameworks, languages, platforms, tools } from "@/components/Icons";
import CardStack from "@/components/custom/card-stack";
import Main from "@/components/page/Main";
import { buttonVariants } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getProject } from "@/lib/utils/getProject";
import { ArrowRightCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const project = getProject("CitizenshipAU")!;

const CitizenshipAUPage = () => {
  const PlatformIcon = platforms[project.platform];
  const FrameworkIcon = frameworks[project.framework];
  const LanguageIcons = project.languages.map(
    (language) => languages[language]
  );
  const ToolIcons = project.tools?.map((tool) => tools[tool]);

  return (
    <Main>
      <div className="grid grid-cols-12 gap-y-10">
        <div className="col-span-12 lg:col-span-6 lg:pr-5 flex flex-col gap-7">
          <div className="space-y-3">
            <h1 className="md:text-4xl font-bold">{project?.title}</h1>
            <h6 className="text-muted-foreground">
              {project?.short_description}
            </h6>
          </div>
          <CardStack
            className="lg:hidden w-full aspect-video"
            cardClassName="relative w-full h-full overflow-hidden"
          >
            <Image
              src={`/${project?.slug}/screenshot.jpg`}
              alt={`Screenshot of ${project?.title}`}
              fill
              className="object-top object-cover"
            />
          </CardStack>
          <Link
            href={project?.link!}
            target="_blank"
            className={buttonVariants({
              variant: "gradient",
              size: "lg",
              className: "w-full py-7",
            })}
          >
            <h6>Visit {project?.title}</h6>
            <ArrowRightCircleIcon />
          </Link>
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
        <div className="hidden lg:grid lg:pl-5 col-span-6">
          <Link href={project?.link!} target="_blank">
            <CardStack
              className="w-full aspect-auto h-full"
              cardClassName="relative w-full h-full overflow-hidden group-hover:border-primary transition-[border]"
              stackClassName="group-hover:border-primary transition-[border]"
              hoverEffect
            >
              <Image
                src={`/${project?.slug}/screenshot.jpg`}
                alt={`Screenshot of ${project?.title}`}
                fill
                className="object-top object-cover"
              />
            </CardStack>
          </Link>
        </div>
      </div>
    </Main>
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
