import Header from "../components/Header/Header";
import FormContainer from "../components/FormContainer/FormContainer";
import { MultiStepFormProvider } from "../contexts/MultiStepFormContext";

export default function Layout() {
  return (
    <>
      <MultiStepFormProvider>
        <Header />
        <FormContainer />
      </MultiStepFormProvider>
    </>
  );
}
