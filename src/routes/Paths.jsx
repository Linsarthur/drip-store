import { BrowserRouter, Route, Routes } from "react-router";
import "../index.css";
import PageLayout from "../layouts/PageLayout";
import Home from "../pages/Home";
import Notfound from "../pages/NotFound";
import ProdutosPage from "../pages/ProdutosPage";

const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path="/produtos" element={<ProdutosPage />} />
          </Route>
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
