import SectionTitle from "@/app/_components/SectionTitle";
import projects from "@/app/projects/projects.json";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import BorderButton from "@/components/ui/border-button";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import { ArrowRightIcon, ChevronRightCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectsSection = () => {
  return (
    <div className="page-container flex flex-col gap-5 lg:gap-10 mt-16">
      <div className="flex justify-between items-center">
        <SectionTitle>MY PROJECTS</SectionTitle>
      </div>
      {projects.slice(0, 3).map((project) => (
        <div
          key={project.slug}
          className="in-view transition-[translate,opacity] duration-500 [&:not(.show)]:-translate-x-10 [&:not(.show)]:opacity-0"
        >
          <BackgroundGradient className="group grid grid-cols-12 gap-y-8 rounded-[22px] p-10 bg-background/90 hover:shadow-lg transition-shadow duration-300">
            <div className="col-span-12 lg:col-span-5">
              <Image
                src={`/media/${project.slug}/mockup.png`}
                alt={`${project.title} Mockup`}
                width={750}
                height={750}
              />
            </div>
            <div className="col-span-12 lg:col-start-7 lg:col-span-6 flex flex-col justify-center gap-2 lg:gap-5">
              <h3 className="font-bold text-primary">{project.title}</h3>
              <h6>{project.description}</h6>
              <BorderButton href={`/projects/${project.slug}`} className="mt-3">
                <h6 className="font-bold">View More</h6>
                <ChevronRightCircleIcon />
              </BorderButton>
            </div>
          </BackgroundGradient>
        </div>
      ))}
      <Link
        href="/projects"
        className={cn(
          buttonVariants({
            variant: "gradient",
            size: "lg",
            className:
              "in-view py-6 lg:py-8 transition-[translate,opacity] duration-500 [&:not(.show)]:opacity-0 [&:not(.show)]:-translate-y-5",
          })
        )}
      >
        <h6>View All Projects</h6>
        <ArrowRightIcon />
      </Link>
    </div>
  );
};

export default ProjectsSection;
