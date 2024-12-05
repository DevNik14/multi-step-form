import styles from "./FormNavigation.module.css";

export default function FormNavigation() {
  return (
    <aside className={`${styles.desktopSidebar} sidebar`}>
      <ul>
        <li className={`${styles.navItem}`}>
          <div className="step-info">
            <span className={styles.stepCount}>Step 1</span>
            <span className="step-name">Your Info</span>
          </div>
        </li>
        <li className={`${styles.navItem}`}>
          <div className="step-info">
            <span className={styles.stepCount}>Step 2</span>
            <span className="step-name">Select Plan</span>
          </div>
        </li>
        <li className={`${styles.navItem}`}>
          <div className="step-info">
            <span className={styles.stepCount}>Step 3</span>
            <span className="step-name">Add-ons</span>
          </div>
        </li>
        <li className={`${styles.navItem}`}>
          <div className="step-info">
            <span className={styles.stepCount}>Step 4</span>
            <span className="step-name">Summary</span>
          </div>
        </li>
      </ul>
    </aside>
  );
}
