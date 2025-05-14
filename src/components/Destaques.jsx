import camisa from "../assets/camisa.png";
import fone from "../assets/fone.png";
import hat from "../assets/icon-hat.svg";
import pants from "../assets/icon-pants.svg";
import phone from "../assets/icon-phone.svg";
import shirt from "../assets/icon-shirt.svg";
import shoes from "../assets/icon-shoes.svg";

import sapato from "../assets/sapato.png";
const Destaques = () => {
  return (
    <>
      <div id="destaques">
        <h3>Coleções em destaque</h3>
        <div className="colecoes">
          <div>
            <div className="conteudo">
              <h6>30% off</h6>
              <h2>
                Novo drop
                <br />
                Supreme
              </h2>
              <a href="" className="btn inverso">
                Comprar
              </a>
            </div>
            <img src={camisa} alt="" />
          </div>
          <div>
            <div className="conteudo">
              <h6>30% off</h6>
              <h2>
                Coleção
                <br />
                adidas
              </h2>
              <a href="" className="btn inverso">
                Comprar
              </a>
            </div>
            <img src={sapato} alt="" />
          </div>
          <div>
            <div className="conteudo">
              <h6>30% off</h6>
              <h2>
                Novo
                <br />
                Beats Bass
              </h2>
              <a href="" className="btn inverso">
                Comprar
              </a>
            </div>
            <img src={fone} alt="" />
          </div>
        </div>
        <h3>Departamentos</h3>
        <div className="departamentos">
          <div>
            <div className="icon">
              <img src={shirt} alt="" />
            </div>
            Camisetas
          </div>
          <div>
            <div className="icon">
              <img src={pants} alt="" />
            </div>
            Calças
          </div>
          <div>
            <div className="icon">
              <img src={hat} alt="" className="bone" />
            </div>
            Bonés
          </div>
          <div>
            <div className="icon">
              <img src={phone} alt="" />
            </div>
            Headphones
          </div>
          <div>
            <div className="icon">
              <img src={shoes} alt="" />
            </div>
            Tênis
          </div>
        </div>
      </div>
    </>
  );
};

export default Destaques;
