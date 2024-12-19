import FormNavigation from "../FormNavigation/FormNavigation";
import FormButtons from "../FormButtons/FormButtons";
import styles from "./FormContainer.module.scss";
import MobileButtons from "../FormButtons/MobileButtons";
import { Outlet } from "react-router";

export default function FormContainer() {
  return (
    <>
      <section className={`${styles.formContainer}`}>
        <FormNavigation />
        <div className={styles.formContent}>
          <header className={styles.formHeader}>
            <h1>Personal Info</h1>
            <p>Please provide your name, email address, and phone number.</p>
          </header>
          <form>
            <Outlet />
          </form>
          <FormButtons />
        </div>
      </section>
      <MobileButtons />
    </>
  );
}
