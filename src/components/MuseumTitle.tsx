// src/components/MuseumTitle.tsx
import type { MuseumRecord } from "../lib/types";

interface MuseumTitleProps {
  /** Single museum record to display as the page title */
  museum: MuseumRecord;
}

/**
 * Renders the big title area for the selected museum.
 * - Keeps your original classNames so existing CSS is untouched.
 * - Only responsibility: show the museum name.
 */
export default function MuseumTitle({ museum }: MuseumTitleProps) {
  return (
    <div className="details-title-container">
      <h2 className="details-title">{museum.museum_name}</h2>
    </div>
  );
}
