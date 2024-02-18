import ProjectList from "@/app/projects/ProjectList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "",
};

const ProjectsPage = () => {
  return (
    <main className="main page-container">
      <ProjectList />
    </main>
  );
};

export default ProjectsPage;
