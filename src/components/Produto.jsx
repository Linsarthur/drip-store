import sapato from "../assets/product-example.png";
const Produto = ({ nome, categoria, desconto, preco, marca, genero }) => {
  return (
    <>
      <div title="K-Swiss V8 - Masculino">
        <div className="h-[320px] bg-white rounded shadow-xl relative flex justify-center items-center">
          {desconto > 0 && (
            <span className="absolute top-5 left-5 leading-[32px] bg-abacate text-[14px] uppercase font-bold px-4 rounded-3xl">
              {desconto} off%
            </span>
          )}
          <img src={sapato} alt="" className="w-full" />
        </div>
        <div className="mt-[18px]">
          <h6 className="text-[12px] font-bold text-cinza">
            {categoria} - {marca} - {genero}
          </h6>
          <h4 className="text-grafite text-[24px] line-clamp-1">{nome}</h4>

          <h4 className="text-[24px] font-bold">
            {desconto == 0 ? (
              <>R${preco}</>
            ) : (
              <>
                <div className="flex">
                  <del className="text-cinza-claro mr-2 font-light">R$200</del>
                  <h4 className="text-[24px] font-bold">R${preco}</h4>
                </div>
              </>
            )}
          </h4>
        </div>
      </div>
    </>
  );
};

export default Produto;
