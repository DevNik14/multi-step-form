import { Route, Routes } from "react-router";
import "./App.scss";
import FormContainer from "./components/FormContainer/FormContainer";
import Layout from "./Layout/Layout";
import SelectPlan from "./components/SelectPlan/SelectPlan";

function App() {
  return (
    <div className="container">
      <FormContainer />

      <Routes>
        <Route element={<Layout />}>
          <Route path="select-plan" element={<SelectPlan />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
