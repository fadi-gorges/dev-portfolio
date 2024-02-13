"use client";
import Icons from "@/components/Icons";
import { cn } from "@/lib/utils/cn";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills: HoverCardItem[] = [
  {
    title: "HTML",
    link: "https://www.w3schools.com/html",
    icon: Icons.html,
  },
  {
    title: "TypeScript",
    link: "https://www.typescriptlang.org",
    icon: Icons.typeScript,
  },
  {
    title: "React",
    link: "https://react.dev",
    icon: Icons.react,
  },
  {
    title: "Next.js",
    link: "https://nextjs.org",
    icon: Icons.nextjs,
  },
  {
    title: "Payload",
    link: "https://payloadcms.com",
    icon: Icons.payload,
  },
  {
    title: "Python",
    link: "https://www.python.org",
    icon: Icons.python,
  },
  {
    title: "Django",
    link: "https://www.djangoproject.com",
    icon: Icons.django,
  },
  {
    title: "Unity",
    link: "https://unity.com",
    icon: Icons.unity,
  },
];

const SkillsSection = () => {
  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  return (
    <div
      ref={skillsRef}
      className={cn(
        "py-14 bg-gradient-to-br from-primary/10 to-teal-500/20 transition duration-200",
        skillsInView ? "" : "opacity-0"
      )}
    >
      <div id="skills-section" className="page-container">
        <h3
          className={cn(
            "px-3 text-primary font-bold transition-opacity delay-200 duration-300",
            skillsInView ? "" : "opacity-0"
          )}
        >
          MY SKILLS
        </h3>
        <HoverEffect
          items={skills}
          inView={skillsInView}
          className="mt-5 lg:mt-10"
        />
      </div>
    </div>
  );
};

import { SvgIconProps } from "@/components/Icons";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

type HoverCardItem = {
  title: string;
  icon: (props: SvgIconProps) => JSX.Element;
  link: string;
};

const HoverEffect = ({
  items,
  inView,
  className,
}: {
  items: HoverCardItem[];
  inView: boolean;
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-4", className)}>
      {items.map((item, idx) => (
        <FollowerPointerCard
          key={item?.link}
          title={item.link.replace("https://", "").replace("www.", "")}
        >
          <Link
            href={item?.link}
            target="_blank"
            style={{
              transitionProperty: "opacity, transform",
              transitionDelay: `${0.5 + idx * 0.1}s`,
            }}
            className={cn(
              "relative group block h-full w-full p-1 cursor-none text-foreground duration-500",
              inView ? "" : "opacity-0 -translate-x-10"
            )}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-foreground/5 block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card item={item} />
          </Link>
        </FollowerPointerCard>
      ))}
    </div>
  );
};

const Card = ({ item }: { item: HoverCardItem }) => {
  return (
    <div className="relative h-full w-full p-4 lg:py-5 bg-background dark:bg-secondary border rounded-2xl z-10">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-4 lg:gap-5">
        <item.icon
          size={50}
          className="lg:w-16 lg:h-16 bg-background dark:bg-foreground rounded-full p-1"
        />
        <small className="lg:text-lg">{item.title}</small>
      </div>
    </div>
  );
};

export default SkillsSection;
