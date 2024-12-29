import { createContext, useContext, useState } from "react";

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
