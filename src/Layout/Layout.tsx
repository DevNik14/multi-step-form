import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import MobileButtons from "../components/FormButtons/MobileButtons";

export default function Layout() {
  return (
    <>
      <Header />
      <section>
        <Outlet />
      </section>
      <MobileButtons />
    </>
  );
}
