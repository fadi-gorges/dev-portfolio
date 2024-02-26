"use client";

import projects from "@/app/projects/projects.json";
import { frameworks } from "@/components/Icons";
import { navLinks } from "@/components/page/Navbar";
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
import { CommandSeparator } from "cmdk";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";

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
          <CommandGroup heading="Pages">
            {[
              navLinks.home,
              navLinks.about,
              navLinks.projects,
              navLinks.contact,
            ].map((link) => (
              <Link
                key={link.link}
                href={link.link}
                onClick={() => setOpen(false)}
              >
                <CommandItem>
                  <link.icon className="mr-2 h-4 w-4" />
                  <span>{link.text}</span>
                </CommandItem>
              </Link>
            ))}
          </CommandGroup>
          <CommandGroup heading="Projects">
            {projects.map((project) => {
              const Icon = frameworks[project.framework];
              return (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  onClick={() => setOpen(false)}
                >
                  <CommandItem>
                    <Icon className="mr-2 h-4 w-4" />
                    <span>{project.title}</span>
                  </CommandItem>
                </Link>
              );
            })}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default Search;
