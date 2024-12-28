import { createContext, useContext, useState } from "react";

type FormChildren = [React.ReactNode, React.ReactNode, React.ReactNode];

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  subPlan: boolean;
  period: string;
};

type ContextType = {
  formValues: FormValues;
  onFieldChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheckedHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const MultiStepFormContext = createContext<null | ContextType>(null);

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
      };
    });
  };

  return (
    <MultiStepFormContext.Provider
      value={{ formValues, onFieldChangeHandler, onCheckedHandler }}
    >
      {children}
    </MultiStepFormContext.Provider>
  );
}

export const useMultiStepForm = () => {
  return useContext(MultiStepFormContext);
};
