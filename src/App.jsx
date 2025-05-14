import Banner from "./components/Banner";
import Destaques from "./components/Destaques";
import Footer from "./components/Footer";
import Header from "./components/header";
import OfertaEspecial from "./components/OfertaEspecial";
import Produtos from "./components/Produtos";
import "./index.css";
function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Destaques />
        <Produtos />
        <OfertaEspecial />
        <Footer />
      </main>
    </>
  );
}

export default App;
