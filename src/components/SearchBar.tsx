export default function SearchBar() {
  return (
    <div className="search-bar">
      <form>
        <label>Busca museos por su nombre</label>
        <input type="text"></input>
      </form>
      <div className="button">
        <button>Buscar</button>
      </div>
    </div>
  );
}
