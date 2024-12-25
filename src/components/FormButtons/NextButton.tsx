import { Link } from "react-router";

import { navItems } from "../../navData";

import styles from "./FormButtons.module.scss";

export default function NextButton() {
  const currentPagePath = window.location.pathname.split("/")[1];
  const currentPagePathIndex = navItems.findIndex(
    (navItem) => navItem.path === currentPagePath
  );
  const nextPath = navItems[currentPagePathIndex + 1]?.path;
  const displayNextStepLinkOrConfirmButton = nextPath ? (
    <Link to={nextPath} className={styles.nextBtn}>
      Next Step
    </Link>
  ) : (
    <button className={styles.nextBtn}>Confirm</button>
  );

  return <>{displayNextStepLinkOrConfirmButton}</>;
}
