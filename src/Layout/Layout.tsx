import Header from "../components/Header/Header";
import MobileButtons from "../components/FormButtons/MobileButtons";
import FormContainer from "../components/FormContainer/FormContainer";
import { MultiStepFormProvider } from "../contexts/MultiStepFormContext";

export default function Layout() {
  return (
    <>
      <MultiStepFormProvider>
        <Header />
        <FormContainer />
        <MobileButtons />
      </MultiStepFormProvider>
    </>
  );
}
