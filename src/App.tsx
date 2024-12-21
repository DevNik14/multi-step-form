import { Route, Routes, useNavigate } from "react-router";

import Layout from "./Layout/Layout";
import SelectPlan from "./components/SelectPlan/SelectPlan";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import Addons from "./components/Addons/Addons";
import Summary from "./components/Summary/Summary";

import "./App.scss";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/personal-info");
    }
  }, [window.location]);

  return (
    <div className="container">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PersonalInfo />} />
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
