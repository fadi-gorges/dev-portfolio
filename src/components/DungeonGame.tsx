"use client";

import { useEffect, useState } from "react";
import { useUnityContext } from "react-unity-webgl";

const DungeonGame = () => {
  const {
    unityProvider,
    requestFullscreen,
    isLoaded,
    loadingProgression,
    unload,
  } = useUnityContext({
    loaderUrl: "dungeon-build/Build/DungeonWeb.loader.js",
    dataUrl: "dungeon-build/Build/DungeonWeb.data",
    frameworkUrl: "dungeon-build/Build/DungeonWeb.framework.js",
    codeUrl: "dungeon-build/Build/DungeonWeb.wasm",
  });

  const [devicePixelRatio, setDevicePixelRatio] = useState(
    window.devicePixelRatio
  );

  useEffect(
    function () {
      const updateDevicePixelRatio = function () {
        setDevicePixelRatio(window.devicePixelRatio);
      };
      const mediaMatcher = window.matchMedia(
        `screen and (resolution: ${devicePixelRatio}dppx)`
      );
      mediaMatcher.addEventListener("change", updateDevicePixelRatio);
      return function () {
        mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
      };
    },
    [devicePixelRatio]
  );
};

export default DungeonGame;
