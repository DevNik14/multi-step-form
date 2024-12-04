import styles from "./FormNavigation.module.css";

export default function FormNavigation() {
  return (
    <aside className={`${styles.desktopSidebar} sidebar`}>
      <ul>
        <li>
          <p>1</p>
          <div>
            <span className="step-count">Step 1</span>
            <span>Your Info</span>
          </div>
        </li>
        <li>
          <p>2</p>
          <div>
            <span className="step-count">Step 2</span>
            <span>Select Plan</span>
          </div>
        </li>
        <li>
          <p>3</p>
          <div>
            <span className="step-count">Step 3</span>
            <span>Add-ons</span>
          </div>
        </li>
        <li>
          <p>4</p>
          <div>
            <span className="step-count">Step 4</span>
            <span>Summary</span>
          </div>
        </li>
      </ul>
    </aside>
  );
}
