import brilhinho from "../assets/brilhinho.png";
import tenis from "../assets/tenis.png";

const Carrousel = () => {
  return (
    <>
      <div id="banner">
        <div className="conteudo">
          <h6>Melhores ofertas personalizadas</h6>
          <h2>
            Queima de
            <br />
            estoque Nike 🔥
          </h2>
          <p>
            Consequat culpa exercitation mollit nisi excepteur do
            <br />
            do tempor laboris eiusmod irure consectetur.
          </p>
          <a href="" className="btn">
            Ver Ofertas
          </a>
        </div>
        <img src={tenis} alt="" className="tenis" />
        <img src={brilhinho} alt="" className="detalhe" />
      </div>
    </>
  );
};

export default Carrousel;
