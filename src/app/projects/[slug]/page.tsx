import MainImage from "@/app/projects/[slug]/_components/MainImage";
import { buttonTypes } from "@/app/projects/[slug]/_components/VisitButton";
import {
  FilterIcon,
  FilterTableRow,
} from "@/app/projects/[slug]/_components/filter-table";
import { ProjectPages } from "@/app/projects/[slug]/_projectPages";
import { frameworks, languages, platforms, tools } from "@/components/Icons";
import Main from "@/components/page/Main";
import { Title } from "@/components/page/Title";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody } from "@/components/ui/table";
import { getProject } from "@/lib/utils/getProject";
import { UseIntersectionObserver } from "@/lib/utils/useIntersectionObserver";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

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
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/projects">Projects</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{project.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid grid-cols-12 lg:min-h-[386px]">
        <div className="col-span-12 lg:col-span-6 lg:pr-8 flex flex-col justify-center gap-7 lg:gap-6">
          <div className="space-y-1">
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

export default ProjectPage;
