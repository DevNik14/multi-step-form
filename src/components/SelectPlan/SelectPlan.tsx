import { useEffect } from "react";
import FormHeader from "../FormHeader/FormHeader";
import styles from "./SelectPlan.module.scss";

export default function SelectPlan() {
  useEffect(() => {
    const section = document.querySelector("section");
    if (section) {
      section.style.transform = "translateY(-23.1%)";
    }

    return () => {
      if (section) {
        section.style.transform = "translateY(-31%)";
      }
    };
  }, []);

  return (
    <>
      <FormHeader>
        <h1>Select Your Plan</h1>
        <p>You have the option for monthly of yearly billing.</p>
      </FormHeader>
      <div className={styles.priceInfo}>
        <div className={`${styles.planItem} ${styles.selected}`}>
          <div className={styles.planIcon}>
            <img src="images/icon-arcade.svg" alt="arcade" />
          </div>
          <div className={styles.planPrice}>
            <p className={styles.planTitle}>Arcade</p>
            <p>$9/mo</p>
          </div>
        </div>
        <div className={styles.planItem}>
          <div className={styles.planIcon}>
            <img src="images/icon-advanced.svg" alt="advanced" />
          </div>
          <div className={styles.planPrice}>
            <p className={styles.planTitle}>Advanced</p>
            <p>$12/mo</p>
          </div>
        </div>
        <div className={styles.planItem}>
          <div className={styles.planIcon}>
            <img src="images/icon-pro.svg" alt="pro" />
          </div>
          <div className={styles.planPrice}>
            <p className={styles.planTitle}>Pro</p>
            <p>$15/mo</p>
          </div>
        </div>
      </div>
      <div className={styles.subscriptionType}>
        <div className={styles.monthly}>Monthly</div>
        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
        <div className={styles.yearly}>Yearly</div>
      </div>
    </>
  );
}
