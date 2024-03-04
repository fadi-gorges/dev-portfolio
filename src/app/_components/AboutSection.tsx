import SectionTitle from "@/app/_components/SectionTitle";
import SkillList from "@/app/_components/SkillList";
import VisitButton from "@/app/projects/[slug]/_components/VisitButton";
import { cn } from "@/lib/utils/cn";
import { ChevronRightCircleIcon, Code2Icon } from "lucide-react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div
      id="about-section"
      className="py-14 bg-gradient-to-br from-primary/10 to-teal-500/20"
    >
      <div className="page-container flex flex-col gap-12 lg:gap-20">
        <div className="grid grid-cols-12 gap-y-8">
          <div className="in-view relative col-span-12 md:col-span-4 min-h-60 md:min-h-80 border shadow-sm rounded-3xl overflow-hidden [&:not(.show)]:opacity-0 [&:not(.show)]:translate-y-5 transition-[opacity,translate] duration-300">
            <Image
              src="/media/about.jpg"
              alt="A Laptop"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="in-view col-span-12 md:col-start-6 md:col-span-7 flex flex-col justify-center gap-4 [&:not(.show)]:opacity-0 [&:not(.show)]:translate-y-5 transition-[opacity,translate] duration-300 md:delay-150">
            <SectionTitle>ABOUT ME</SectionTitle>
            <h4 className={cn("font-semibold")}>
              I am passionate about designing and developing beautiful, fast and
              intuitive software.
            </h4>
            <h6>
              As a Bachelor of Software Engineering (Honours) student at the
              University of Technology Sydney, I have garnered experience in
              full-stack web and game development. With my skill in multiple
              programming languages and technologies, I am able to create high
              quality websites and native applications.
            </h6>
            <div className="flex gap-2">
              <VisitButton
                href="/about"
                icon={ChevronRightCircleIcon}
                variant="default"
                small
              >
                Read More
              </VisitButton>
              <VisitButton
                href="/projects"
                icon={Code2Icon}
                variant="outline"
                small
              >
                View Projects
              </VisitButton>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <SectionTitle>MY SKILLS</SectionTitle>
          <SkillList />
          <h4 className="in-view text-muted-foreground text-end transition-[translate,opacity] duration-300 delay-300 [&:not(.show)]:opacity-0 [&:not(.show)]:translate-y-5">
            and more
          </h4>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
