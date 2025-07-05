export default function SearchBar() {
  return (
    <div className="search-bar-container">
      <form className="search-bar">
        <input
          className="search-bar-input"
          type="text"
          placeholder=" Busca museos por su nombre"
        ></input>
        <button className="search-bar-button">Buscar</button>
      </form>
    </div>
  );
}
