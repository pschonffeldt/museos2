// // src/components/Container.tsx

// export default function Container() {
//   return (
//     <main className="container">
//       {/* Nav bar izquierda */}

//       <nav className="nav-left">
//         <div className="title-container">
//           <h1 className="title">Buscador de Museos</h1>
//         </div>
//         <div className="results">
//           <div className="result-container">
//             <p className="result-name">El que tiene color del museo</p>
//           </div>
//           <div className="result-container">
//             <p>Nombre del museo</p>
//           </div>
//           <div className="result-container">
//             <p>Nombre del museo</p>
//           </div>
//           <div className="result-container">
//             <p>Nombre del museo</p>
//           </div>
//           <div className="result-container">
//             <p>Nombre del museo</p>
//           </div>
//           <div className="result-container">
//             <p>Nombre del museo</p>
//           </div>
//           <div className="result-container">
//             <p>Nombre del museo</p>
//           </div>
//           <div className="result-container">
//             <p>Nombre del museo</p>
//           </div>
//           <div className="result-container">
//             <p>Nombre del museo</p>
//           </div>
//           <div className="result-container">
//             <p>Nombre del museo</p>
//           </div>
//           <div className="result-container">
//             <p>Nombre del museo</p>
//           </div>
//           <div className="result-container">
//             <p>Nombre del museo</p>
//           </div>
//           <div className="result-container">
//             <p>Nombre del museo</p>
//           </div>
//           <div className="result-container">
//             <p>Nombre del museo</p>
//           </div>
//           <div className="result-container">
//             <p>Nombre del museo</p>
//           </div>
//           <div className="result-container">
//             <p>Nombre del museo</p>
//           </div>
//           <div className="result-container">
//             <p>Nombre del museo</p>
//           </div>
//           <div className="result-container">
//             <p>Nombre del museo</p>
//           </div>
//           <div className="result-container">
//             <p>Nombre del museo</p>
//           </div>
//           <div className="result-container">
//             <p>Nombre del museo</p>
//           </div>
//           <div className="result-container">
//             <p>Nombre del museo</p>
//           </div>
//           <div className="result-container">
//             <p>Nombre del museo</p>
//           </div>
//           <div className="result-container">
//             <p>Nombre del museo</p>
//           </div>
//           <div className="result-container">
//             <p>Nombre del museo</p>
//           </div>
//           <div className="result-container">
//             <p>Nombre del museo</p>
//           </div>
//           <div className="result-container">
//             <p>Nombre del museo</p>
//           </div>
//           <div className="result-container">
//             <p>Tula del museo</p>
//           </div>
//         </div>
//       </nav>

//       {/* Nav bar superior */}

//       <div className="content">
//         <nav className="nav-top">
//           <div className="search-bar-container">
//             <form className="search-bar-form">
//               <input
//                 className="search-bar-form-input"
//                 placeholder="Busca museos por su nombre..."
//               />
//               <button type="submit" className="search-bar-button">
//                 Buscar museo
//               </button>
//             </form>
//           </div>
//         </nav>

//         <div className="details-container">
//           <div className="details-container-layout"></div>
//         </div>
//       </div>
//     </main>
//   );
// }

// src/components/Container.tsx
import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";

export default function Container() {
  const dummyResults = Array.from(
    { length: 25 },
    (_, i) => `Nombre del museo ${i + 1}`
  );

  return (
    <main className="container">
      <Sidebar>
        {dummyResults.map((name, idx) => (
          <div key={idx} className="result-container">
            <p className={idx === 0 ? "result-name" : undefined}>{name}</p>
          </div>
        ))}
      </Sidebar>

      <Main>{/* Pass any detail view or children here */}</Main>
    </main>
  );
}
