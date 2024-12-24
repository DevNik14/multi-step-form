import FormHeader from "../FormHeader/FormHeader";
import styles from "./Addons.module.scss";

export default function Addons() {
  return (
    <>
      <FormHeader>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </FormHeader>
      <div className={styles.services}>
        <div className={styles.serviceItem}>
          <label htmlFor="online" className={styles.selected}>
            <input type="checkbox" name="online" id="online" />
            <span></span>
            <div className={styles.serviceInfo}>
              <p className={styles.serviceTitle}>Online Service</p>
              <p className={styles.serviceDescription}>
                Access to multiplayer games
              </p>
            </div>
            <div className={styles.servicePrice}>
              <p>+$1/mo</p>
            </div>
          </label>
        </div>
        <div className={styles.serviceItem}>
          <label htmlFor="larger-storage">
            <input type="checkbox" name="larger-storage" id="larger-storage" />
            <span></span>
            <div className={styles.serviceInfo}>
              <p className={styles.serviceTitle}>Larger Storage</p>
              <p className={styles.serviceDescription}>
                Extra 1TB of cloud save
              </p>
            </div>
            <div className={styles.servicePrice}>
              <p>+$2/mo</p>
            </div>
          </label>
        </div>
        <div className={styles.serviceItem}>
          <label htmlFor="customizable-profile">
            <input
              type="checkbox"
              name="customizable-profile"
              id="customizable-profile"
            />
            <span></span>
            <div className={styles.serviceInfo}>
              <p className={styles.serviceTitle}>Customizable Profile</p>
              <p className={styles.serviceDescription}>
                Custom theme on your profile
              </p>
            </div>
            <div className={styles.servicePrice}>
              <p>+$2/mo</p>
            </div>
          </label>
        </div>
      </div>
    </>
  );
}
