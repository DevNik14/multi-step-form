import { useEffect } from "react";

import { useNavigate } from "react-router";

import { useMultiStepForm } from "../contexts/MultiStepFormContext";
import FormContainer from "../components/FormContainer/FormContainer";
import MobileButtons from "../components/FormButtons/MobileButtons";
import MobileNavigation from "../components/MobileNavigation/MobileNavigation";

export default function Layout() {
  const multiStepForm = useMultiStepForm();
  const navigate = useNavigate();

  useEffect(() => {
    const currentPagePath = window.location.pathname.split("/")[1];
    if (
      currentPagePath !== "personal-info" &&
      multiStepForm?.formValues.personalInfoError
    ) {
      navigate("/personal-info");
    }
  }, [window.location]);

  return (
    <>
      <MobileNavigation />
      <FormContainer />
      {!multiStepForm?.formValues.subscribed && <MobileButtons />}
    </>
  );
}
