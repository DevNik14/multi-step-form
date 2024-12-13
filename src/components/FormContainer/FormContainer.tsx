import FormNavigation from "../FormNavigation/FormNavigation";
import Header from "../Header/Header";
import styles from "./FormContainer.module.scss";

export default function FormContainer() {
  return (
    <>
      <Header />
      <section className={`${styles.formContainer}`}>
        <FormNavigation />
        <div className={styles.formContent}>
          <header className={styles.formHeader}>
            <h1>Personal Info</h1>
            <p>Please provide your name, email address, and phone number.</p>
          </header>
          <form>
            <div>
              <div className={styles.inputHolder}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className={styles.inputHolder}>
                <label htmlFor="email">Email Address</label>
                <input type="text" id="email" name="email" />
              </div>
              <div className={styles.inputHolder}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="e.g. + 1 234 567 890"
                />
              </div>
            </div>
          </form>
          <div className={styles.formButtons}>
            <button className={styles.goBackBtn}>Go Back</button>
            <button className={styles.nextBtn}>Next Step</button>
          </div>
        </div>
      </section>
    </>
  );
}
