import { useEffect } from "react";
import FormHeader from "../FormHeader/FormHeader";
import { useMultiStepForm } from "../../contexts/MultiStepFormContext";
import styles from "./SelectPlan.module.scss";

export default function SelectPlan() {
  const multiStepForm = useMultiStepForm();
  console.log(multiStepForm?.formValues);

  useEffect(() => {
    if (window.innerWidth <= 992) {
      const section = document.querySelector("section");
      if (section) {
        section.style.transform = "translateY(-23%)";
      }

      return () => {
        if (section) {
          section.style.transform = "translateY(-30.1%)";
        }
      };
    }
  }, [window.innerWidth]);

  return (
    <>
      <FormHeader>
        <h1>Select Your Plan</h1>
        <p>You have the option for monthly of yearly billing.</p>
      </FormHeader>
      <div className={styles.priceInfo}>
        <label
          className={`${styles.planItem} ${styles.selected}`}
          htmlFor="arcade"
        >
          <input type="radio" name="planName" id="arcade" />
          <div className={styles.planIcon}>
            <img src="images/icon-arcade.svg" alt="arcade" />
          </div>
          <div className={styles.planPrice}>
            <p className={styles.planTitle}>Arcade</p>
            <p>$9/mo</p>
          </div>
        </label>
        <label className={styles.planItem} htmlFor="advanced">
          <input type="radio" name="planName" id="advanced" />
          <div className={styles.planIcon}>
            <img src="images/icon-advanced.svg" alt="advanced" />
          </div>
          <div className={styles.planPrice}>
            <p className={styles.planTitle}>Advanced</p>
            <p>$12/mo</p>
          </div>
        </label>
        <label className={styles.planItem} htmlFor="pro">
          <input type="radio" name="planName" id="pro" />
          <div className={styles.planIcon}>
            <img src="images/icon-pro.svg" alt="pro" />
          </div>
          <div className={styles.planPrice}>
            <p className={styles.planTitle}>Pro</p>
            <p>$15/mo</p>
          </div>
        </label>
      </div>
      <div className={styles.subscriptionType}>
        <div className={styles.monthly}>Monthly</div>
        <label className={styles.switch}>
          <input
            type="checkbox"
            name="subPlan"
            checked={multiStepForm?.formValues.subPlan}
            onChange={multiStepForm?.onCheckedHandler}
          />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
        <div className={styles.yearly}>Yearly</div>
      </div>
    </>
  );
}
