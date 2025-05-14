import face from "../assets/face.svg";
import insta from "../assets/insta.svg";
import twitter from "../assets/twitter.svg";
import WhiteLogo from "../assets/white-logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <section id="info">
          <div className="logo">
            <div className="logo-image">
              <img src={WhiteLogo} alt="Logo Digital College" />
              <h4>DIGITAL STORE</h4>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="social-midias flex">
              <a href="">
                <img src={face} alt="" />
              </a>
              <a href="">
                <img src={insta} alt="" />
              </a>
              <a href="">
                <img src={twitter} alt="" />
              </a>
            </div>
          </div>

          <nav className="nav-footer">
            <div className="about">
              <h5>Informação</h5>
              <a href="">Sobre Drip Store</a>
              <a href="">Segurança</a>
              <a href="">Whishlist</a>
              <a href="">Blog</a>
              <a href="">Trabalhe conosco</a>
              <a href="">Meus Pedidos</a>
            </div>
            <div className="categories">
              <h5>Categorias</h5>
              <a href="">Camisetas</a>
              <a href="">Calças</a>
              <a href="">Bonés</a>
              <a href="">HeadPhones</a>
              <a href="">Tênis</a>
            </div>
            <div className="contact">
              <h5>Contatos</h5>
              <p>
                Av. Santos Dumont, 1510 - 1 andar - Aldeota Fortaleza - CE,
                60150161
              </p>
              <p>(85) 3051-3411</p>
            </div>
          </nav>
        </section>

        <div className="eu">
          <p>@2024 Arthur Cavalcante</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
