// src/components/Container.tsx

export default function Container() {
  return (
    <main className="container">
      <nav className="nav">
        <div className="title-container">
          <h1 className="title">Buscador de Museos</h1>
        </div>
        <div className="results">
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
        </div>
      </nav>

      {/* Separador super cool */}

      <div className="content">
        <div className="search-bar">
          <div className="search-bar-module">
            <form className="search-bar-form">
              <input />
              <button type="submit" className="search-bar-button">
                Buscar museo
              </button>
            </form>
          </div>
        </div>
        <div className="details-container">
          <div className="details-container-layout"></div>
        </div>
      </div>
    </main>
  );
}
