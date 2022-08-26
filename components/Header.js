import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import recycleIcon from "../public/icons/recycleIcon.svg";

function Button() {
  const { asPath } = useRouter();
  if (asPath == "/about") {
    return (
      <Link href="/">
        <a>Spelet</a>
      </Link>
    );
  }
  return (
    <Link href="/about">
      <a>Om oss</a>
    </Link>
  );
}

export default function Header() {
  const { asPath } = useRouter();

  return (
    <nav>
      <img src="Logo.png"></img>
      <Link href="/">
        <a className="homeLink">Theory of Källsortering</a>
      </Link>
      <div>
        <Image src={recycleIcon} className="recycleIcon"></Image>
        <Button />
      </div>
    </nav>
  );
}
