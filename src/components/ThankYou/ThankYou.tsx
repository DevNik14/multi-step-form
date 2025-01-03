import styles from "./ThankYou.module.scss";

export default function ThankYou() {
  return (
    <div className={`${styles.thankYouContainer}`}>
      <img src="/public/images/icon-thank-you.svg" alt="thank you" />
      <h1 className={styles.thankYouTitle}>Thank you!</h1>
      <p className={styles.thankYouMessage}>
        {" "}
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
