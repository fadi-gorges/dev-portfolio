"use client";

import { BackgroundGradient } from "@/components/ui/background-gradient";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "CitizenshipAU.com",
    description: `CitizenshipAU is a website that helps people prepare for the Australian Citizenship Test.
    The front-end is built in NextJS, TypeScript and styled with TailwindCSS. Shadcn/ui and AceternityUI are
    used for high quality, customisable UI components. For the back-end, PayloadCMS and MongoDB Atlas are
    utilised to application functionality, data storage and user authentication. The website is hosted on Vercel.`,
    image: "/citizenshipau-mockup.png",
    slug: "citizenshipau",
  },
  {
    title: "Dungeon of Death",
    description: `Dungeon of Death is a 2D fantasy dungeon crawler game built in Unity, in which the player
    explores unique dungeons, fights monsters, and collects loot. This game was submitted as my Major Project for
    my HSC Industrial Technology Multimedia course, in which I received an assessment mark of 95/100 (Band 6).`,
    image: "/dungeonofdeath-mockup.png",
    slug: "dungeon-of-death",
  },
  {
    title: "BabylonFadez",
    description: `BabylonFadez is a website showcasing a local barber shop in Sydney, Australia. The site's layout
    was designed in Figma, and the front-end was built in NextJS, TypeScript and styled with TailwindCSS. These
    technologies assisted me in building an aesthetic, modern and responsive landing page.`,
    image: "/babylonfadez-mockup.png",
    slug: "babylonfadez",
  },
];

const ProjectsSection = () => {
  return (
    <div className="page-container flex flex-col gap-5 lg:gap-10 mt-16">
      <div className="flex justify-between items-center">
        <h3 className="in-view text-primary font-bold [&:not(.show)]:opacity-0 transition-opacity delay-200 duration-300">
          PROJECTS
        </h3>
        <Link
          href="/projects"
          className={buttonVariants({ variant: "gradient", size: "lg" })}
        >
          <div className="flex gap-3 z-10">
            <h6>View All</h6>
            <ArrowRightIcon />
          </div>
        </Link>
      </div>
      {projects.map((project, idx) => (
        <div
          key={project.slug}
          className="in-view [&:not(.show)]:-translate-x-10 [&:not(.show)]:opacity-0"
          style={{
            transitionProperty: "translate, opacity",
            transitionDelay: `${idx * 0.2}s`,
            transitionDuration: "0.5s",
          }}
        >
          <BackgroundGradient className="group grid grid-cols-12 gap-y-8 rounded-[22px] p-10 bg-background/90">
            <div className="col-span-12 lg:col-span-5">
              <Image
                src={project.image}
                alt={`${project.title} Mockup`}
                width={750}
                height={750}
                className="mx-auto scale-95 group-hover:scale-100 transition-transform duration-500"
              />
            </div>
            <div className="col-span-12 lg:col-start-7 lg:col-span-6 flex flex-col gap-2 lg:gap-5">
              <h4
                className={cn(
                  "font-bold italic text-primary"
                  // fugaz_one.className
                )}
              >
                {project.title}
              </h4>
              <p className="lg:text-lg">{project.description}</p>
            </div>
          </BackgroundGradient>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;
