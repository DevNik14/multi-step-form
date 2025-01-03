import { Link } from "react-router";

import { useMultiStepForm } from "../../contexts/MultiStepFormContext";
import { navItems } from "../../data";

import styles from "./FormButtons.module.scss";

export default function NextButton() {
  const multiStepForm = useMultiStepForm();

  const currentPagePath = window.location.pathname.split("/")[1];
  const currentPagePathIndex = navItems.findIndex(
    (navItem) => navItem.path === currentPagePath
  );
  const nextPath = navItems[currentPagePathIndex + 1]?.path;
  const displayButton = () => {
    if (currentPagePath === "personal-info") {
      return (
        <button
          className={styles.nextBtn}
          onClick={multiStepForm?.checkInputValueHandler}
        >
          Next Step
        </button>
      );
    } else if (nextPath) {
      return (
        <Link to={nextPath} className={styles.nextBtn}>
          Next Step
        </Link>
      );
    } else if (!nextPath) {
      return (
        <button
          className={styles.nextBtn}
          onClick={multiStepForm?.subscribeValueHandler}
        >
          Confirm
        </button>
      );
    }
  };

  return <>{displayButton()}</>;
}
