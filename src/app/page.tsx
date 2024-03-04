import AboutSection from "@/app/_components/AboutSection";
import HeroSection from "@/app/_components/HeroSection";
import ProjectsSection from "@/app/_components/ProjectsSection";
import { UseIntersectionObserver } from "@/lib/utils/useIntersectionObserver";

const HomePage = () => {
  return (
    <main>
      <UseIntersectionObserver />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
};

export default HomePage;
