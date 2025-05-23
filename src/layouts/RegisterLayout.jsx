import { Outlet } from "react-router";
import Footer from "../components/Footer";
import HeaderRegister from "../components/HeaderRegister";

const RegisterLayout = () => {
  return (
    <>
      <HeaderRegister />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RegisterLayout;
