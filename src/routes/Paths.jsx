import { BrowserRouter, Route, Routes } from "react-router";
import "../index.css";
import AuthLayout from "../layouts/AuthLayout";
import PageLayout from "../layouts/PageLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Notfound from "../pages/NotFound";
import Produtos from "../pages/Produtos";

const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
          </Route>
          <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<Login />} />
          </Route>
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
