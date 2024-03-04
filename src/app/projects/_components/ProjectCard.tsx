import { frameworks, platforms } from "@/components/Icons";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowRightCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: { project: Project }) => {
  const PlatformIcon = platforms[project.platform];
  const FrameworkIcon = frameworks[project.framework];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="col-span-6 xl:col-span-4"
    >
      <Card className="min-h-[325px] md:min-h-[425px] flex flex-col hover:shadow-md hover:bg-primary/5 transition duration-300">
        <CardHeader className="px-4 lg:px-6">
          <Image
            src={`/media/${project.slug}/mockup.png`}
            alt={`${project.title} Image`}
            className="aspnshotect-[31/18]"
            width={500}
            height={500}
          />
        </CardHeader>
        <CardContent className="px-4 lg:px-6 flex-1 space-y-2">
          <CardTitle>
            <h5 className="md:text-2xl">{project.title}</h5>
          </CardTitle>
          <p className="text-muted-foreground">{project.short_description}</p>
        </CardContent>
        <CardFooter className="px-4 lg:px-6 gap-3">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger>
                <PlatformIcon />
              </TooltipTrigger>
              <TooltipContent>
                <small>{project.platform}</small>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger>
                <FrameworkIcon />
              </TooltipTrigger>
              <TooltipContent>
                <small>{project.framework}</small>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div className="ml-auto flex items-center gap-2">
            <p>View</p>
            <ArrowRightCircleIcon size={24} />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProjectCard;
