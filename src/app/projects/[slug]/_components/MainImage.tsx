import CardStack from "@/components/custom/card-stack";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";
import Link from "next/link";

type MainImageProps = React.HTMLAttributes<HTMLDivElement> & {
  type: "sm" | "lg";
  project: Project;
};

const MainImage = ({ type, project, className }: MainImageProps) => {
  const cardStack = (
    <CardStack
      className={cn(
        "w-full ",
        type === "sm" ? "lg:hidden aspect-video" : "aspect-auto h-full",
        className
      )}
      cardClassName={cn(
        "relative w-full h-full overflow-hidden",
        type === "lg" ? "group-hover:border-primary transition-[border]" : ""
      )}
      stackClassName={
        type === "lg" ? "group-hover:border-primary transition-[border]" : ""
      }
      hoverEffect
    >
      <Image
        src={`/media/${project?.slug}/screenshot.jpg`}
        alt={`Screenshot of ${project?.title}`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={cn(
          "object-cover",
          project.screenshotAlignment === "top" ? "object-top" : "object-center"
        )}
        priority
      />
    </CardStack>
  );
  return project.link ? (
    <Link
      href={project?.link}
      target="_blank"
      className={type === "sm" ? "lg:hidden" : ""}
    >
      {cardStack}
    </Link>
  ) : (
    cardStack
  );
};

export default MainImage;
