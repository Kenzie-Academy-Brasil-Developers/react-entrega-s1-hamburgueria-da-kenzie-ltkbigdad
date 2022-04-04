import Product from "../Product";
import "./index.css";

function MenuContainer({ products, handleClick }) {
  return (
    <div className="cards_box_components">
      {products.map((item, index) => (
        <Product
          handleClick={handleClick}
          key={index}
          id={item.id}
          name={item.name}
          category={item.category}
          price={item.price}
          img={item.img}
        />
      ))}
    </div>
  );
}

export default MenuContainer;
