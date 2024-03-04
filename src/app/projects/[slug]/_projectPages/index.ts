import BabylonFadezProject from "@/app/projects/[slug]/_projectPages/BabylonFadezProject";
import CitizenshipAUProject from "@/app/projects/[slug]/_projectPages/CitizenshipAUProject";
import DungeonOfDeathProject from "@/app/projects/[slug]/_projectPages/DungeonOfDeathProject";

export const ProjectPages: { [key: string]: JSX.Element } = {
  citizenshipau: CitizenshipAUProject,
  babylonfadez: BabylonFadezProject,
  "dungeon-of-death": DungeonOfDeathProject,
};