import navConfig from "configs/navConfig";
import Link from "next/link";
import { memo, ReactElement } from "react";
import styles from "./Navbar.module.css";

function Navbar(): ReactElement {
  return (
    <nav className={styles.navList}>
      {navConfig.map((item) => (
        <Link key={item.name} href={item.path}>
          <a className={styles.navItem}>{item.name}</a>
        </Link>
      ))}
    </nav>
  );
}

export default memo(Navbar);
