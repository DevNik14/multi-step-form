import { useNavigate } from "react-router";

import { navItems } from "../../data";

import styles from "./FormButtons.module.scss";

export default function GoBackButton() {
  const navigate = useNavigate();
  const currentPagePath = window.location.pathname.split("/")[1];
  const currentPagePathIndex = navItems.findIndex(
    (navItem) => navItem.path === currentPagePath
  );
  const previousPath = navItems[currentPagePathIndex - 1]?.path;
  const displayBackButtonOrFillerEmptyDiv =
    currentPagePath === "personal-info" ? (
      <div></div>
    ) : (
      <button
        className={`${styles.goBackBtn}`}
        onClick={() => navigate(previousPath)}
      >
        Go Back
      </button>
    );

  return <> {displayBackButtonOrFillerEmptyDiv} </>;
}
