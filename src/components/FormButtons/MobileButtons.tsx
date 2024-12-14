import styles from "./FormButtons.module.scss";
import GoBackButton from "./GoBackButton";
import NextButton from "./NextButton";

export default function MobileButtons() {
  return (
    <div className={`${styles.formButtons} ${styles.mobileButtons}`}>
      <GoBackButton />
      <NextButton />
    </div>
  );
}
