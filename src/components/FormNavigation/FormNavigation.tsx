import styles from "./FormNavigation.module.scss";
import { navItems } from "../../navData";

export const displayNavItemsHandler = () => {
  return (
    <ul>
      {navItems.map((item, i) => {
        return (
          <li key={item} className={`${styles.navItem}`}>
            <div className={`${styles.stepIndicator}`}>
              <p>{i + 1}</p>
            </div>
            <div className={styles.stepInfo}>
              <span className={styles.stepCount}>Step {i + 1}</span>
              <span className={styles.stepName}>{item}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default function FormNavigation() {
  return (
    <>
      <aside className={`${styles.desktopSidebar}`}>
        {displayNavItemsHandler()}
      </aside>
    </>
  );
}
