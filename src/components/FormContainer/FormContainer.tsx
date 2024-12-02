import FormNavigation from "../FormNavigation/FormNavigation";
import styles from "./FormContainer.module.scss";

export default function FormContainer() {
  return (
    <>
      <section className={`${styles.formContainer}`}>
        <FormNavigation />
        <div className="formContent">
          <header>
            <h1>Personal Info</h1>
            <p>Please provide your name, email address, and phone number</p>
          </header>
          <form>
            <div>
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
              </div>
              <div>
                <label htmlFor="email">Email Address</label>
                <input type="text" id="email" name="email" />
              </div>
              <div>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="e.g. + 1 234 567 890"
                />
              </div>
              <button>Next Step</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
