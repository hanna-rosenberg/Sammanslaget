import Image from "next/image";
import Link from "next/link";

export default function Yrgo({ name, website, image }) {
  return (
    <div className="cardContainer">
      <h3 className="name">{name}</h3>
      <a href="https://www.yrgo.se/" className="role">
        {website}
      </a>
      <Image src={image} className="img"></Image>
    </div>
  );
}
