import { useContext } from "react";
import { useNavigate } from "react-router";
import tenisCosta from "../assets/tenisCosta.png";
import tenisFrente from "../assets/tenisFrente.png";
import { LoginContext } from "../context/LoginContext";

const Login = () => {
  //USECONTEXT VER MELHOR DEPOIS

  const { setLogado } = useContext(LoginContext);
  const navigate = useNavigate();
  function onLogin(event) {
    event.preventDefault();
    setLogado(true);
    navigate("/");
  }

  return (
    <div className="relative ">
      <div className="bg-white p-[30px] rounded xl:w-[580px] ">
        <form onSubmit={onLogin}>
          <h4 className="text-center text-[22px] leading-[34px] font-bold xl:text-left xl:mb-5">
            Acesse sua conta
          </h4>
          <p className="mb-[30px] text-grafite text-center xl:text-left">
            Novo Cliente? Então registre-se{" "}
            <a href="/authCadastro" className="underline hover:text-rosa">
              aqui
            </a>
          </p>
          <label className="block mb-1">Login *</label>
          <input
            type="text"
            placeholder="Insira seu login ou email"
            className="h-[60px] pl-4 mb-5 bg-grafite/5 rounded w-full duration-150 outline-transparent focus:outline-rosa"
          />
          <label className="block mb-1">Senha *</label>
          <input
            type="password"
            placeholder="Insira seu login ou email"
            className="h-[60px] pl-4 mb-[30px] bg-grafite/5 rounded w-full duration-150 outline-transparent focus:outline-rosa"
          />
          <a
            href="/"
            className="text-grafite underline block mb-[30px] hover:text-rosa"
          >
            Esqueci minha senha
          </a>

          <button className="w-full h-[48px] bg-rosa hover:bg-rosa-hover font-bold rounded text-white cursor-pointer">
            Acessar conta
          </button>
        </form>
      </div>
      <div className="hidden"></div>

      <div className="flex">
        <img className="absolute top-0 right-72" src={tenisFrente} alt="" />
        <img className="absolute -bottom-50 right-0" src={tenisCosta} alt="" />
      </div>
    </div>
  );
};

export default Login;
