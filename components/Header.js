import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <div className="navContainer">
        <div className="left"></div>
        <div className="logoContainer">
          <img src="Logo.png"></img>
          <h1>Theory of Källsortering</h1>
        </div>
        <div className="aboutContainer">
          <Link href="about">
            <a>Om oss</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
