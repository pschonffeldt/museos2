// src/components/Thinbar.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import { AvatarIcon, GearIcon } from "@radix-ui/react-icons";

interface ThinbarProps {
  children?: React.ReactNode;
}

export default function Thinbar({ children }: ThinbarProps) {
  // Define feature badges and their routes
  const features = [
    { letter: "L", path: "/museos" },
    { letter: "D", path: "/dashboard" },
  ];

  return (
    <div className="thin-nav">
      <div className="thin-nav-toolkit">
        <div className="thin-nav-tools">
          {features.map((feat) => (
            <NavLink
              key={feat.path}
              to={feat.path}
              className={({ isActive }) =>
                isActive ? "feature-badge active" : "feature-badge"
              }
            >
              <h2 className="feature-badge-letter">{feat.letter}</h2>
            </NavLink>
          ))}
          {children}
        </div>
      </div>

      <div className="thin-nav-user">
        <AvatarIcon className="thin-icon" />
        <GearIcon className="thin-icon" />
      </div>
    </div>
  );
}
