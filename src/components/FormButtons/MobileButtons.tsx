import GoBackButton from "./GoBackButton";
import NextButton from "./NextButton";

import styles from "./FormButtons.module.scss";

export default function MobileButtons() {
  return (
    <div className={`${styles.formButtons} ${styles.mobileButtons}`}>
      <GoBackButton />
      <NextButton />
    </div>
  );
}
