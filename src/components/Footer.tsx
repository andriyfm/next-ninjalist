import { memo, ReactElement } from "react";
import styles from "./Footer.module.css";

function Footer(): ReactElement {
  return (
    <footer className={styles.footer}>
      <small>Copyright {new Date().getFullYear()}</small>
    </footer>
  );
}

export default memo(Footer);
