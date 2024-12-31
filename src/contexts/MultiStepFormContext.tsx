import { createContext, useContext, useState } from "react";
import { z } from "zod";

type FormChildren = [React.ReactNode, React.ReactNode, React.ReactNode];

type FormValues = {
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
  personalInfoError: boolean;
};

type ContextType = {
  formValues: FormValues;
  onFieldChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheckedHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectPlanHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
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

export function MultiStepFormProvider({
  children,
}: {
  children: FormChildren;
}) {
  const [formValues, setFormValues] = useState({
    personalInfoError: true,
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

  const emptyTestValues = Object.entries(formValues)
    .slice(1, 4)
    .reduce((user, [key, value]) => {
      return { ...user, [key]: value };
    }, {});

  return (
    <MultiStepFormContext.Provider
      value={{
        formValues,
        onFieldChangeHandler,
        onCheckedHandler,
        selectPlanHandler,
      }}
    >
      {children}
    </MultiStepFormContext.Provider>
  );
}

export const useMultiStepForm = () => {
  return useContext(MultiStepFormContext);
};
