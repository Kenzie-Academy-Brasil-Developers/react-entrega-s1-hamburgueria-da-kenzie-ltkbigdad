import { Fragment, useEffect, useState } from "react";
import CartProduct from "../CartProduct";
import "./style.css";

function CartContainer({ currentSale, setCurrentSale }) {
  const [soma, setSoma] = useState(0);

  function price(currentSale) {
    const totalPrice = currentSale.reduce((total, atual) => {
      return atual.price + total;
    }, 0);
    setSoma(totalPrice);
  }

  useEffect(() => {
    price(currentSale);
  }, [currentSale]);

  function removeAll() {
    const emptyCart = currentSale.splice();
    return setCurrentSale(emptyCart);
  }
  console.log(currentSale);
  return (
    <div className="cart_box_components">
      {currentSale.length > 0 ? (
        <Fragment>
          <ul>
            {currentSale.map((item, index) => (
              <CartProduct
                key={index}
                id={item.id}
                name={item.name}
                category={item.category}
                img={item.img}
                currentSale={currentSale}
                setCurrentSale={setCurrentSale}
              />
            ))}
          </ul>
          <div className="cart_box_total">{"R$" + soma.toFixed(2)}</div>
          <button
            onClick={() => {
              removeAll();
            }}
          >
            Remover Todos
          </button>
        </Fragment>
      ) : (
        <div className="cart_empty">
          <h3 className="cart_box_txt_empty">Sua sacola está vazia</h3>
          <p className="cart_box_add_itens">Adicione itens</p>
        </div>
      )}
    </div>
  );
}

export default CartContainer;
