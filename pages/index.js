import Header from "../components/Header";
import Background from "../public/frames/background.svg";
import Image from "next/image";
import Yrgo from "../components/Yrgo.js";
import Recycle from "../components/Recycle";
import Clothing from "../public/icons/clothing.svg";
import Compost from "../public/icons/compost.svg";
import Glass from "../public/icons/glass.svg";
import Metal from "../public/icons/metal.svg";
import Paper from "../public/icons/paper.svg";
import Plastic from "../public/icons/plastic.svg";
import Link from "next/link";

export default function Index() {
  return (
    <div>
      <Header></Header>
      <div className="aboutContainer">
        <div className="backgroundContainer">
          <Image src={Background} className="backgroundImg"></Image>
          <div className="introduction">
            <p className="aboutText">
              Är du en hejare på att återvinna, eller känner du dig osäker på
              vad du ska göra med gamla förpackningar eller kläder du inte
              längre använder?
            </p>

            <p className="aboutText">
              I detta spel både utmanas och slipas dina återvinningskunskaper så
              att du kan bli en sann miljöhjälte.
            </p>
          </div>
        </div>
        <h2 className="howToPlay">Hur du sorterar framgångsrikt</h2>
        <div className="description">
          <Recycle
            itemName="Klädboxen"
            firstItem={"Kläder"}
            secondItem={"Skor"}
            thirdItem={"Textilier"}
            icon={Clothing}
          ></Recycle>

          <Recycle
            itemName="Metall"
            firstItem={"Konserver"}
            secondItem={"Aliminiumfolie"}
            thirdItem={"Lock av metall"}
            icon={Metal}
          ></Recycle>

          <Recycle
            itemName="Plast"
            firstItem={"Plastpåsar"}
            secondItem={"Plastlock"}
            thirdItem={"Plastlådor"}
            icon={Plastic}
          ></Recycle>

          <Recycle
            itemName="Kompost"
            firstItem={"Äppelskruttar"}
            secondItem={"Bananskal"}
            thirdItem={"Snittblommor"}
            icon={Compost}
          ></Recycle>

          <Recycle
            itemName="Glas"
            firstItem={"Vinflaskor"}
            secondItem={"Glasburkar"}
            icon={Glass}
          ></Recycle>

          <Recycle
            itemName="Papp"
            firstItem={"Mjölkpaket"}
            secondItem={"Karton"}
            thirdItem={"Pappåsar"}
            icon={Paper}
          ></Recycle>
        </div>
        <Link href="/spel">
          <a className="playButton">Till spelet</a>
        </Link>
      </div>
    </div>
  );
}
