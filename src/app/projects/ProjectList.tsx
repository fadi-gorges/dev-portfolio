"use client";

import FilterSection from "@/app/projects/FilterSection";
import ProjectCard from "@/app/projects/ProjectCard";
import projects from "@/app/projects/projects.json";
import { MonoIcons, SVGIconProps } from "@/components/Icons";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

export type Filter = {
  name: string;
  icon: React.ComponentType<SVGIconProps>;
};

const platforms: Filter[] = [
  {
    name: "Web",
    icon: MonoIcons.web,
  },
  {
    name: "Windows",
    icon: MonoIcons.windows,
  },
  {
    name: "Cross Platform",
    icon: MonoIcons.crossPlatform,
  },
];

const frameworks: Filter[] = [
  {
    name: "Next.js",
    icon: MonoIcons.nextjs,
  },
  {
    name: "Unity",
    icon: MonoIcons.unity,
  },
  {
    name: "WinForms",
    icon: MonoIcons.winforms,
  },
];

const languages: Filter[] = [
  {
    name: "HTML",
    icon: MonoIcons.html,
  },
  {
    name: "CSS",
    icon: MonoIcons.css,
  },
  {
    name: "TypeScript",
    icon: MonoIcons.typescript,
  },
  {
    name: "C#",
    icon: MonoIcons.csharp,
  },
];

const tools: Filter[] = [
  {
    name: "TailwindCSS",
    icon: MonoIcons.tailwindcss,
  },
  {
    name: "PayloadCMS",
    icon: MonoIcons.payload,
  },
  {
    name: "MongoDB",
    icon: MonoIcons.mongodb,
  },
  {
    name: "Shadcn/ui",
    icon: MonoIcons.shadcn,
  },
  {
    name: "Figma",
    icon: MonoIcons.figma,
  },
  {
    name: "AceternityUI",
    icon: MonoIcons.aceternityui,
  },
  {
    name: "SQLite",
    icon: MonoIcons.sqlite,
  },
] as const;

const ProjectList = () => {
  const [search, setSearch] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<Filter[]>([]);
  const [selectedFrameworks, setSelectedFrameworks] = useState<Filter[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<Filter[]>([]);
  const [selectedTools, setSelectedTools] = useState<Filter[]>([]);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    setFilteredProjects(
      projects.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) &&
          (!selectedPlatforms.length ||
            selectedPlatforms.some((sel) => sel.name === p.platform)) &&
          (!selectedFrameworks.length ||
            selectedFrameworks.some((sel) => p.framework.includes(sel.name))) &&
          (!selectedLanguages.length ||
            selectedLanguages.some((sel) => p.languages.includes(sel.name))) &&
          (!selectedTools.length ||
            selectedTools.some((sel) => p.tools?.includes(sel.name)))
      )
    );
  }, [
    search,
    selectedPlatforms,
    selectedFrameworks,
    selectedLanguages,
    selectedTools,
  ]);

  return (
    <div className="grid grid-cols-12">
      <ScrollArea className="hidden lg:block col-span-3 xl:col-span-2 max-h-[80vh]">
        <div className="flex flex-col gap-5">
          <div className="relative">
            <SearchIcon
              size={20}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              className="pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Projects..."
            />
          </div>
          <FilterSection
            name="Platforms"
            values={platforms}
            state={selectedPlatforms}
            setState={setSelectedPlatforms}
          />
          <Separator />
          <FilterSection
            name="Frameworks"
            values={frameworks}
            state={selectedFrameworks}
            setState={setSelectedFrameworks}
          />
          <Separator />
          <FilterSection
            name="Languages"
            values={languages}
            state={selectedLanguages}
            setState={setSelectedLanguages}
          />
          <Separator />
          <FilterSection
            name="Tools"
            values={tools}
            state={selectedTools}
            setState={setSelectedTools}
          />
        </div>
      </ScrollArea>
      <div className="col-span-12 lg:col-span-9 xl:col-span-10 lg:pl-8">
        <div className="grid grid-cols-12 gap-4">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
