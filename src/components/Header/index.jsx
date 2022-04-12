import "./style.css";

function Header({ setUserInput, showProducts, userInput }) {
  return (
    <header className="header">
      <div className="logo">
        <h1 className="logo_h1">Burguer</h1>
        <h2 className="logo_h2">Kenzie</h2>
      </div>
      <div className="input_box">
        <input
          type="text"
          className="input"
          placeholder="Digitar Pesquisa"
          /*value={userInput}*/
          onChange={(event) => setUserInput(event.target.value)}
        />
        <button
          className="inputButton"
          onClick={() => {
            showProducts(userInput);
          }}
        >
          Pesquisar
        </button>
      </div>
    </header>
  );
}

export default Header;
