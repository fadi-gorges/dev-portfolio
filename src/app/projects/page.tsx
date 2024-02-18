import ProjectList from "@/app/projects/ProjectList";
import Main from "@/components/page/Main";
import Title from "@/components/page/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "",
};

const ProjectsPage = () => {
  return (
    <Main>
      <Title>Projects</Title>
      <ProjectList />
    </Main>
  );
};

export default ProjectsPage;
