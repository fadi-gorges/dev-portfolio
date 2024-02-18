import Main from "@/components/page/Main";
import Title from "@/components/page/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "",
};

const AboutPage = () => {
  return (
    <Main>
      <Title>About Me</Title>
    </Main>
  );
};

export default AboutPage;
