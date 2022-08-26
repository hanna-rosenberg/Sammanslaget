import Card from "../components/Card";
import Brown from "../public/frames/brown.svg";
import Pink from "../public/frames/pink.svg";
import Orange from "../public/frames/orange.svg";
import Blue from "../public/frames/blue.svg";
import BrownSecond from "../public/frames/brownSecond.svg";
import BlueSecond from "../public/frames/blueSecond.svg";
import Background from "../public/frames/background.svg";
import Image from "next/image";
import Header from "../components/Header";
import Yrgo from "../components/Yrgo.js";

export default function About() {
  return (
    <div>
      <Header></Header>
      <div className="aboutContainer">
        <div className="backgroundContainer">
          <Image src={Background} className="backgroundImg"></Image>
          <div className="introduction">
            <h2 className="greeting">HEJ!</h2>
            <p className="aboutText">
              Vi är fem glada studenter från Yrgo som tillsammans har skapat
              denna hemsida. Syftet är att öka kunskapen kring hur människor kan
              bidra till ett cirkulärt samhälle genom att skänka och källsortera
              saker som inte längre behövs, eller har förbrukats.
            </p>
          </div>
        </div>
        <div className="description">
          <Card
            name="Teodor Söderberg"
            role="UX-designer"
            information="Projektledning, grafisk design och användartestning"
            image={Brown}
          ></Card>
          <Card
            name="Neo Lejondahl"
            role="Webbutvecklare"
            information="Programmering, publicering samt optimering av hemsida"
            image={Pink}
          ></Card>
          <Card
            name="Hanna Rosenberg"
            role="Webbutvecklare"
            information="Programmering, publicering samt optimering av hemsida"
            image={Orange}
          ></Card>
          <Card
            name="Emma Finnilä"
            role="Game Artist"
            information="2D grafik, animation och speldesign"
            image={Blue}
          ></Card>
          <Card
            name="Victoria Amiri"
            role="Game Programmer"
            information="Spelprogrammering och implementering av grafik i Unity"
            image={BrownSecond}
          ></Card>
          <Yrgo
            name="Yrgo Göteborg"
            website="YRGO.SE"
            image={BlueSecond}
          ></Yrgo>
        </div>
      </div>
    </div>
  );
}
