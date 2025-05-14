import carrinho from "../assets/carrinho.png";
import logo from "../assets/logo.png";
import lupa from "../assets/lupa.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="topo">
          <div className="logo">
            <img src={logo} alt="Logo Digital College" />
            DIGITAL STORE
          </div>
          <div className="buscador">
            <input type="text" placeholder="Pesquisar produto..." />
            <img src={lupa} alt="lupa" />
          </div>
          <div className="acoes">
            <a href="">Cadastre-se</a>
            <a href="" className="btn">
              Entrar
            </a>
            <div className="carrinho">
              <img src={carrinho} alt="carrinho" />
              <span>2</span>
            </div>
          </div>
        </div>
        <nav>
          <a href="" className="active">
            Home
          </a>
          <a href="/produtos">Produtos</a>
          <a href="/categorias">Categorias</a>
          <a href="/meus-pedidos">Meus Pedidos</a>
        </nav>
      </header>
    </>
  );
};

export default Header;
