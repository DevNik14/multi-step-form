import FormContainer from "../components/FormContainer/FormContainer";
import MobileButtons from "../components/FormButtons/MobileButtons";
import { useMultiStepForm } from "../contexts/MultiStepFormContext";
import MobileNavigation from "../components/MobileNavigation/MobileNavigation";

export default function Layout() {
  const multiStepForm = useMultiStepForm();
  return (
    <>
      <MobileNavigation />
      <FormContainer />
      {!multiStepForm?.formValues.subscribed && <MobileButtons />}
    </>
  );
}
