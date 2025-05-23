const Cadastro = () => {
  return (
    <>
      <div className="bg-[#F9F8FE] pt-[128px] flex justify-center items-center">
        <div className="text-left">
          <div className="mb-[22px]">
            <h2 className="font-bold text-[32px] text-[#1f1f1f] mb-5">
              Criar conta
            </h2>
            <div className="px-[30px] pt-[30px]  bg-white mb-5 rounded">
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
             <div className="px-[30px] pt-[30px]  bg-white mb-5 rounded">
              <form className="bg-white p-5 rounded">
                <h3 className="text-grafite border-b-[1px] border-cinza mx-[30px] font-bold block p-5">
                  Informações de Entrega
                </h3>
                <div className="mx-[30px]  ">
                  <label className="text-grafite block mb-[5px] mt-5 font-bold">
                    Endereço *
                  </label>
                  <input
                    type="text"
                    placeholder="Insira seu endereço"
                    className="w-full h-[60px] bg-grafite/5 py-[16px] pl-[10px] text-grafite/50 rounded"
                  />
                </div>

                <div className="mx-[30px]  ">
                  <label className="text-grafite block mb-[5px] mt-5 font-bold">
                    Bairro *
                  </label>
                  <input
                    type="text"
                    placeholder="Insira seu bairro"
                    className="w-full h-[60px] bg-grafite/5 py-[16px] pl-[10px] text-grafite/50 rounded"
                  />
                </div>

                <div className="mx-[30px]  ">
                  <label className="text-grafite block mb-[5px] mt-5 font-bold">
                    Cidade *
                  </label>
                  <input
                    type="text"
                    placeholder="Insira sua cidade"
                    className="w-full h-[60px] bg-grafite/5 py-[16px] pl-[10px] text-grafite/50 rounded"
                  />
                </div>

                <div className="mx-[30px]  ">
                  <label className="text-grafite block mb-[5px] mt-5 font-bold">
                    CEP *
                  </label>
                  <input
                    type="text"
                    placeholder="Insira seu CEP"
                    className="w-full h-[60px] bg-grafite/5 py-[16px] pl-[10px] text-grafite/50 rounded"
                  />
                </div>
                <div className="mx-[30px]  ">
                  <label className="text-grafite block mb-[5px] mt-5 font-bold">
                    Complemento
                  </label>
                  <input
                    type="text"
                    placeholder="Insira o complemento"
                    className="w-full h-[60px] bg-grafite/5 py-[16px] pl-[10px] text-grafite/50 rounded"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="w-full flex gap-[10px] leading-[22px] font-[500] mt-[30px] mb-[40px] text-grafite">
            <input type="checkbox" className="w-[22px] h-[22px]"/>
            <label>Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.</label>
          </div>
          <button className="w-full h-[48px] mb-[150px] bg-rosa hover:bg-rosa-hover rounded font-bold text-white ">
            Criar Conta
          </button>
        </div>
      </div>
    </>
  );
};

export default Cadastro;
