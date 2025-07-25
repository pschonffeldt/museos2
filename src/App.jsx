// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";
import Layout from "./components/Layout"; // your museum app lives here

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/app" element={<Layout />} />
      </Routes>
    </Router>
  );
}
