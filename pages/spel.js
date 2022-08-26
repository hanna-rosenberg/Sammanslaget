import Header from "../components/Header";
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/FinishedSammanslagetHackaton.loader.js",
    dataUrl: "Build/FinishedSammanslagetHackaton.data.unityweb",
    frameworkUrl: "Build/FinishedSammanslagetHackaton.framework.js.unityweb",
    codeUrl: "Build/FinishedSammanslagetHackaton.wasm.unityweb",
  });

  return <Unity unityProvider={unityProvider} />;
}

export default function Index() {
  return (
    <div className="container">
      <Header></Header>
      <Game />
      <p>Besök på en dator för att spela spelet</p>
    </div>
  );
}
