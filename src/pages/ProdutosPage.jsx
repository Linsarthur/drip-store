import { useEffect, useState } from "react";
import ProdutosSection from "../components/ProdutosSection";
import { AXIOS } from "../services";

const ProdutosPage = () => {
  const [filtroMarca, setfiltroMarca] = useState([]);
  const [filtroCategoria, setfiltroCategoria] = useState([]);
  const [filtroGenero, setfiltroGenero] = useState([]);
  const [filtroEstado, setfiltroEstado] = useState("Novo");
  const [produtos, setProdutos] = useState([]);
  

  function verificarMarca(marca) {
    if (filtroMarca.includes(marca)) {
      setfiltroMarca([
        ...filtroMarca.filter((cadaMarca) => cadaMarca != marca),
      ]);
    } else {
      setfiltroMarca([...filtroMarca, marca]);
    }
  }

  function verificarCategoria(categoria) {
    if (filtroCategoria.includes(categoria)) {
      setfiltroCategoria([
        ...filtroCategoria.filter(
          (cadaCategoria) => cadaCategoria != categoria
        ),
      ]);
    } else {
      setfiltroCategoria([...filtroCategoria, categoria]);
    }
  }

  function verificarGenero(genero) {
    if (filtroGenero.includes(genero)) {
      setfiltroGenero([
        ...filtroGenero.filter((cadaGenero) => cadaGenero != genero),
      ]);
    } else {
      setfiltroGenero([...filtroCategoria, genero]);
    }
  }

  async function buscarProdutos() {
    try {
      const response = await AXIOS.get("/produtos");
      setProdutos(response.data);
    } catch (error) {
      alert(error.message);
    }
  }
  console.log(produtos);
  
  useEffect(() => {
    buscarProdutos();
  }, []);

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
          <div className="h-[1px] bg-cinza my-[20px]" />
          <h6 className="mb-[10px] font-bold text-grafite">Marca</h6>
          <div className="grid gap-[10px] mb-5">
            <label className="flex gap-[10px] items-center">
              <input
                type="checkbox"
                className="w-[22px] h-[22px] accent-rosa"
                onChange={() => verificarMarca("Adidas")}
              />
              Adidas
            </label>
            <label className="flex gap-[10px] items-center">
              <input
                type="checkbox"
                className="w-[22px] h-[22px] accent-rosa"
                onChange={() => verificarMarca("Balenciaga")}
              />
              Balenciaga
            </label>
            <label className="flex gap-[10px] items-center">
              <input
                type="checkbox"
                className="w-[22px] h-[22px] accent-rosa"
                onChange={() => verificarMarca("Nike")}
              />
              Nike
            </label>
            <label className="flex gap-[10px] items-center">
              <input
                type="checkbox"
                className="w-[22px] h-[22px] accent-rosa"
                onChange={() => verificarMarca("Puma")}
              />
              Puma
            </label>
          </div>
          <h6 className="mb-[10px] font-bold text-grafite">Categoria</h6>
          <div className="grid gap-[10px] mb-5">
            <label className="flex gap-[10px] items-center">
              <input
                type="checkbox"
                className="w-[22px] h-[22px] accent-rosa"
                onChange={() => verificarCategoria("Esporte e Lazer")}
              />
              Esporte e Lazer
            </label>
            <label className="flex gap-[10px] items-center">
              <input
                type="checkbox"
                className="w-[22px] h-[22px] accent-rosa"
                onChange={() => verificarCategoria("Casual")}
              />
              Casual
            </label>
            <label className="flex gap-[10px] items-center">
              <input
                type="checkbox"
                className="w-[22px] h-[22px] accent-rosa"
                onChange={() => verificarCategoria("Utilitário")}
              />
              Utilitário
            </label>
            <label className="flex gap-[10px] items-center">
              <input
                type="checkbox"
                className="w-[22px] h-[22px] accent-rosa"
                onChange={() => verificarCategoria("Corrida")}
              />
              Corrida
            </label>
          </div>
          <h6 className="mb-[10px] font-bold text-grafite">Gênero</h6>
          <div className="grid gap-[10px] mb-5">
            <label className="flex gap-[10px] items-center">
              <input
                type="checkbox"
                className="w-[22px] h-[22px] accent-rosa"
                onChange={() => verificarGenero("Masculino")}
              />
              Masculino
            </label>
            <label className="flex gap-[10px] items-center">
              <input
                type="checkbox"
                className="w-[22px] h-[22px] accent-rosa"
                onChange={() => verificarGenero("Feminino")}
              />
              Feminino
            </label>
            <label className="flex gap-[10px] items-center">
              <input
                type="checkbox"
                className="w-[22px] h-[22px] accent-rosa"
                onChange={() => verificarGenero("Unissex")}
              />
              Unissex
            </label>
          </div>
          <h6 className="mb-[10px] font-bold text-grafite">Estado</h6>
          <div className="grid gap-[10px] mb-5">
            <label className="flex gap-[10px] items-center">
              <input
                type="radio"
                className="w-[22px] h-[22px] accent-rosa"
                onChange={() => setfiltroEstado("Novo")}
                checked={filtroEstado == "Novo"}
              />
              Novo
            </label>
            <label className="flex gap-[10px] items-center">
              <input
                type="radio"
                className="w-[22px] h-[22px] accent-rosa"
                onChange={() => setfiltroEstado("Usado")}
                checked={filtroEstado == "Usado"}
              />
              Usado
            </label>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[14px]">
          {produtos.length > 0 &&
            produtos.map((produto) => (
              <ProdutosSection {...produto} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProdutosPage;
