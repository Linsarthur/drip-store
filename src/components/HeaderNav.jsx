import { NavLink } from "react-router";
import carrinho from "../assets/carrinho.png";
import logo from "../assets/logo.png";
import lupa from "../assets/lupa.png";

const HeaderNav = () => {
 
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
            <a href="/auth" className="btn">
              Entrar
            </a>
            <div className="carrinho">
              <img src={carrinho} alt="carrinho" />
              <span>2</span>
            </div>
          </div>
        </div>
        <nav>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/produtos"}>Produtos</NavLink>
          <NavLink to={"/categorias"}>Produtos</NavLink>
          <NavLink to={"/meus-pedidos"}>Produtos</NavLink>
        </nav>
      </header>
    </>
  );
};

export default HeaderNav;
