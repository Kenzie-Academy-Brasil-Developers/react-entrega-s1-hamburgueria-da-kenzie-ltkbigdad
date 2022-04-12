import "./index.css";

function CartProduct({
  id,
  name,
  category,
  img,
  products,
  currentSale,
  setCurrentSale,
}) {
  //preciso terminar a função do btn remover do card

  /*function removeItem(id) {
    const remove = currentSale.find((item) => {
      return item.id !== id;
    });
    return setCurrentSale(remove);
  }*/

  return (
    <li className="cart_card">
      <div className="cart_card_boxImg">
        <img className="cart_card_boxImg_img" src={img} alt={name} />
      </div>
      <div className="cart_infos">
        <h1 className="cart_card_title">{name}</h1>
        <p className="cart_card_category">{category}</p>
      </div>
      <button
        className="cart_card_btn"
        /* onClick={() => {
          removeItem();
        }}*/
      >
        Remover
      </button>
    </li>
  );
}

export default CartProduct;
