import styles from "./FormNavigation.module.css";

export default function FormNavigation() {
  return (
    <aside className={`${styles.desktopSidebar} sidebar`}>
      <ul>
        <li>
          <span>Step 1</span>Your Info
        </li>
        <li>
          <span>Step 2</span>Select Plan
        </li>
        <li>
          <span>Step 3</span>Add-ons
        </li>
        <li>
          <span>Step 4</span>Summary
        </li>
      </ul>
    </aside>
  );
}
