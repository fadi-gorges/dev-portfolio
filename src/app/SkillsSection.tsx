"use client";
import Icons, { SvgIconProps } from "@/components/Icons";
import { cn } from "@/lib/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

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
  return (
    <div className="in-view py-14 bg-gradient-to-br from-primary/10 to-teal-500/20 [&:not(.show)]:opacity-0 transition-opacity duration-200">
      <div
        id="skills-section"
        className="page-container flex flex-col gap-5 lg:gap-10"
      >
        <h3 className="in-view text-primary font-bold [&:not(.show)]:opacity-0 transition-opacity delay-200 duration-300">
          MY SKILLS
        </h3>
        <HoverEffect items={skills} className="scale-105 lg:scale-100" />
        <h4
          className="in-view text-end [&:not(.show)]:opacity-0 [&:not(.show)]:translate-y-5"
          style={{
            transitionProperty: "translate, opacity",
            transitionDuration: "0.3s",
            transitionDelay: "1.5s",
          }}
        >
          and more...
        </h4>
      </div>
    </div>
  );
};

type HoverCardItem = {
  title: string;
  icon: (props: SvgIconProps) => JSX.Element;
  link: string;
};

const HoverEffect = ({
  items,
  className,
}: {
  items: HoverCardItem[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-4", className)}>
      {items.map((item, idx) => (
        <Link
          key={item.title}
          href={item?.link}
          target="_blank"
          className="in-view relative group block w-full p-1 text-foreground [&:not(.show)]:opacity-0 [&:not(.show)]:-translate-x-10 transition duration-500"
          style={{
            transitionProperty: "opacity, translate",
            transitionDelay: `${0.5 + idx * 0.1}s`,
          }}
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
