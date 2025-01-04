import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { MultiStepFormProvider } from "./contexts/MultiStepFormContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MultiStepFormProvider>
        <App />
      </MultiStepFormProvider>
    </BrowserRouter>
  </StrictMode>
);
