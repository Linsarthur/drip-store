import sapato from "../assets/product-example.png";

const ProdutosSection = () => {
  return (
    <>
      <div title="K-Swiss V8 - Masculino">
        <div className="h-[320px] bg-white rounded shadow-xç relative flex justify-center items-center">
          <span className="absolute top-5 left-5 leading-[32px] bg-abacate text-[14px] uppercase font-bold px-4 rounded-3xl">
            30% off
          </span>
          <img src={sapato} alt="" className="w-full" />
        </div>
        <div className="mt-[18px]">
          <h6 className="text-[12px] font-bold text-cinza-claro">Tênis</h6>
          <h4 className="text-grafite text-[24px] line-clamp-1">
            K-Swiss V8 - Masculino
          </h4>
          <h4 className="text-[24px] font-bold">
            <del className="text-cinza-claro mr-2 font-light">R$200</del>
            R$100
          </h4>
        </div>
      </div>
    </>
  );
};

export default ProdutosSection;
