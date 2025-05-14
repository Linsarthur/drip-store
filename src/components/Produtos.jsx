import line from "../assets/Line.png";
import productExample from "../assets/product-example.png";
const Produtos = () => {
  return (
    <>
      <section id="produtos">
        <div className="titulo">
          <h3>Produtos em alta</h3>
          <a href="#">
            Ver todos <img src={line} alt="" />
          </a>
        </div>
        <div className="cards">
          <div className="card">
            <a href="">
              <div className="imagem">
                <h6>30% off</h6>
                <img src={productExample} alt="image de exemplo do produto" />
              </div>
              <span>Tênis</span>
              <h4>K-Swiss V8 - Masculino</h4>
              <h5>
                <del>$200</del>$100
              </h5>
            </a>
          </div>
          <div className="card">
            <a href="">
              <div className="imagem">
                <h6>30% off</h6>
                <img src={productExample} alt="image de exemplo do produto" />
              </div>
              <span>Tênis</span>
              <h4>K-Swiss V8 - Masculino</h4>
              <h5>
                <del>$200</del>$100
              </h5>
            </a>
          </div>
          <div className="card">
            <a href="">
              <div className="imagem">
                <img src={productExample} alt="image de exemplo do produto" />
              </div>
              <span>Tênis</span>
              <h4>K-Swiss V8 - Masculino</h4>
              <h5>
                <del>$200</del>$100
              </h5>
            </a>
          </div>
          <div className="card">
            <a href="">
              <div className="imagem">
                <img src={productExample} alt="image de exemplo do produto" />
              </div>
              <span>Tênis</span>
              <h4>K-Swiss V8 - Masculino</h4>
              <h5>
                <del>$200</del>$100
              </h5>
            </a>
          </div>
          <div className="card">
            <a href="">
              <div className="imagem">
                <img src={productExample} alt="image de exemplo do produto" />
              </div>
              <span>Tênis</span>
              <h4>K-Swiss V8 - Masculino</h4>
              <h5>
                <del>$200</del>$100
              </h5>
            </a>
          </div>
          <div className="card">
            <a href="">
              <div className="imagem">
                <img src={productExample} alt="image de exemplo do produto" />
              </div>
              <span>Tênis</span>
              <h4>K-Swiss V8 - Masculino</h4>
              <h5>
                <del>$200</del>$100
              </h5>
            </a>
          </div>
          <div className="card">
            <a href="">
              <div className="imagem">
                <img src={productExample} alt="image de exemplo do produto" />
              </div>
              <span>Tênis</span>
              <h4>K-Swiss V8 - Masculino</h4>
              <h5>
                <del>$200</del>$100
              </h5>
            </a>
          </div>
          <div className="card">
            <a href="">
              <div className="imagem">
                <img src={productExample} alt="image de exemplo do produto" />
              </div>
              <span>Tênis</span>
              <h4>K-Swiss V8 - Masculino</h4>
              <h5>
                <del>$200</del>$100
              </h5>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Produtos;
