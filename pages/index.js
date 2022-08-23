import Header from "../components/Header";

import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/SammanslagetHackaton(WebGL).loader.js",
    dataUrl: "Build/SammanslagetHackaton(WebGL).data.gz",
    frameworkUrl: "Build/SammanslagetHackaton(WebGL).framework.js.gz",
    codeUrl: "Build/SammanslagetHackaton(WebGL).wasm.gz",
  });

  return <Unity unityProvider={unityProvider} />;
}

export default () => (
  <>
    <Header />
    <Game />
  </>
);
