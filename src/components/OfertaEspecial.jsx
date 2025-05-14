import jordans from "../assets/jordans.png";

const OfertaEspecial = () => {
  return (
    <>
      <section id="special-offer">
        <div className="container-special circle">
          <div className="imagem-destaque">
            <img src={jordans} alt="tênis jordans" />
          </div>
          <div className="texto-secao flex-1">
            <h6>Oferta especial</h6>
            <h2>Air Jordan edição de colecionador</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </p>
            <a href="" className="btn">
              Ver ofertas
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default OfertaEspecial;
