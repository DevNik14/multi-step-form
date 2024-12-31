import { useMultiStepForm } from "../../contexts/MultiStepFormContext";
import FormHeader from "../FormHeader/FormHeader";

import { z } from "zod";

import styles from "./PersonalInfo.module.scss";

export default function PersonalInfo() {
  const multiStepForm = useMultiStepForm();

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex =
    /^(\+\d{1,2}\s?)?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;

  const UserSchema = z.object({
    fullName: z
      .string()
      .min(2, { message: "Must be 5 or more characters long" }),
    email: z.string().refine((vallue) => emailRegex.test(vallue), {
      message: "Must enter a valid email address",
    }),
    phone: z
      .string()
      .refine((value) => value.length > 0 && phoneRegex.test(value), {
        message: "Must enter a valid phone number",
      }),
  });

  console.log(multiStepForm?.formValues);

  const checkInputValueHandler = () => {
    const inputElements = Array.from(
      document.querySelectorAll("input[type=text]")
    ) as HTMLInputElement[];

    try {
      const result = UserSchema.parse({
        fullName: inputElements[0].value,
        email: inputElements[1].value,
        phone: inputElements[2].value,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  checkInputValueHandler();

  return (
    <>
      <FormHeader>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </FormHeader>
      <div>
        <div className={styles.inputHolder}>
          <label htmlFor="fullName">Name</label>
          <span className={`${styles.errorText}`}>Test</span>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={multiStepForm?.formValues.fullName}
            onChange={multiStepForm?.onFieldChangeHandler}
          />
        </div>
        <div className={styles.inputHolder}>
          <label htmlFor="email">Email Address</label>
          <span className={styles.errorText}>Test</span>
          <input
            type="text"
            id="email"
            name="email"
            value={multiStepForm?.formValues.email}
            onChange={multiStepForm?.onFieldChangeHandler}
          />
        </div>
        <div className={styles.inputHolder}>
          <label htmlFor="phone">Phone Number</label>
          <span className={styles.errorText}>Test</span>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="e.g. + 1 234 567 890"
            value={multiStepForm?.formValues.phone}
            onChange={multiStepForm?.onFieldChangeHandler}
          />
        </div>
      </div>
    </>
  );
}
