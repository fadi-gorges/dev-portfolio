"use client";

import { Toggle } from "@/components/ui/toggle";
import { Italic } from "lucide-react";

const ProjectList = () => {
  return (
    <>
      <div className="flex gap-10 items-center">
        <h2 className="font-bold">Projects</h2>
        <div className="grid grid-cols-12">
          <div className="col-span-3 flex flex-col">
            <Toggle aria-label="Toggle italic">
              <Italic className="mr-2 h-4 w-4" />
              Italic
            </Toggle>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectList;
