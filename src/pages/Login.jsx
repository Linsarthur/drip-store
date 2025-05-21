const Login = () => {
  return (
    <div>
      <div className="bg-white p-[30px] rounded xl:w-[580px]">
        <form>
          <h4 className="text-center text-[22px] leading-[34px] font-bold xl:text-left xl:mb-5">
            Acesse sua conta
          </h4>
          <p className="mb-[30px] text-grafite text-center xl:text-left">
            Novo Cliente? Então registre-se{" "}
            <a href="" className="underline hover:text-rosa">
              aqui
            </a>
          </p>
          <label className="block mb-5">Login *</label>
          <input type="text" placeholder="Insira seu login ou email" className="bg-grafite/5 rounded w-full" />
        </form>
      </div>
      <div className="hidden"></div>
    </div>
  );
};

export default Login;
