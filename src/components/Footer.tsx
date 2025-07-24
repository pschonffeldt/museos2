// src/components/Footer.tsx

/**
 * Site footer.
 * - Shows build/version info and author credit.
 * - Keep classNames as-is so existing CSS keeps working.
 * - Added rel="noreferrer noopener" for security when using target="_blank".
 *
 * Tip: If you plan to update the version/date often, consider pulling them
 * from an env var or a constants file instead of hard-coding.
 */
export default function Footer() {
  return (
    <footer className="footer-container">
      {/* Static version string */}
      <p className="footer-text">Versión 1.1.4 - 24 Jul 2025</p>

      {/* Author credit + external link */}
      <p className="footer-text">
        Creado por{" "}
        <a
          href="https://pschonffeldt.dev/"
          target="_blank"
          rel="noreferrer noopener"
        >
          pschonffeldt
        </a>
      </p>
    </footer>
  );
}
