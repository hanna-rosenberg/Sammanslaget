import Header from "../components/Header";
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/2FallingThingsNotFinished.loader.js",
    dataUrl: "Build/2FallingThingsNotFinished.data.unityweb",
    frameworkUrl: "Build/2FallingThingsNotFinished.framework.js.unityweb",
    codeUrl: "Build/2FallingThingsNotFinished.wasm.unityweb",
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
