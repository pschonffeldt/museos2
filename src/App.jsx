// src/App.tsx
import Layout from "./components/Layout";

/**
 * Root component.
 * Keep this file tiny—use it to mount global providers (router, theme, etc.)
 * and render your main Layout.
 */
export default function App() {
  return (
    <>
      {/* Layout contains the entire UI (sidebar, main, notifications, etc.) */}
      <Layout />
    </>
  );
}
