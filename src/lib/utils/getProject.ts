import projects from "@/app/projects/projects.json";

export const getProject = (title: string) => {
  return projects.find((project) => project.title === title);
};
