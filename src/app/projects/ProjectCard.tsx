import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="col-span-12 sm:col-span-6 xl:col-span-4">
      <CardHeader>
        <Image
          src={project.mockup}
          alt={`${project.title} Image`}
          width={500}
          height={500}
        />
      </CardHeader>
      <CardContent>
        <CardTitle>
          <h2 className="md:text-2xl">{project.title}</h2>
        </CardTitle>
        <CardDescription>Card Description</CardDescription>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
