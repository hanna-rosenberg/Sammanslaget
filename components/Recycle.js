import Image from "next/image";

export default function Recycle({
  icon,
  itemName,
  firstItem,
  secondItem,
  thirdItem,
}) {
  return (
    <div className="recycle">
      <div>
        <Image src={icon}></Image>
        <h3>{itemName}</h3>
      </div>
      <ul>
        <li>{firstItem}</li>
        <li>{secondItem}</li>
        <li>{thirdItem}</li>
      </ul>
    </div>
  );
}
