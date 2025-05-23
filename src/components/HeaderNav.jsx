import { useContext } from "react";
import { NavLink } from "react-router";
import carrinho from "../assets/carrinho.png";
import logo from "../assets/logo.png";
import lupa from "../assets/lupa.png";
import iconeLogado from "../assets/usuarioDaSilva.png";
import { LoginContext } from "../context/LoginContext";
const HeaderNav = () => {
  const { logado } = useContext(LoginContext);

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
            {logado ? (
              <>
                <div className="carrinho ">
                  <img src={carrinho} alt="carrinho" />
                  <span>2</span>
                </div>

                <div className="flex items-center gap-2 ml-[40px]">
                  <img className="" src={iconeLogado} alt="" />
                  <h6 className=" mt-2">Olá, usuário da silva!</h6>
                </div>
              </>
            ) : (
              <>
                <a href="/authCadastro">Cadastre-se</a>
                <a href="/auth" className="btn">
                  Entrar
                </a>
                <div className="carrinho">
                  <img src={carrinho} alt="carrinho" />
                  <span>2</span>
                </div>
              </>
            )}
          </div>
        </div>
        <nav>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/produtos"}>Produtos</NavLink>
          <NavLink to={"/categorias"}>Categorias</NavLink>
          {logado && <NavLink to={"/meus-pedidos"}>Meus pedidos</NavLink>}
        </nav>
      </header>
    </>
  );
};

export default HeaderNav;
