import FormHeader from "../FormHeader/FormHeader";
import styles from "./PersonalInfo.module.scss";

export default function PersonalInfo() {
  return (
    <>
      <FormHeader>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </FormHeader>
      <div>
        <div className={styles.inputHolder}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className={styles.inputHolder}>
          <label htmlFor="email">Email Address</label>
          <input type="text" id="email" name="email" />
        </div>
        <div className={styles.inputHolder}>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="e.g. + 1 234 567 890"
          />
        </div>
      </div>
    </>
  );
}
