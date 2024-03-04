import projects from "@/app/projects/projects.json";

export const getProject = (slug: string) => {
  return projects.find((project) => project.slug === slug);
};
