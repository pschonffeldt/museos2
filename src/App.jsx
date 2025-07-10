// src/App.jsx
import Topbar from "./components/Topbar";
import Container from "./components/Container";

// Single, top-level export
export default function App() {
  // const [searchText, setSearchText] = useState("");
  // const [searchQuery, setSearchQuery] = useState("");

  // // Called only on button-click / form submit
  // const handleSearch = () => {
  //   setSearchQuery(searchText);
  // };

  return (
    <>
      {/* <Topbar
        searchText={searchText}
        setSearchText={setSearchText}
        onSearch={handleSearch}
      /> */}
      <Container />
    </>
  );
}
