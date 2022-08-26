import Image from "next/image";

export default function Card({ name, role, information, image }) {
  return (
    <div className="cardContainer">
      <h3 className="name">{name}</h3>
      <p className="role">{role}</p>
      <p className="information">{information}</p>
      <Image src={image} className="img"></Image>
    </div>
  );
}
