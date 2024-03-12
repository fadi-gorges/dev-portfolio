import BabylonFadezProject from "@/app/projects/[slug]/_projectPages/BabylonFadezProject";
import BudgetingAppProject from "@/app/projects/[slug]/_projectPages/BudgetingAppProject";
import CitizenshipAUProject from "@/app/projects/[slug]/_projectPages/CitizenshipAUProject";
import DevPortfolioProject from "@/app/projects/[slug]/_projectPages/DevPortfolioProject";
import DungeonOfDeathProject from "@/app/projects/[slug]/_projectPages/DungeonOfDeathProject";

export const ProjectPages: { [key: string]: JSX.Element } = {
  citizenshipau: CitizenshipAUProject,
  babylonfadez: BabylonFadezProject,
  "dungeon-of-death": DungeonOfDeathProject,
  "dev-portfolio": DevPortfolioProject,
  "budgeting-app": BudgetingAppProject,
};
