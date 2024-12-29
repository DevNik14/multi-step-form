import { useEffect } from "react";
import FormHeader from "../FormHeader/FormHeader";
import { useMultiStepForm } from "../../contexts/MultiStepFormContext";
import styles from "./SelectPlan.module.scss";

export default function SelectPlan() {
  const multiStepForm = useMultiStepForm();
  const planType = multiStepForm?.formValues.planType;
  const selectedPlan = multiStepForm?.formValues.planName;
  const isPlanSelected = (planName: string) => {
    return selectedPlan === planName ? `${styles.selected}` : "";
  };
  const formattedPeriod =
    multiStepForm?.formValues.period === "monthly" ? "mo" : "yr";

  const displayPlanTypesValuesHandler = () => {
    if (planType) {
      return Object.keys(planType).map((plan: string) => {
        return (
          <label
            key={plan}
            className={`${styles.planItem} ${isPlanSelected(plan)}`}
            htmlFor={`${plan}`}
          >
            <input
              type="radio"
              name="planName"
              id={`${plan}`}
              value={plan}
              onChange={multiStepForm?.onFieldChangeHandler}
            />
            <div className={styles.planIcon}>
              <img src={`images/icon-${plan}.\svg`} alt={`${plan}`} />
            </div>
            <div className={styles.planPriceInfo}>
              <p className={styles.planTitle}>{plan}</p>
              <p className={styles.planPrice}>
                ${planType[plan as keyof typeof planType]}/{formattedPeriod}
              </p>
              {multiStepForm.formValues.period === "yearly" && (
                <p className={styles.freeMonths}>2 months free</p>
              )}
            </div>
          </label>
        );
      });
    }
  };

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
      <div className={styles.planContainer}>
        {displayPlanTypesValuesHandler()}
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
