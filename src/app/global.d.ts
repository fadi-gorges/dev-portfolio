import projects from "@/app/projects/projects.json";

declare global {
  type Project = (typeof projects)[number];
}
