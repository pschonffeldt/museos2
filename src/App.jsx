import Container from "./components/Container";
import SearchResults from "./components/SearchResults";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

function App() {
  return (
    <>
      <Topbar />
      <Container>
        <Sidebar />
        <SearchResults />
      </Container>
    </>
  );
}

export default App;
