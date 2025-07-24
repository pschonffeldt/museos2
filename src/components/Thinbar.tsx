// src/components/Thinbar.tsx
import { AvatarIcon, GearIcon } from "@radix-ui/react-icons";
import React from "react";

interface ThinbarProps {
  /** Anything you want to render inside the results list (each result row, empty state msg, etc.) */
  children: React.ReactNode;
  /** Callback to notify parent which museum was clicked (id is provided from each row) */
}

/**
 * Static left navigation column.
 * - Renders the app tool.
 * - Shows whatever result items are passed via `children`.
 * - `onSelect` is exposed so each child item can call it (or you can handle clicks in parent).
 */
export default function Thinbar({}: ThinbarProps) {
  // onSelect isn't used directly here; children should call it themselves (or parent handles clicks).
  return (
    <div className="thin-nav">
      {/* .thin-nav-toolkit container */}
      <div className="thin-nav-toolkit">
        <div className="thin-nav-tools">
          {/* For the records fature */}
          <div className="feature-badge">
            <h2 className="feature-badge-letter">L</h2>
          </div>
          <div className="feature-badge">
            <h2 className="feature-badge-letter">M</h2>
          </div>
          <div className="feature-badge">
            <h2 className="feature-badge-letter">F</h2>
          </div>
          <div className="feature-badge">
            <h2 className="feature-badge-letter">L</h2>
          </div>
          <div className="feature-badge">
            <h2 className="feature-badge-letter">R </h2>
          </div>
          <div className="feature-badge">
            <h2 className="feature-badge-letter">R </h2>
          </div>
        </div>
      </div>

      <div className="thin-nav-user">
        {/* For the user admin fature */}
        <AvatarIcon className="thin-icon"></AvatarIcon>
        {/* For the settings fature */}
        <GearIcon className="thin-icon"></GearIcon>
      </div>
    </div>
  );
}
