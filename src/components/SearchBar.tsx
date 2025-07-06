import { useState } from "react";

type value = {
  value: string;
  // searchText: string;
  // setSearchText: string;
};

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="search-bar-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="search-bar"
      >
        <input
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            console.log(searchText);
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
