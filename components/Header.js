import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <div className="navContainer">
        <div className="left"></div>

        <div className="logoContainer">Theory of Källsortering</div>

        <div className="aboutContainer">
          <Link href="about">
            <a>Om oss</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
