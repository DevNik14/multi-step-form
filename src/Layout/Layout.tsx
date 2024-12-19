import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import MobileButtons from "../components/FormButtons/MobileButtons";
import FormContainer from "../components/FormContainer/FormContainer";

export default function Layout() {
  return (
    <>
      <Header />
      <section>
        <FormContainer />
      </section>
      <MobileButtons />
    </>
  );
}
