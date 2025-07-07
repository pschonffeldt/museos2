type SearchBarProps = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchBar({
  searchText,
  setSearchText,
}: SearchBarProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This alert now uses the latest lifted state
    alert(`A search has been made: ${searchText}`);
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit} className="search-bar">
        <input
          value={searchText}
          onChange={(e) => {
            const newValue = e.target.value;
            setSearchText(newValue);
            console.log(newValue);
          }}
          className="search-bar-input"
          type="text"
          placeholder=" Busca museos por su nombre"
        ></input>
        <button
          onClick={() => alert(`A search has been made: ${searchText}`)}
          type="button"
          className="search-bar-button"
        >
          Buscar
        </button>
      </form>
    </div>
  );
}
