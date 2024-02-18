"use client";

import * as React from "react";

import projects from "@/app/projects/projects.json";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils/cn";
import { CodeSquareIcon, SearchIcon } from "lucide-react";
import Link from "next/link";

type SearchProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Search = ({ className }: SearchProps) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className={cn(
          "flex-1 lg:flex-none justify-start gap-2 pl-3 lg:pr-1 text-muted-foreground",
          className
        )}
        onClick={() => setOpen(true)}
      >
        <SearchIcon size={16} />
        Search Portfolio...
        <kbd className="hidden lg:block ml-2 text-sm text-muted-foreground py-0.5 tracking-[-0.1em] rounded-[0.6rem] border bg-muted px-1.5 font-mono font-medium">
          ⌘ K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search Portfolio..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Projects">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`}>
                <CommandItem>
                  <CodeSquareIcon className="mr-2 h-4 w-4" />
                  <span>{project.title}</span>
                </CommandItem>
              </Link>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default Search;
