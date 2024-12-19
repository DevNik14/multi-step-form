import { Route, Routes } from "react-router";

import Layout from "./Layout/Layout";
import SelectPlan from "./components/SelectPlan/SelectPlan";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import Addons from "./components/Addons/Addons";
import Summary from "./components/Summary/Summary";

import "./App.scss";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route element={<Layout />}>
          <Route path="personal-info" element={<PersonalInfo />} />
          <Route path="select-plan" element={<SelectPlan />} />
          <Route path="addons" element={<Addons />} />
          <Route path="summary" element={<Summary />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
