import { navItems } from "../../data";
import styles from "./header.module.scss";

export default function MobileHeader() {
  const currentPagePath = window.location.pathname.split("/")[1];
  const indexOfPagePath = [...navItems]
    .map((item) => item.path)
    .indexOf(currentPagePath);

  return (
    <header className={styles.mobileHeader}>
      <ul>
        {navItems.map((item, i) => {
          return (
            <li
              key={item.name}
              className={`${indexOfPagePath === i ? styles.active : ""}`}
            >
              {i + 1}
            </li>
          );
        })}
      </ul>
    </header>
  );
}
