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

      <Main children={undefined} />
    </main>
  );
}
