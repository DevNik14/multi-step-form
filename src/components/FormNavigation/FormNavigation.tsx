import styles from "./FormNavigation.module.css";

export default function FormNavigation() {
  return (
    <aside className={`${styles.desktopSidebar} sidebar`}>
      <ul>
        <li className={`${styles.navItem}`}>
          <div className={styles.stepIndicator}>
            <p>1</p>
          </div>
          <div className={styles.stepInfo}>
            <span className={styles.stepCount}>Step 1</span>
            <span className={styles.stepName}>Your Info</span>
          </div>
        </li>
        <li className={`${styles.navItem}`}>
          <div className={styles.stepIndicator}>
            <p>2</p>
          </div>
          <div className={styles.stepInfo}>
            <span className={styles.stepCount}>Step 2</span>
            <span className={styles.stepName}>Select Plan</span>
          </div>
        </li>
        <li className={`${styles.navItem}`}>
          <div className={styles.stepIndicator}>
            <p>3</p>
          </div>
          <div className={styles.stepInfo}>
            <span className={styles.stepCount}>Step 3</span>
            <span className={styles.stepName}>Add-ons</span>
          </div>
        </li>
        <li className={`${styles.navItem}`}>
          <div className={styles.stepIndicator}>
            <p>4</p>
          </div>
          <div className={styles.stepInfo}>
            <span className={styles.stepCount}>Step 4</span>
            <span className={styles.stepName}>Summary</span>
          </div>
        </li>
      </ul>
    </aside>
  );
}
