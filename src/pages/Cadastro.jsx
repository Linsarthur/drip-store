const Cadastro = () => {
  return (
    <>
      <div className="bg-[#F9F8FE] px-[345px] pt-[128px] flex justify-center items-center">
        <div className="w-full text-left">
          <div className="mb-[22px] ">
            <h2 className="font-bold text-[32px] text-[#1f1f1f]">
              Criar conta
            </h2>
            <div className="px-[30px] pt-[30px] font-bold bg-white"></div>
            <form className="bg-white p-5 rounded">
              <h3 className="text-grafite border-b-[1px] border-cinza mx-[30px] font-bold block p-5">
                Informações pessoais
              </h3>
              <div className="mx-[30px]  ">
                <label className="text-grafite block mb-[5px] mt-5 font-bold">
                  Nome completo *
                </label>
                <input
                  type="text"
                  placeholder="Insira seu nome"
                  className="w-full h-[60px] bg-grafite/5 py-[16px] pl-[10px] text-grafite/50 rounded"
                />
              </div>

              <div className="mx-[30px]  ">
                <label className="text-grafite block mb-[5px] mt-5 font-bold">
                  CPF *
                </label>
                <input
                  type="text"
                  placeholder="Insira seu CPF"
                  className="w-full h-[60px] bg-grafite/5 py-[16px] pl-[10px] text-grafite/50 rounded"
                />
              </div>

              <div className="mx-[30px]  ">
                <label className="text-grafite block mb-[5px] mt-5 font-bold">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="Insira seu Email"
                  className="w-full h-[60px] bg-grafite/5 py-[16px] pl-[10px] text-grafite/50 rounded"
                />
              </div>

              <div className="mx-[30px]  ">
                <label className="text-grafite block mb-[5px] mt-5 font-bold">
                  Celular *
                </label>
                <input
                  type="number"
                  placeholder="Insira seu Número de celular"
                  className="w-full h-[60px] bg-grafite/5 py-[16px] pl-[10px] text-grafite/50 rounded"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cadastro;
