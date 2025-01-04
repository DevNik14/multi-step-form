import Header from "../components/Header/Header";
import FormContainer from "../components/FormContainer/FormContainer";
import MobileButtons from "../components/FormButtons/MobileButtons";
import {
  MultiStepFormProvider,
  useMultiStepForm,
} from "../contexts/MultiStepFormContext";

export default function Layout() {
  const multiStepForm = useMultiStepForm();
  return (
    <>
      <Header />
      <FormContainer />
      {!multiStepForm?.formValues.subscribed && <MobileButtons />}
    </>
  );
}
