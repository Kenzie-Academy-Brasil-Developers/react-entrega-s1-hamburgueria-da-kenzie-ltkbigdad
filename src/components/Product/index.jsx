import "./index.css";

function Product({ id, name, category, price, img, handleClick }) {
  return (
    <div className="card">
      <div className="card_boxImg">
        <img className="card_boxImg_img" src={img} alt={name} />
      </div>
      <h1 className="card_titulo">{name}</h1>
      <p className="card_categoria">{category}</p>
      <h2 className="card_preco">R$ {price}</h2>
      <button
        className="card_btn"
        onClick={() => {
          handleClick(id);
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default Product;
