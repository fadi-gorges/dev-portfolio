import { BackgroundGradient } from "@/components/ui/background-gradient";

const projects = [
  {
    title: "CitizenshipAU.com",
    description: `CitizenshipAU is a website that helps people prepare for the Australian Citizenship Test.
    The front-end is built in NextJS, TypeScript and styled with TailwindCSS. Shadcn/ui and AceternityUI are
    used for high quality, customisable UI components. For the back-end, PayloadCMS and MongoDB Atlas are
    utilised to application functionality, data storage and user authentication. The website is hosted on Vercel.`,
  },
];

const ProjectsSection = () => {
  return (
    <div className="page-container mb-16">
      <BackgroundGradient className="rounded-[22px] p-10 bg-background ">
        awd
      </BackgroundGradient>
    </div>
  );
};

export default ProjectsSection;
