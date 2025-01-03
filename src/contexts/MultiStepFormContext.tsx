import { createContext, useContext, useState } from "react";
import { z, ZodError } from "zod";

import styles from "../components/PersonalInfo/PersonalInfo.module.scss";
import { useNavigate } from "react-router";

type FormChildren = [React.ReactNode, React.ReactNode, React.ReactNode];

type FormValues = {
  personalInfoError: boolean;
  showErrorMessage: boolean;
  fullName: string;
  email: string;
  phone: string;
  subPlan: boolean;
  period: string;
  planType: { arcade: number; advanced: number; pro: number };
  planName: string;
  addons?: Array<{ addonName: string; addonPrice: number }>;
  "online service": boolean;
  "larger storage": boolean;
  "customizable profile": boolean;
  subscribed: boolean;
};

type ContextType = {
  formValues: FormValues;
  onFieldChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheckedHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectPlanHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checkInputValueHandler: () => void;
  subscribeValueHandler: () => void;
};

const MultiStepFormContext = createContext<null | ContextType>(null);

const planType = {
  monthly: {
    arcade: 9,
    advanced: 12,
    pro: 15,
  },
  yearly: {
    arcade: 90,
    advanced: 120,
    pro: 150,
  },
};

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^(\+\d{1,2}\s?)?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;

export function MultiStepFormProvider({
  children,
}: {
  children: FormChildren;
}) {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    subscribed: false,
    personalInfoError: true,
    showErrorMessage: false,
    fullName: "",
    email: "",
    phone: "",
    subPlan: false,
    period: "monthly",
    planType: planType["monthly"],
    planName: "arcade",
    "online service": false,
    "larger storage": false,
    "customizable profile": false,
  });

  const onFieldChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((oldValues) => {
      return {
        ...oldValues,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onCheckedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const period = !e.target.checked ? "monthly" : "yearly";
    setFormValues((oldValues) => {
      return {
        ...oldValues,
        [e.target.name]: e.target.checked,
        period,
        planType: planType[period],
      };
    });
  };

  const selectPlanHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((oldValues) => {
      return {
        ...oldValues,
        [e.target.name]: e.target.checked,
      };
    });
  };

  const subscribeValueHandler = () => {
    setFormValues((oldValues) => {
      return {
        ...oldValues,
        subscribed: true,
      };
    });
  };

  const UserSchema = z.object({
    fullName: z
      .string()
      .min(2, { message: "Must be 2 or more characters long" }),
    email: z.string().refine((vallue) => emailRegex.test(vallue), {
      message: "Must enter a valid email address",
    }),
    phone: z
      .string()
      .refine((value) => value.length > 0 && phoneRegex.test(value), {
        message: "Must enter a valid phone number",
      }),
  });

  const userInputTestValues = Object.entries(formValues)
    .slice(3, 6)
    .reduce((user, [key, value]) => {
      return { ...user, [key]: value };
    }, {});

  const checkInputValueHandler = () => {
    const inputElements = Array.from(
      document.querySelectorAll("input[type=text]")
    ) as HTMLInputElement[];

    try {
      UserSchema.parse(userInputTestValues);
      setFormValues((oldValues) => {
        return {
          ...oldValues,
          personalInfoError: false,
        };
      });
      navigate("/select-plan");
    } catch (error) {
      const err = error as ZodError;

      const errorFields = err.flatten().fieldErrors;

      if (Object.keys(errorFields).length > 0) {
        const errorFieldsKeys = Object.keys(errorFields);
        [...errorFieldsKeys].map((field) =>
          inputElements.map(
            (el) =>
              el.name === field &&
              addShowClassToErrorSpanHandler(el, errorFields[field]?.[0] ?? "")
          )
        );
        clearNotNeededShowClassNamesHandler(errorFieldsKeys, inputElements);
      }

      setFormValues((oldValues) => {
        return {
          ...oldValues,
          personalInfoError: true,
        };
      });
    }
  };

  const addShowClassToErrorSpanHandler = (el: HTMLElement, message: string) => {
    const span = el.parentNode?.querySelector("span");
    if (span) {
      span.classList.add(`${styles.show}`);
      span.textContent = message;
    }
  };

  const clearNotNeededShowClassNamesHandler = (
    inputName: string[],
    inputElements: HTMLInputElement[]
  ) => {
    inputElements
      .filter((el) => !inputName.includes(el.name))
      .forEach((el) => {
        const span = el.parentNode?.querySelector("span");
        span?.classList.remove(`${styles.show}`);
      });
  };

  return (
    <MultiStepFormContext.Provider
      value={{
        formValues,
        onFieldChangeHandler,
        onCheckedHandler,
        selectPlanHandler,
        checkInputValueHandler,
        subscribeValueHandler,
      }}
    >
      {children}
    </MultiStepFormContext.Provider>
  );
}

export const useMultiStepForm = () => {
  return useContext(MultiStepFormContext);
};
