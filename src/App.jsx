import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import WebsiteLayout from "./layouts/WebsiteLayout";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ReleasePage from "./pages/Release"; // Updated import path to match Release.tsx
import Homepage from "./pages/Homepage";
import ListingLayout from "./layouts/ListingLayout";
import DashboardLayout from "./layouts/DashboardLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ——— Static pages ——— */}
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Homepage />} />
          <Route path="release" element={<ReleasePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>

        {/* ——— Feature: Museums listing ——— */}
        <Route path="museos/*" element={<ListingLayout />} />

        {/* ——— Feature: Dashboard ——— */}
        <Route path="dashboard/*" element={<DashboardLayout />} />

        {/* catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
