import AboutSection from "@/app/AboutSection";
import HeroSection from "@/app/HeroSection";
import ProjectsSection from "@/app/ProjectsSection";
import SkillsSection from "@/app/SkillsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
}
