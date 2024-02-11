"use client";

import Icons from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { convertRange } from "@/lib/utils/convertRange";
import { scrollIntoView } from "@/lib/utils/scrollIntoView";
import { useScrollPosition } from "@/lib/utils/useScrollPosition";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const { scrollY } = useScrollPosition();
  const range = convertRange(scrollY, [0, windowHeight], [0, 1]);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  return (
    <div
      id="hero-section"
      className="relative overflow-hidden"
      style={{ height: windowHeight }}
    >
      <div
        className="absolute inset-0 w-full h-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent)] -z-10"
        style={{ transform: `translateY(${300 * range}px)` }}
      />
      <div className="page-container h-full grid grid-cols-12 gap-y-10">
        <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col justify-end items-center lg:justify-center lg:items-start">
          {/* <BackgroundGradient circle> */}
          <div className="relative">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full animate-glow -z-10" />
            <Image
              src="/fadi.jpg"
              alt="Portrait of Fadi Gorges"
              width={300}
              height={300}
              className="w-56 h-56 rounded-full lg:w-fit lg:h-fit border-4 border-primary/20"
            />
          </div>
          {/* </BackgroundGradient> */}
        </div>
        <div className="col-span-12 lg:row-start-1 lg:col-span-7 flex flex-col gap-5 lg:gap-8 lg:justify-center">
          <h1 className="font-extrabold text-primary tracking-wide">
            Full-Stack
            <br />
            Software{" "}
            <TypewriterEffect
              cursorClassName="bg-primary"
              words={[{ text: "Developer" }]}
            />
          </h1>
          <h4>
            Hi 👋, I&apos;m Fadi Gorges, an enthusiastic Software Engineering
            student based in Sydney, Australia.
          </h4>
          <div className="flex items-center gap-5">
            {[
              {
                href: "https://www.linkedin.com/in/fadi-gorges",
                icon: Icons.linkedin,
              },
              { href: "https://github.com/fadi-gorges", icon: Icons.github },
            ].map((link) => (
              <a key={link.href} href={link.href} target="_blank">
                <link.icon
                  size={30}
                  className="transition hover:text-primary hover:drop-shadow-[0_3px_.8px_rgba(0,0,0,0.25)] dark:hover:drop-shadow-[0_3px_.8px_rgba(255,255,255,0.15)] active:scale-90"
                />
              </a>
            ))}
            <Button
              className="group gap-3 bg-gradient-to-br from-primary to-teal-500"
              onClick={() => scrollIntoView("skills-section", 40)}
            >
              More about me
              <div className="relative group-hover:-translate-y-1 transition">
                <ChevronDownIcon />
                <ChevronDownIcon className="absolute left-0 top-1.5 opacity-0 group-hover:opacity-100 transition" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
