import Banner from "../components/Banner";
import Destaques from "../components/Destaques";
import OfertaEspecial from "../components/OfertaEspecial";
import Produtos from "../components/Produtos";

const Home = () => {
  return (
    <main>
      <Banner />
      <Destaques />
      <Produtos />
      <OfertaEspecial />
    </main>
  );
};

export default Home;
