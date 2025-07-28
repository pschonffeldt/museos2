// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ContactPage from "./pages/Contactpage";
import Release from "./pages/Release";
import Aboutpage from "./pages/Aboutpage";
import Layout from "./components/Layout"; // your museum app lives here

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/release" element={<Release />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/app" element={<Layout />} />
      </Routes>
    </Router>
  );
}
