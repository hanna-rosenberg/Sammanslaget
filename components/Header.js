import Link from "next/link";
import { useRouter } from "next/router";

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
      <h1>Theory of Källsortering</h1>
      <Button />
    </nav>
  );
}
