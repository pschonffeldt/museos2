// src/components/Main.tsx
import React from "react";
import NavTop from "./NavTop";
import Details from "./Details";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <div className="content">
      <NavTop />
      <Details>{children}</Details>
    </div>
  );
}
