import AboutSection from "@/app/AboutSection";
import HeroSection from "@/app/HeroSection";
import ProjectsSection from "@/app/ProjectsSection";
import SkillsSection from "@/app/SkillsSection";
import { UseIntersectionObserver } from "@/lib/utils/useIntersectionObserver";

const HomePage = () => {
  return (
    <main>
      <UseIntersectionObserver />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
};

export default HomePage;
