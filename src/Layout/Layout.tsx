import FormContainer from "../components/FormContainer/FormContainer";
import MobileButtons from "../components/FormButtons/MobileButtons";
import { useMultiStepForm } from "../contexts/MultiStepFormContext";
import MobileHeader from "../components/Header/MobileHeader";

export default function Layout() {
  const multiStepForm = useMultiStepForm();
  return (
    <>
      <MobileHeader />
      <FormContainer />
      {!multiStepForm?.formValues.subscribed && <MobileButtons />}
    </>
  );
}
