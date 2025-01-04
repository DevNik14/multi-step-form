import { navItems } from "../../data";

import styles from "./DesktopNavigation.module.scss";

export const displayNavItemsHandler = () => {
  const currentPagePath = window.location.pathname.split("/")[1];
  const indexOfPagePath = [...navItems]
    .map((item) => item.path)
    .indexOf(currentPagePath);

  return (
    <ul>
      {navItems.map((item, i) => {
        return (
          <li key={item.name} className={`${styles.navItem}`}>
            <div
              className={`${styles.stepIndicator} ${
                indexOfPagePath === i ? styles.active : ""
              }`}
            >
              <p>{i + 1}</p>
            </div>
            <div className={styles.stepInfo}>
              <span className={styles.stepCount}>Step {i + 1}</span>
              <span className={styles.stepName}>{item.name}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default function DesktopNavigation() {
  return (
    <>
      <aside className={`${styles.desktopSidebar}`}>
        {displayNavItemsHandler()}
      </aside>
    </>
  );
}
