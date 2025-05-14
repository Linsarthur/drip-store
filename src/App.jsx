import Carrousel from "./components/Carrousel";
import Destaques from "./components/Destaques";
import Footer from "./components/Footer";
import Header from "./components/Header";
import OfertaEspecial from "./components/OfertaEspecial";
import Produtos from "./components/Produtos";
import "./index.css";
function App() {
  return (
    <>
      <Header />
      <Carrousel />
      <Destaques />
      <Produtos />
      <OfertaEspecial />
      <Footer />
    </>
  );
}

export default App;
