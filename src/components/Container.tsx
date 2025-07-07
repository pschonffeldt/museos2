import React from "react";

interface ContainerProps {
  searchText: string;
}

const Container: React.FC<ContainerProps> = ({ searchText }) => (
  <main className="container">
    {searchText ? (
      <p>
        Showing results for “<strong>{searchText}</strong>”
      </p>
    ) : (
      <p>Type something above and hit Buscar to see results</p>
    )}
  </main>
);

export default Container;
