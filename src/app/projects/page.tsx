import ProjectList from "@/app/projects/ProjectList";
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
