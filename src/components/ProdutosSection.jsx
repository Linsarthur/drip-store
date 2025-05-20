import sapato from "../assets/product-example.png";
const ProdutosSection = () => {
  let produtos = [
    {
      id: 1,
      nome: "Aquele tênis lá",
      categoria: "Tênis",
      preco: 599.6,
      disconto: 0.3,
      img: sapato,
    },
    {
      id: 2,
      nome: "Aquele outro Tênis massa",
      categoria: "Tênis",
      preco: 0,
      disconto: 0.3,
      img: sapato,
    },
    {
      id: 3,
      nome: "Aquele não sei o que jordan",
      categoria: "Tênis",
      preco: 159.99,
      disconto: 0.3,
      img: sapato,
    },
    {
      id: 4,
      nome: "K-Swiss V8 - Masculino",
      categoria: "Tênis",
      preco: 20,
      disconto: 0.3,
      img: sapato,
    },
    {
      id: 6,
      nome: "K-Swiss V8 - Masculino",
      categoria: "Tênis",
      preco: 500,
      disconto: 0.3,
      img: sapato,
    },
    {
      id: 7,
      nome: "K-Swiss V8 - Masculino",
      categoria: "Tênis",
      preco: 300,
      disconto: 0.3,
      img: sapato,
    },
  ];

  return (
    <>
      {produtos.map((produto) => (
        <div title="K-Swiss V8 - Masculino">
          <div className="h-[320px] bg-white rounded shadow-xç relative flex justify-center items-center">
            <span className="absolute top-5 left-5 leading-[32px] bg-abacate text-[14px] uppercase font-bold px-4 rounded-3xl">
              30% off
            </span>
            <img src={produto.img} alt="" className="w-full" />
          </div>
          <div className="mt-[18px]">
            <h6 className="text-[12px] font-bold text-cinza-claro">
              {produto.categoria || "Ta errado ai"}
            </h6>
            <h4 className="text-grafite text-[24px] line-clamp-1">
              {produto.nome || "Encontrei nada"}
            </h4>
            <h4 className="text-[24px] font-bold">
              <del className="text-cinza-claro mr-2 font-light">{`R$${produto.preco}`}</del>
              {`R$${(produto.preco - produto.preco * produto.disconto).toFixed(
                2
              )}`}
            </h4>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProdutosSection;
