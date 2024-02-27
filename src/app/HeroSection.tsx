"use client";

import { MonoIcons } from "@/components/Icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { cn } from "@/lib/utils/cn";
import { convertRange } from "@/lib/utils/convertRange";
import { scrollIntoView } from "@/lib/utils/scrollIntoView";
import { useScrollPosition } from "@/lib/utils/useScrollPosition";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { isDesktop } from "react-device-detect";

const HeroSection = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const { scrollY } = useScrollPosition();
  const range = useMemo(
    () => convertRange(scrollY, [0, windowHeight], [0, 1]),
    [scrollY, windowHeight]
  );

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);

    const updateMouse = (e: MouseEvent) => {
      setMouseX(e.clientX - window.innerWidth / 2);
      setMouseY(e.clientY - window.innerHeight / 2);
    };

    if (isDesktop) window.addEventListener("mousemove", updateMouse);

    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  return (
    <div
      id="hero-section"
      className="relative overflow-hidden min-h-[700px]"
      style={{ height: windowHeight || "100vh" }}
    >
      <div
        className="absolute inset-0 w-full h-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent)] -z-10"
        style={{ transform: `translateY(${300 * range}px)` }}
      />
      <div
        className={cn(
          "page-container h-full grid grid-cols-12 gap-y-10 transition-[translate,opacity] animate-in fade-in-0 slide-in-from-top-5 duration-500 perspective-1000"
        )}
      >
        <div
          className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col justify-end items-center lg:justify-center lg:items-start"
          style={
            isDesktop
              ? {
                  transform: `translateX(${-mouseX * 0.005}px) translateY(${
                    -mouseY * 0.05
                  }px) rotateX(${-mouseY * 0.01}deg) rotateY(${
                    mouseX * 0.005
                  }deg)`,
                  transition:
                    "transform 1s cubic-bezier(0.2, 0.49, 0.32, 0.99)",
                }
              : {}
          }
        >
          <div className="relative perspective-250">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.85] rounded-full animate-glow -z-10" />
            <Image
              src="/fadi.jpg"
              alt="Portrait of Fadi Gorges"
              width={300}
              height={300}
              className="w-56 h-56 rounded-full lg:w-fit lg:h-fit border-4 border-primary/20"
            />
          </div>
        </div>
        <div
          className="col-span-12 lg:row-start-1 lg:col-span-7 flex flex-col gap-5 lg:gap-8 lg:justify-center"
          style={
            isDesktop
              ? {
                  transform: `translateX(${-mouseX * 0.005}px) translateY(${
                    -mouseY * 0.05
                  }px) rotateX(${-mouseY * 0.01}deg) rotateY(${
                    mouseX * 0.005
                  }deg)`,
                  transition:
                    "transform 1s cubic-bezier(0.2, 0.49, 0.32, 0.99)",
                }
              : {}
          }
        >
          <h1 className="font-extrabold text-primary tracking-wide">
            Full-Stack
            <br />
            Software{" "}
            <TypewriterEffect
              speed={0.1}
              cursorClassName="bg-primary -translate-x-2"
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
                icon: MonoIcons.linkedin,
              },
              {
                href: "https://github.com/fadi-gorges",
                icon: MonoIcons.github,
              },
            ].map((link) => (
              <a key={link.href} href={link.href} target="_blank">
                <link.icon
                  size={30}
                  className="transition-[color,filter,scale] hover:text-primary hover:drop-shadow-[0_3px_.8px_rgba(0,0,0,0.25)] dark:hover:drop-shadow-[0_3px_.8px_rgba(255,255,255,0.15)] active:scale-90"
                />
              </a>
            ))}
            <Button
              className={buttonVariants({
                variant: "gradient",
                className: "group",
              })}
              onClick={() => scrollIntoView("skills-section", -150)}
            >
              <p>More about me</p>
              <div className="relative group-hover:-translate-y-1 transition-transform">
                <ChevronDownIcon />
                <ChevronDownIcon className="absolute left-0 top-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
