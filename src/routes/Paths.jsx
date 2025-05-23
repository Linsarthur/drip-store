import { BrowserRouter, Route, Routes } from "react-router";
import "../index.css";
import AuthLayout from "../layouts/AuthLayout";
import PageLayout from "../layouts/PageLayout";
import RegisterLayout from "../layouts/RegisterLayout";
import Cadastro from "../pages/Cadastro";
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
           <Route path="/auth/cadastro" element={<Cadastro />} />
          </Route>
           <Route path="/authCadastro" element={<RegisterLayout />}>
            <Route index element={<Cadastro />} />
           
          </Route>
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
