import FormHeader from "../FormHeader/FormHeader";
import { useMultiStepForm } from "../../contexts/MultiStepFormContext";
import { addons } from "../../navData";
import styles from "./Addons.module.scss";

export default function Addons() {
  const multiStepForm = useMultiStepForm();
  const period = multiStepForm?.formValues.period;
  const addSelectedClassToLabel = (serviceName: string) => {
    return multiStepForm?.formValues[serviceName as keyof typeof addons]
      ? `${styles.selected}`
      : "";
  };

  const displayAddonsHandler = () => {
    return Object.keys(addons).map((key) => {
      return (
        <div className={styles.serviceItem} key={key}>
          <label htmlFor={key} className={addSelectedClassToLabel(key)}>
            <input
              type="checkbox"
              name={key}
              checked={multiStepForm?.formValues[key as keyof typeof addons]}
              id={key}
              value={addons[key as keyof typeof addons][period]}
              onChange={multiStepForm?.selectPlanHandler}
            />
            <span></span>
            <div className={styles.serviceInfo}>
              <p className={styles.serviceTitle}>{key}</p>
              <p className={styles.serviceDescription}>
                {addons[key as keyof typeof addons].description}
              </p>
            </div>
            <div className={styles.servicePrice}>
              <p>
                +$
                {addons[key as keyof typeof addons][period]}
              </p>
            </div>
          </label>
        </div>
      );
    });
  };

  return (
    <>
      <FormHeader>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </FormHeader>
      <div className={styles.services}>{displayAddonsHandler()}</div>
    </>
  );
}
