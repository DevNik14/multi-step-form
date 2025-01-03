import { NavLink } from "react-router";

import styles from "./FormNavigation.module.scss";
import { navItems } from "../../data";
import { useEffect } from "react";
import { useMultiStepForm } from "../../contexts/MultiStepFormContext";

export const displayNavItemsHandler = () => {
  const multiStepForm = useMultiStepForm();

  useEffect(() => {
    if (multiStepForm?.formValues.subscribed) {
      document.querySelectorAll("a").forEach((link) =>
        link.addEventListener("click", (e) => {
          e.preventDefault();
        })
      );
    }
  }, [multiStepForm?.formValues.subscribed]);

  return (
    <ul>
      {navItems.map((item, i) => {
        return (
          <NavLink
            to={item.path}
            key={item.name}
            className={({ isActive }) => (isActive ? `${styles.active}` : "")}
          >
            <li className={`${styles.navItem}`}>
              <div className={`${styles.stepIndicator}`}>
                <p>{i + 1}</p>
              </div>
              <div className={styles.stepInfo}>
                <span className={styles.stepCount}>Step {i + 1}</span>
                <span className={styles.stepName}>{item.name}</span>
              </div>
            </li>
          </NavLink>
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
