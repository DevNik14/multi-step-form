import { createContext, useContext, useState } from "react";

type FormChildren = [React.ReactNode, React.ReactNode, React.ReactNode];

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
};

type ContextType = {
  formValues: FormValues;
  onFieldChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  });

  const onFieldChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((oldValues) => {
      return {
        ...oldValues,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <MultiStepFormContext.Provider value={{ formValues, onFieldChangeHandler }}>
      {children}
    </MultiStepFormContext.Provider>
  );
}

export const useMultiStepForm = () => {
  return useContext(MultiStepFormContext);
};
