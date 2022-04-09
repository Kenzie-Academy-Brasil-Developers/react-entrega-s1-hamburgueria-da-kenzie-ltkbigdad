import Product from "../Product";
//import "./index.css";

function CartContainer({ products, handleClick }) {
  return (
    <div className="carrinho_box_components">
      {products.length > 0 ? (
        products.map((item, index) => (
          <Product
            // handleClick={handleClick}
            key={index}
            id={item.id}
            name={item.name}
            category={item.category}
            price={item.price}
            img={item.img}
          />
        ))
      ) : (
        <div>
          <h3 className="carrinho_box_txt_vazio">Sua sacola está vazia</h3>
          <p className="carrinho_box_add_itens">Adicione itens</p>
        </div>
      )}
    </div>
  );
}

export default CartContainer;
