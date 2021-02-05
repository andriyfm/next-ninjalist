import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <img src="" alt="" />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
      <Link href="/ninjas">
        <a>ninjas</a>
      </Link>
    </nav>
  );
}
