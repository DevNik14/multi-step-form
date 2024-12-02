import styles from "./FormNavigation.module.css";

export default function FormNavigation() {
  return (
    <aside className={`${styles.desktopSidebar} sidebar`}>
      <ol>
        <li>Your Info</li>
        <li>Select Plan</li>
        <li>Add-ons</li>
        <li>Summary</li>
      </ol>
    </aside>
  );
}
