import { Outlet } from "react-router";
import Footer from "../components/Footer";
import HeaderNav from "../components/HeaderNav";

const PageLayout = () => {
  return (
    <>
      <HeaderNav />
      <Outlet />
      <Footer />
    </>
  );
};

export default PageLayout;
