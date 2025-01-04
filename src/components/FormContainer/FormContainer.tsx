import { Outlet } from "react-router";

import { useMultiStepForm } from "../../contexts/MultiStepFormContext";

import DesktopNavigation from "../DesktopNavigation/DesktopNavigation";
import FormButtons from "../FormButtons/FormButtons";

import styles from "./FormContainer.module.scss";

export default function FormContainer() {
  const multiStepForm = useMultiStepForm();
  const addFormContentFlexClass = () => {
    return multiStepForm?.formValues.subscribed ? `${styles.flex}` : "";
  };

  return (
    <>
      <section className={styles.formContainer}>
        <DesktopNavigation />
        <div className={`${styles.formContent} ${addFormContentFlexClass()}`}>
          <form>
            <Outlet />
          </form>
          {!multiStepForm?.formValues.subscribed && <FormButtons />}
        </div>
      </section>
    </>
  );
}
