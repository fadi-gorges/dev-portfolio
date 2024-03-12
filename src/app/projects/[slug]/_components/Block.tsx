"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils/cn";
import { ZoomInIcon } from "lucide-react";
import Image from "next/image";

type BlockProps = React.HTMLAttributes<HTMLDivElement> & {
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
  title: string;
  alignText: "left" | "right";
};

const Block = ({
  imageSrc,
  imageAlt,
  imageClassName,
  title,
  alignText,
  className,
  children,
}: BlockProps) => {
  return (
    <div
      className={cn(
        `in-view grid grid-cols-12 gap-y-6 [&:not(.show)]:opacity-0 [&:not(.show)]:-translate-x-3 ${
          alignText === "left" && "lg:[&:not(.show)]:translate-x-3"
        } transition-[opacity,translate] duration-500`,
        className
      )}
    >
      <div
        className={cn(
          "col-span-12 lg:col-span-5 flex items-center",
          alignText === "left" ? "lg:pl-8" : "lg:pr-8"
        )}
      >
        <div className="relative w-full lg:min-h-96 aspect-video lg:aspect-auto border rounded-2xl shadow-md overflow-hidden">
          <Dialog>
            <DialogTrigger className="group">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className={cn("object-top object-cover", imageClassName)}
              />
              <div className="absolute inset-0 w-full h-full flex justify-center items-center gap-3 bg-slate-700/60 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomInIcon />
                <h4>Click to Expand</h4>
              </div>
            </DialogTrigger>
            <DialogContent
              className="w-[95%] h-[95vw] lg:h-[95%] lg:w-[95vh] max-w-full max-h-full sm:rounded-none border-0"
              dialogXClassName="bg-background opacity-100"
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div
        className={cn(
          "col-span-12 lg:col-span-7 flex flex-col justify-center gap-5 font-light",
          alignText === "left"
            ? "lg:col-start-1 lg:row-start-1 lg:pr-8"
            : "lg:pl-8"
        )}
      >
        <h2 className="text-foreground font-bold">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Block;
