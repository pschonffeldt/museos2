import React from "react";

export default function MuseumTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="details-title-container">
      <h2 className="details-title">
        Museo Nacional Aeronáutico y del Espacio
      </h2>
    </div>
  );
}
