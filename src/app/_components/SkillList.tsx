"use client";
import { Icons, MonoIcons, SVGIconProps } from "@/components/Icons";
import { Card } from "@/components/ui/card";
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
    icon: MonoIcons.django,
  },
  {
    title: "Unity",
    link: "https://unity.com",
    icon: MonoIcons.unity,
  },
];

type HoverCardItem = {
  title: string;
  icon: React.ComponentType<SVGIconProps>;
  link: string;
};

const SkillList = ({ className }: { className?: string }) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-4", className)}>
      {skills.map((skill, idx) => (
        <Link
          key={skill.title}
          href={skill?.link}
          target="_blank"
          className="in-view relative group block w-full p-1 text-foreground [&:not(.show)]:opacity-0 [&:not(.show)]:-translate-x-10 transition-[translate,opacity] duration-500"
          style={{ transitionDelay: `${idx * 0.04}s` }}
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
          <SkillCard item={skill} />
        </Link>
      ))}
    </div>
  );
};

const SkillCard = ({ item }: { item: HoverCardItem }) => {
  return (
    <Card className="relative h-full w-full p-4 lg:py-5 bg-background dark:bg-secondary border rounded-2xl z-10">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-4 lg:gap-5">
        <item.icon
          size={50}
          className="lg:w-16 lg:h-16 bg-background dark:bg-foreground text-foreground dark:text-background rounded-full p-1"
        />
        <p>{item.title}</p>
      </div>
    </Card>
  );
};

export default SkillList;
