import Banner from "../components/Banner";
import Destaques from "../components/Destaques";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OfertaEspecial from "../components/OfertaEspecial";
import Produtos from "../components/Produtos";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Destaques />
        <Produtos />
        <OfertaEspecial />
      </main>
      <Footer />
    </>
  );
};

export default Home;
