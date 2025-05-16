import ProdutosSection from "../components/ProdutosSection";

const ProdutosPage = () => {
  return (
    <div className="xl:px-[100px] xl:pt-[40px] xl:pb-[140px] bg-[#F9F8FE]">
      {/* Ordenação */}
      <div className="flex justify-between items-center">
        <h6>
          <strong>Resultados para “Tênis”</strong> - 389 produtos{" "}
        </h6>
        <div className="border-2 border-grafite p-4 rounded">
          <strong>Order por:</strong>
          <select name="" id="">
            <option value="">Mais relevantes</option>
          </select>
        </div>
      </div>

      {/* Filtros e produtos */}
      <div className="flex gap-[28px] items-start mt-[40px]">
        {/* Filtros */}
        <div className="w-[300px] bg-white rounded p-[30px]">
          <h5 className="font-bold text-grafite">Filtrar por</h5>
          <div className="h-[1px] bg-cinza-claro my-[20px]" />
          <h6 className="mb-[10px] font-bold text-grafite">Marca</h6>
          <div className="grid gap-[10px] mb-[20px]">
            <label className="flex gap-[10px] items-center">
              <input
                type="checkbox"
                className="w-[22px] h-[22px] accent-rosa"
              />
              Adidas
            </label>
            <label className="flex gap-[10px] items-center">
              <input
                type="checkbox"
                className="w-[22px] h-[22px] accent-rosa"
              />
              Balenciaga
            </label>
            <label className="flex gap-[10px] items-center">
              <input
                type="checkbox"
                className="w-[22px] h-[22px] accent-rosa"
              />
              Nike
            </label>
            <label className="flex gap-[10px] items-center">
              <input
                type="checkbox"
                className="w-[22px] h-[22px] accent-rosa"
              />
              Puma
            </label>
          </div>
          <h6 className="mb-[10px] font-bold text-grafite">Categoria</h6>
          <div className="grid gap-[10px] mb-[20px]">
            <label className="flex gap-[10px] items-center">
              <input
                type="checkbox"
                className="w-[22px] h-[22px] accent-rosa"
              />
              Esporte e Lazer
            </label>
            <label className="flex gap-[10px] items-center">
              <input
                type="checkbox"
                className="w-[22px] h-[22px] accent-rosa"
              />
              Casual
            </label>
            <label className="flex gap-[10px] items-center">
              <input
                type="checkbox"
                className="w-[22px] h-[22px] accent-rosa"
              />
              Utilitário
            </label>
            <label className="flex gap-[10px] items-center">
              <input
                type="checkbox"
                className="w-[22px] h-[22px] accent-rosa"
              />
              Corrida
            </label>
          </div>
          <h6 className="mb-[10px] font-bold text-grafite">Gênero</h6>
          <div className="grid gap-[10px] mb-[20px]">
            <label className="flex gap-[10px] items-center">
              <input
                type="checkbox"
                className="w-[22px] h-[22px] accent-rosa"
              />
              Masculino
            </label>
            <label className="flex gap-[10px] items-center">
              <input
                type="checkbox"
                className="w-[22px] h-[22px] accent-rosa"
              />
              Feminino
            </label>
            <label className="flex gap-[10px] items-center">
              <input
                type="checkbox"
                className="w-[22px] h-[22px] accent-rosa"
              />
              Unissex
            </label>
            <label className="flex gap-[10px] items-center">
              <input
                type="checkbox"
                className="w-[22px] h-[22px] accent-rosa"
              />
              Corrida
            </label>
          </div>
          <h6 className="mb-[10px] font-bold text-grafite">Estado</h6>
          <div className="grid gap-[10px] mb-[20px]">
            <label className="flex gap-[10px] items-center">
              <input type="radio" className="w-[22px] h-[22px] accent-rosa" />
              Novo
            </label>
            <label className="flex gap-[10px] items-center">
              <input type="radio" className="w-[22px] h-[22px] accent-rosa" />
              Usado
            </label>
          </div>
        </div>
        <ProdutosSection />
      </div>
    </div>
  );
};

export default ProdutosPage;
