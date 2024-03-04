import Block from "@/app/projects/[slug]/_components/Block";

const DungeonOfDeathProject = (
  <>
    <Block
      title="An Immersive 2D Dungeon Crawler"
      imageSrc="/dungeon-of-death/screenshot2.jpg"
      imageAlt="Dungeon of Death Screenshot"
      imageClassName="object-center"
      alignText="right"
    >
      <h6>
        Dungeon of Death is a 2D fantasy dungeon crawler game that takes players
        on a journey through mysterious dungeons filled with monsters, valuable
        loot, and boss fights. This immersive game offers a rich experience that
        is tailored to make sure it is challenging for any gamer.
        <br />
        <br />
        Dungeon of Death is designed to run seamlessly across multiple
        platforms. Whether you&apos;re playing on a PC, Mac, Web or any platform
        with a keyboard and mouse, the game delivers a consistent and smooth
        gaming experience, ensuring that players can enjoy the game wherever
        they are.
      </h6>
    </Block>
    <Block
      title="Battle Intense Bosses"
      imageSrc="/dungeon-of-death/boss.jpg"
      imageAlt="Dungeon of Death Boss Fight"
      imageClassName="object-center"
      alignText="left"
    >
      <h6>
        Players must persevere through high stake battles at the completion of
        each dungeon level, marking pivotal moments of the game&apos;s
        completion.
        <br />
        <br />
        The Gelare Boss is a formidable opponent that charges at high speed when
        angered, dealing significant damage. Players must anticipate its
        movements and time their actions carefully to avoid its powerful
        attacks.
        <br />
        <br />
        The Sarco presents a different kind of challenge. Frantically darting to
        each side of the level, it spawns in new monsters to join the fray.
        Players must not only focus on the Sarco but also manage additional
        threats, thoroughly testing each player&apos;s strategic capabilities.
      </h6>
    </Block>
    <Block
      title="Weapons, Loot, and Shop Systems"
      imageSrc="/dungeon-of-death/shop.jpg"
      imageAlt="Dungeon of Death Shop"
      imageClassName="object-center"
      alignText="right"
    >
      <h6>
        Players can carry one weapon at a time, and new weapons can be found in
        random chests scattered throughout the dungeon, adding an element of
        surprise and anticipation to the exploration.
        <br />
        <br />
        In addition to weapons, these chests can also contain various pickups
        that can aid the player in their journey. This loot system encourages
        exploration and rewards players for their curiosity and bravery.
        <br />
        <br />
        As players complete levels, they collect coins which can be used to
        purchase additional loot in the shop that appears after each level. This
        shop system provides players with an opportunity to strategize for the
        challenges ahead, making each decision in the shop as crucial as the
        battles in the dungeon.
      </h6>
    </Block>
    <Block
      title="Crafting Art in Photoshop"
      imageSrc="/dungeon-of-death/photoshop.jpg"
      imageAlt="Artwork in Photoshop"
      alignText="left"
    >
      <h6>
        Dungeon of Death incorporates a unique and aesthetic visual style
        composed of pixel art and animations, designed in Photoshop. The pixel
        art style lends the game a charming retro aesthetic, while still
        allowing for a high level of detail and creativity.
        <br />
        <br />
        Photoshop was used to carefully craft each character, monster, and
        environment artwork design pixel by pixel. Animations were also created
        frame by frame and exported as a spritemap to be utilised by the game
        engine, allowing for smooth movement and bringing the characters and
        monsters to life.
      </h6>
    </Block>
    <Block
      title="Building with Unity and C#"
      imageSrc="/dungeon-of-death/unity.jpg"
      imageAlt="Unity Game Engine"
      alignText="right"
    >
      <h6>
        The game was built using Unity, a powerful and versatile game
        development platform known for its ability to create high-quality 2D and
        3D games. Unity&apos;s robust set of features enabled the creation of
        the game&apos;s intricate environments and dynamic gameplay elements.
        <br />
        <br />
        The game&apos;s logic was coded in C#, a popular programming language
        known for its versatility and efficiency. The use of C# allowed for the
        implementation of complex game mechanics, alongside easy integration of
        third-party libraries that were essential to the game such as the A*
        Pathfinding Algorithm for Unity.
      </h6>
    </Block>
  </>
);

export default DungeonOfDeathProject;
