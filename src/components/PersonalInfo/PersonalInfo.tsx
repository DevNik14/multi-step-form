import { useMultiStepForm } from "../../contexts/MultiStepFormContext";
import FormHeader from "../FormHeader/FormHeader";

import styles from "./PersonalInfo.module.scss";

export default function PersonalInfo() {
  const multiStepForm = useMultiStepForm();

  return (
    <>
      <FormHeader>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </FormHeader>
      <div>
        <div className={styles.inputHolder}>
          <label htmlFor="fullName">Name</label>
          <span className={`${styles.errorText}`}>Test</span>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={multiStepForm?.formValues.fullName}
            onChange={multiStepForm?.onFieldChangeHandler}
          />
        </div>
        <div className={styles.inputHolder}>
          <label htmlFor="email">Email Address</label>
          <span className={styles.errorText}>Test</span>
          <input
            type="text"
            id="email"
            name="email"
            value={multiStepForm?.formValues.email}
            onChange={multiStepForm?.onFieldChangeHandler}
          />
        </div>
        <div className={styles.inputHolder}>
          <label htmlFor="phone">Phone Number</label>
          <span className={styles.errorText}>Test</span>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="e.g. + 1 234 567 890"
            value={multiStepForm?.formValues.phone}
            onChange={multiStepForm?.onFieldChangeHandler}
          />
        </div>
      </div>
    </>
  );
}
