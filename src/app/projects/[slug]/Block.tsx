"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils/cn";
import { ZoomInIcon } from "lucide-react";
import Image from "next/image";

type BlockProps = React.HTMLAttributes<HTMLDivElement> & {
  imageSrc: string;
  imageAlt: string;
  title: string;
  alignText: "left" | "right";
};

const Block = ({
  imageSrc,
  imageAlt,
  title,
  alignText,
  className,
  children,
}: BlockProps) => {
  return (
    <div className={cn("grid grid-cols-12 gap-y-6", className)}>
      <div
        className={cn(
          "col-span-12 lg:col-span-5",
          alignText === "left" ? "lg:pl-8" : "lg:pr-8"
        )}
      >
        <div className="relative w-full h-full aspect-video lg:aspect-auto border rounded-2xl shadow-md overflow-hidden">
          <Dialog>
            <DialogTrigger className="group">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-top object-cover"
              />
              <div className="absolute inset-0 w-full h-full flex justify-center items-center gap-3 bg-slate-700/60 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomInIcon />
                <h4>Click to Expand</h4>
              </div>
            </DialogTrigger>
            <DialogContent
              className="w-[95%] h-[95vw] lg:h-[95%] lg:w-[95vh] max-w-full max-h-full"
              dialogXClassName="bg-background opacity-100"
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="border rounded-2xl shadow-md object-top object-cover"
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div
        className={cn(
          "col-span-12 lg:col-span-7 space-y-5",
          alignText === "left"
            ? "lg:col-start-1 lg:row-start-1 lg:pr-8"
            : "lg:pl-8"
        )}
      >
        <h2 className="font-bold">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Block;
