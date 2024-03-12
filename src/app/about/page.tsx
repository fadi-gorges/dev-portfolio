import AboutCarousel from "@/app/about/_components/AboutCarousel";
import Main from "@/components/page/Main";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils/cn";
import { UseIntersectionObserver } from "@/lib/utils/useIntersectionObserver";
import { Code2Icon, FileTextIcon, MailIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "",
};

const AboutPage = () => {
  return (
    <Main className="max-w-5xl in-view [&:not(.show)]:opacity-0 [&:not(.show)]:-translate-y-5 transition-[opacity,translate]">
      <UseIntersectionObserver />
      <div className="space-y-6 md:space-y-8">
        <div>
          <h1 className="font-semibold md:mb-2">Fadi Gorges</h1>
          <h5 className="text-muted-foreground mb-4">
            Software Engineer & Developer
          </h5>
          <h6 className="font-light">
            As a current student in the{" "}
            <span className="font-semibold">
              Bachelor of Software Engineering (Honours)
            </span>{" "}
            course at the University of Technology Sydney, I have skills in
            full-stack development and a strong foundation in several
            programming languages and frameworks.
          </h6>
        </div>
        <AboutCarousel />
        <div className="pt-8 md:pt-4 mb:pt-0">
          <h2 className="font-semibold mb-3">Education</h2>
          <div className="grid grid-cols-12 gap-y-2">
            <div className="col-span-12 md:col-span-6 pr-2">
              <Card className="p-4 md:p-6 h-full">
                <CardHeader className="p-0 pb-2 space-y-0">
                  <CardTitle className="text-sm md:text-lg">
                    Bachelor of Engineering (Honours)
                  </CardTitle>
                  <CardDescription className="text-sm md:text-lg">
                    University of Technology Sydney (2022-2026)
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="list-disc ml-8">
                    <li className="text-sm md:text-base">
                      Majoring in Software
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="col-span-12 md:col-span-6 pr-2">
              <Card className="p-4 md:p-6 h-full">
                <CardHeader className="p-0 pb-2 space-y-0">
                  <CardTitle className="text-sm md:text-lg">
                    NSW Higher School Certificate
                  </CardTitle>
                  <CardDescription className="text-sm md:text-lg">
                    Bonnyrigg High School (2016-2021)
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="list-disc ml-8">
                    <li className="text-sm md:text-base">
                      Band 6 in Advanced Mathematics and Industrial Technology
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-semibold mb-3">Interests</h2>
          <h6 className="font-light">
            From a young age, I&apos;ve always had a passion for technology.
            Over the years I have delved into various fields of software
            development, including full-stack web apps, immersive games, and
            practical software.
            <br />
            <br />
            At work and in my projects, I give it my all. Outside coding, I hit
            the gym, hang out with friends, and play video games.
          </h6>
        </div>
        <div className="pb-3 lg:bg-5">
          <h2 className="font-semibold mb-3">Skills</h2>
          <h6 className="font-light">
            I utilise{" "}
            <span className="font-semibold">TypeScript, HTML, and CSS</span> for
            web development, usually combined with{" "}
            <span className="font-semibold">ReactJS and NextJS</span> to create
            performant user interfaces. I use{" "}
            <span className="font-semibold">TailwindCSS</span> for designing
            attractive and responsive layouts, and{" "}
            <span className="font-semibold">PayloadCMS</span> for efficient
            content management.
            <br />
            <br />
            Outside of web development, I&apos;ve explored native Windows
            development with the{" "}
            <span className="font-semibold">.NET Framework</span>, game
            development using <span className="font-semibold">Unity</span>, and
            data analysis with <span className="font-semibold">Python</span>.
          </h6>
        </div>
        <div className="h-24 lg:h-32 grid grid-cols-3 gap-2">
          <a
            href="/media/resume.pdf"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "gradient" }),
              "h-full col-span-1 flex-col md:flex-row gap-y-3"
            )}
          >
            <FileTextIcon />
            <h6>View Resume</h6>
          </a>
          <Link
            href="/projects"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "h-full col-span-1 flex-col md:flex-row gap-y-3"
            )}
          >
            <Code2Icon />
            <h6>View Projects</h6>
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "h-full col-span-1 flex-col md:flex-row gap-y-3"
            )}
          >
            <MailIcon />
            <h6>Contact Me</h6>
          </Link>
        </div>
      </div>
    </Main>
  );
};

export default AboutPage;
