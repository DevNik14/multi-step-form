import FormHeader from "../FormHeader/FormHeader";
import styles from "./SelectPlan.module.scss";

export default function SelectPlan() {
  return (
    <>
      <FormHeader>
        <h1>Select Your Plan</h1>
        <p>You have the option for monthly of yearly billing.</p>
      </FormHeader>
      <div className={styles.priceInfo}>
        <div className="planItem">
          <div className="planIcon">
            <img src="images/icon-arcade.svg" alt="arcade" />
          </div>
          <div className="planPrice">
            <p>Arcade</p>
            <p>$9/mo</p>
          </div>
          div
        </div>
        <div className="planItem">
          <div className="planIcon">
            <img src="images/icon-advanced.svg" alt="advanced" />
          </div>
          <div className="planPrice">
            <p>Advanced</p>
            <p>$12/mo</p>
          </div>
          div
        </div>
        <div className="planItem">
          <div className="planIcon">
            <img src="images/icon-pro.svg" alt="pro" />
          </div>
          <div className="planPrice">
            <p>Pro</p>
            <p>$15/mo</p>
          </div>
        </div>
      </div>
      <div className="subscriptionType">
        <div className="monthly">Monthly</div>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <div className="yearly">Yearly</div>
      </div>
    </>
  );
}
