import FormHeader from "../FormHeader/FormHeader";
import { useMultiStepForm } from "../../contexts/MultiStepFormContext";
import { addons } from "../../data";
import styles from "./Summary.module.scss";

export default function Summary() {
  const multiStepForm = useMultiStepForm();
  const period = multiStepForm?.formValues.period;
  const planName = multiStepForm?.formValues.planName;
  const formattedPeriod =
    multiStepForm?.formValues.period === "monthly" ? "mo" : "yr";

  const periodAsKey = (key: string | undefined): "monthly" | "yearly" => {
    if (key === "yearly") {
      return key;
    }
    return "monthly";
  };

  const getSelectedServices = () => {
    return Object.entries(multiStepForm?.formValues)
      .slice(-3)
      .filter((item) => item[1] !== false)
      .map((item) => [item[0], addons[item[0]][period]]);
  };

  const displaySelectedServices = () => {
    return getSelectedServices().map((service) => {
      return (
        <div className={styles.serviceSummaryItem} key={service[0]}>
          <p className={styles.serviceSummaryTitle}>{service[0]}</p>
          <p className={styles.serviceSummaryPrice}>
            +{service[1]}$/{formattedPeriod}
          </p>
        </div>
      );
    });
  };

  return (
    <>
      <FormHeader>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </FormHeader>
      <div className={styles.summaryInfo}>
        <div className={styles.planSummary}>
          <div className={styles.planSummaryItem}>
            <p className={styles.planSummaryTitle}>
              {multiStepForm?.formValues.planName} (
              {multiStepForm?.formValues.period})
            </p>
            <p className={styles.changeSummaryPlan}>Change</p>
          </div>
          <p className={styles.planSummaryTitle}>
            $/{multiStepForm?.formValues.planType[planName]}
            {formattedPeriod}
          </p>
        </div>
        <div className={styles.horizontalLine}></div>
        <div className={styles.servicesSummary}>
          {displaySelectedServices()}
        </div>
      </div>
      <div className={styles.summaryTotalPriceInfo}>
        <p className={styles.summaryTotal}>Total (per month)</p>
        <p className={styles.summaryPrice}>+12$/mo</p>
      </div>
    </>
  );
}
