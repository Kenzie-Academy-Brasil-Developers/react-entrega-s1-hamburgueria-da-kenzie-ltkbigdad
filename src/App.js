import { useState } from "react";
import "./App.css";
import Product from "./components/Product";
import Header from "./components/Header";
import MenuContainer from "./components/MenuContainer";
import CartContainer from "./components/CartContainer";
import CartProduct from "./components/CartProduct";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca-Cola",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Milkshake Ovomaltine",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const [userInput, setUserInput] = useState(" ");
  //console.log(userInput);
  function showProducts(item) {
    setFilteredProducts(
      products.filter((product) => {
        if (product.name.toLowerCase() === item.toLowerCase()) {
          return product;
        } else if (product.category.toLowerCase() === item.toLowerCase()) {
          return product;
        }
      })
    );
  }

  function handleClick(id) {
    const getProduct = products.find((item) => {
      return item.id === id;
    });
    setCurrentSale([...currentSale, getProduct]);
  }

  return (
    <div className="body">
      <Header
        setUserInput={setUserInput}
        showProducts={showProducts}
        userInput={userInput}
      />
      <main>
        <div className="cards_box">
          <MenuContainer
            className="cards_box_components"
            products={filteredProducts.length > 0 ? filteredProducts : products}
            handleClick={handleClick}
          />
        </div>
        <div className="cart_box">
          <div className="cart_box_title">
            <p className="cart_box_title_paragraph">Carrinho de compras</p>
          </div>

          <CartContainer
            className="cart_box_components"
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
