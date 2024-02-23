"use client";

import FilterSection from "@/app/projects/FilterSection";
import ProjectCard from "@/app/projects/ProjectCard";
import projects from "@/app/projects/projects.json";
import { MonoIcons, SVGIconProps } from "@/components/Icons";
import { Title, TitleSeparator } from "@/components/page/Title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FilterIcon, SearchIcon, Undo2Icon } from "lucide-react";
import { useEffect, useState } from "react";

type Filters = {
  [key: string]: React.ComponentType<SVGIconProps>;
};

export const platforms: Filters = {
  Web: MonoIcons.web,
  Windows: MonoIcons.windows,
  "Cross Platform": MonoIcons.crossPlatform,
};

export const frameworks: Filters = {
  "Next.js": MonoIcons.nextjs,
  Unity: MonoIcons.unity,
  WinForms: MonoIcons.winforms,
};

export const languages: Filters = {
  HTML: MonoIcons.html,
  CSS: MonoIcons.css,
  TypeScript: MonoIcons.typescript,
  "C#": MonoIcons.csharp,
};

export const tools: Filters = {
  Figma: MonoIcons.figma,
  TailwindCSS: MonoIcons.tailwindcss,
  "Shadcn/ui": MonoIcons.shadcn,
  AceternityUI: MonoIcons.aceternityui,
  PayloadCMS: MonoIcons.payload,
  MongoDB: MonoIcons.mongodb,
  SQLite: MonoIcons.sqlite,
};

const ProjectList = () => {
  const [search, setSearch] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    setFilteredProjects(
      projects.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) &&
          (!selectedPlatforms.length ||
            selectedPlatforms.includes(p.platform)) &&
          (!selectedFrameworks.length ||
            selectedFrameworks.some((sel) => p.framework.includes(sel))) &&
          (!selectedLanguages.length ||
            selectedLanguages.some((sel) => p.languages.includes(sel))) &&
          (!selectedTools.length ||
            selectedTools.some((sel) => p.tools?.includes(sel)))
      )
    );
  }, [
    search,
    selectedPlatforms,
    selectedFrameworks,
    selectedLanguages,
    selectedTools,
  ]);

  const filters = (
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
  );

  return (
    <>
      <div className="flex justify-between">
        <Title>Projects</Title>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="secondary" className="md:hidden">
              <FilterIcon size={20} />
              <p>Filter & Search</p>
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-10">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-3">
                <FilterIcon size={20} />
                Filter Projects
              </SheetTitle>
            </SheetHeader>
            <ScrollArea className="flex-1">{filters}</ScrollArea>
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="secondary">
                  <Undo2Icon size={20} />
                  <h6>Return</h6>
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <TitleSeparator />
      <div className="grid grid-cols-12">
        <ScrollArea className="hidden md:block col-span-3 xl:col-span-2 max-h-[80vh]">
          {filters}
        </ScrollArea>
        <div className="col-span-12 md:col-span-9 xl:col-span-10 md:pl-8">
          <div className="grid grid-cols-12 gap-4">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectList;
