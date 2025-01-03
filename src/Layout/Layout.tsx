import Header from "../components/Header/Header";
import MobileButtons from "../components/FormButtons/MobileButtons";
import FormContainer from "../components/FormContainer/FormContainer";
import {
  MultiStepFormProvider,
  useMultiStepForm,
} from "../contexts/MultiStepFormContext";

export default function Layout() {
  const multiStepForm = useMultiStepForm();
  return (
    <>
      <MultiStepFormProvider>
        <Header />
        <FormContainer />
        {!multiStepForm?.formValues.subscribed && <MobileButtons />}
      </MultiStepFormProvider>
    </>
  );
}
