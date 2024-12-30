import FormHeader from "../FormHeader/FormHeader";
import { useMultiStepForm } from "../../contexts/MultiStepFormContext";
import { addons } from "../../data";
import styles from "./Summary.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Summary() {
  const [total, setTotal] = useState(0);
  const multiStepForm = useMultiStepForm();
  const period = multiStepForm?.formValues.period;
  const planName = multiStepForm?.formValues.planName;
  const formattedPeriod =
    multiStepForm?.formValues.period === "monthly" ? "mo" : "yr";

  const planNameAsKey = (
    key: string | undefined
  ): "arcade" | "advanced" | "pro" => {
    if (key === "advanced" || key === "pro") {
      return key;
    }
    return "arcade";
  };

  const periodAsKey = (key: string | undefined): "monthly" | "yearly" => {
    if (key === "yearly") {
      return key;
    }
    return "monthly";
  };

  useEffect(() => {
    const servicesPrices =
      getSelectedServices().length > 0
        ? getSelectedServices().reduce((totalPrice, servicePrice) => {
            return totalPrice + Number(servicePrice[1]);
          }, 0)
        : 0;
    const planPrice =
      multiStepForm?.formValues.planType[planNameAsKey(planName)];
    if (planPrice) {
      setTotal(planPrice + servicesPrices);
    } else {
      setTotal(9 + servicesPrices);
    }
  }, []);

  const getSelectedServices = () => {
    return Object.entries(multiStepForm?.formValues || {})
      .slice(-3)
      .filter((item) => item[1] !== false)
      .map((item) => [
        item[0],
        addons[item[0] as keyof typeof addons][periodAsKey(period)],
      ]);
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
            <Link to="/select-plan">
              <p className={styles.changeSummaryPlan}>Change</p>
            </Link>
          </div>
          <p className={styles.planSummaryTitle}>
            $/{multiStepForm?.formValues.planType[planNameAsKey(planName)]}
            {formattedPeriod}
          </p>
        </div>
        <div className={styles.horizontalLine}></div>
        <div className={styles.servicesSummary}>
          {displaySelectedServices()}
        </div>
      </div>
      <div className={styles.summaryTotalPriceInfo}>
        <p className={styles.summaryTotal}>
          Total (per {period?.slice().replace("ly", "")})
        </p>
        <p className={styles.summaryPrice}>+{total}$/mo</p>
      </div>
    </>
  );
}
