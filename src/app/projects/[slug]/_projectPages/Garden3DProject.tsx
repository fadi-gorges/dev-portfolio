import Block from "@/app/projects/[slug]/_components/Block";
import VisitButton from "@/app/projects/[slug]/_components/VisitButton";
import { MonoIcons } from "@/components/Icons";

const Garden3DProject = (
  <>
    <Block
      imageSrc="/media/3d-garden/screenshot2.jpg"
      imageAlt="Day-Night Simulation"
      title="Day-Night Simulation"
      alignText="right"
      imageClassName="object-center"
    >
      <h6>
        The 3D Garden project features a day-night cycle simulation. The
        scene&apos;s time can be adjusted with a slider, with the scene getting
        darker, the light source rising and setting, and the shadows getting
        longer and fading. This dynamic lighting system adds a sense of realism
        and immersion to the experience.
      </h6>
    </Block>
    <Block
      imageSrc="/media/3d-garden/screenshot3.jpg"
      imageAlt="Move and Clone Objects"
      title="Move and Clone Objects"
      alignText="left"
      imageClassName="object-center"
    >
      <h6>
        Users can interact with the scene by moving and cloning objects. The
        scene features a variety of objects, such as trees, tiles, light poles
        and fences, which can be selected and moved around the scene. Users can
        also clone objects, allowing them to create unique arrangements and
        designs.
      </h6>
    </Block>
    <Block
      imageSrc="/media/3d-garden/threejs.jpg"
      imageAlt="Three.js Website"
      title="Three.js Library"
      alignText="right"
    >
      <h6>
        The 3D Garden project was created using HTML, CSS, JavaScript and
        Three.js. Three.js is a popular JavaScript library used to create 3D
        graphics in the browser. It provides a wide range of features, such as
        lighting, shadowsand materials making it ideal for creating interactive
        3D experiences.
      </h6>
      <VisitButton
        href="https://threejs.org/docs/#manual/en/introduction/Installation"
        icon={MonoIcons.threejs}
        newTab
      >
        View Three.js Documentation
      </VisitButton>
    </Block>
  </>
);

export default Garden3DProject;
