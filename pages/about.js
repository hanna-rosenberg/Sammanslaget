import Card from "../components/Card";
import Logo from "../public/Logo.png";
import Brown from "../public/frames/brown.svg";
import Pink from "../public/frames/pink.svg";
import Orange from "../public/frames/orange.svg";
import Blue from "../public/frames/blue.svg";
import BrownSecond from "../public/frames/brownSecond.svg";
import BlueSecond from "../public/frames/blueSecond.svg";
import Background from "../public/frames/background.svg";
import Image from "next/image";
import Header from "../components/Header";

export default function About() {
  return (
    <div>
      <Header></Header>
      <div className="aboutContainer1">
        <Image src={Background}></Image>
        <div className="description">
          <Card
            name="Hanna Rosenberg"
            role="Webbutvecklare"
            image={Brown}
          ></Card>
          <Card name="Neo Lejondahl" role="Webbutvecklare" image={Pink}></Card>
          <Card name="Emma Finnäle" role="Webbutvecklare" image={Orange}></Card>
          <Card
            name="Teodor Söderberg"
            role="Webbutvecklare"
            image={Blue}
          ></Card>
          <Card
            name="Victoria Amiri"
            role="Webbutvecklare"
            image={BrownSecond}
          ></Card>
          <Card
            name="Yrgo Göteborg"
            role="Lärdomsgatan"
            image={BlueSecond}
          ></Card>
        </div>
      </div>
    </div>
  );
}
