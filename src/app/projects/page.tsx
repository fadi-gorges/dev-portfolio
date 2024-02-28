import ProjectList from "@/app/projects/_components/ProjectList";
import Main from "@/components/page/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "",
};

const ProjectsPage = () => {
  return (
    <Main>
      <ProjectList />
    </Main>
  );
};

export default ProjectsPage;
