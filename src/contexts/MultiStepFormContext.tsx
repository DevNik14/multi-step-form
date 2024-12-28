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
};

type ContextType = {
  formValues: FormValues;
  onFieldChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheckedHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
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

  return (
    <MultiStepFormContext.Provider
      value={{
        formValues,
        onFieldChangeHandler,
        onCheckedHandler,
      }}
    >
      {children}
    </MultiStepFormContext.Provider>
  );
}

export const useMultiStepForm = () => {
  return useContext(MultiStepFormContext);
};
