import FormHeader from "../FormHeader/FormHeader";
import styles from "./Summary.module.scss";

export default function Summary() {
  return (
    <>
      <FormHeader>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </FormHeader>
      <div className={styles.summaryInfo}>
        <div className={styles.planSummary}>
          <div className={styles.planSummaryItem}>
            <p className={styles.planSummaryTitle}>Arcade (Monthly)</p>
            <p className={styles.changeSummaryPlan}>Change</p>
          </div>
          <p className={styles.planSummaryTitle}>$9/mo</p>
        </div>
        <div className={styles.horizontalLine}></div>
        <div className={styles.servicesSummary}>
          <div className={styles.serviceSummaryItem}>
            <p className={styles.serviceSummaryTitle}>Online service</p>
            <p className={styles.serviceSummaryPrice}>+1$/mo</p>
          </div>
          <div className={styles.serviceSummaryItem}>
            <p className={styles.serviceSummaryTitle}>Larger sotrage</p>
            <p className={styles.serviceSummaryPrice}>+2$/mo</p>
          </div>
        </div>
      </div>
      <div className={styles.summaryTotalPriceInfo}>
        <p className={styles.summaryTotal}>Total (per month)</p>
        <p className={styles.summaryPrice}>+12$/mo</p>
      </div>
    </>
  );
}
