import styles from "./FormButtons.module.scss";
import GoBackButton from "./GoBackButton";
import NextButton from "./NextButton";

export default function FormButtons() {
  return (
    <div className={`${styles.formButtons} ${styles.desktopButtons}`}>
      <GoBackButton />
      <NextButton />
    </div>
  );
}
