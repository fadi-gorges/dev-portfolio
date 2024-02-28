import BabylonFadezProject from "@/app/projects/[slug]/_projectPages/BabylonFadezProject";
import CitizenshipAUProject from "@/app/projects/[slug]/_projectPages/CitizenshipAUProject";

export const ProjectPages: { [key: string]: JSX.Element } = {
  citizenshipau: CitizenshipAUProject,
  babylonfadez: BabylonFadezProject,
};
