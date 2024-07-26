import AusBizGrowthProject from "@/app/projects/[slug]/_projectPages/AusBizGrowthProject";
import BabylonFadezProject from "@/app/projects/[slug]/_projectPages/BabylonFadezProject";
import BudgetingAppProject from "@/app/projects/[slug]/_projectPages/BudgetingAppProject";
import CitizenshipAUProject from "@/app/projects/[slug]/_projectPages/CitizenshipAUProject";
import DevPortfolioProject from "@/app/projects/[slug]/_projectPages/DevPortfolioProject";
import DungeonOfDeathProject from "@/app/projects/[slug]/_projectPages/DungeonOfDeathProject";
import Garden3DProject from "@/app/projects/[slug]/_projectPages/Garden3DProject";

export const ProjectPages: { [key: string]: JSX.Element } = {
  citizenshipau: CitizenshipAUProject,
  ausbizgrowth: AusBizGrowthProject,
  "dungeon-of-death": DungeonOfDeathProject,
  babylonfadez: BabylonFadezProject,
  "dev-portfolio": DevPortfolioProject,
  "3d-garden": Garden3DProject,
  "budgeting-app": BudgetingAppProject,
};
