import { navItems } from "../../navData";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.mobileHeader}>
      <ul>
        {navItems.map((item, i) => {
          return <li key={item}>{i + 1}</li>;
        })}
      </ul>
    </header>
  );
}
