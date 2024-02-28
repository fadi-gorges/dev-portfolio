import AboutSection from "@/app/_components/AboutSection";
import HeroSection from "@/app/_components/HeroSection";
import ProjectsSection from "@/app/_components/ProjectsSection";
import SkillsSection from "@/app/_components/SkillsSection";
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
