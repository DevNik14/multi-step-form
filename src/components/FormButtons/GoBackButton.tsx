import { Link } from "react-router";

import { navItems } from "../../navData";

import styles from "./FormButtons.module.scss";

export default function GoBackButton() {
  const currentPagePath = window.location.pathname.split("/")[1];
  const currentPagePathIndex = navItems.findIndex(
    (navItem) => navItem.path === currentPagePath
  );
  const previousPath = navItems[currentPagePathIndex - 1]?.path;
  const displayBackButtonOrFillerEmptyDiv =
    currentPagePath === "personal-info" ? (
      <div></div>
    ) : (
      <Link to={previousPath} className={`${styles.goBackBtn}`}>
        Go Back
      </Link>
    );

  return <> {displayBackButtonOrFillerEmptyDiv} </>;
}
