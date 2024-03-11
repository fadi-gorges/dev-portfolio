import ProjectList from "@/app/projects/_components/ProjectList";
import Main from "@/components/page/Main";
import { UseIntersectionObserver } from "@/lib/utils/useIntersectionObserver";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "",
};

const ProjectsPage = () => {
  return (
    <Main className="in-view [&:not(.show)]:opacity-0 [&:not(.show)]:-translate-y-5 transition-[opacity,translate]">
      <UseIntersectionObserver />
      <ProjectList />
    </Main>
  );
};

export default ProjectsPage;
