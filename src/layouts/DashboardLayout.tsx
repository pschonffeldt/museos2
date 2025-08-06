// src/layouts/DashboardLayout.tsx
import React from "react";
import Thinbar from "../components/Thinbar";

export default function DashboardLayout() {
  return (
    <div className="app-container">
      <Thinbar />
      <main className="dashboard-content">
        {/* you’ll replace this with your real dashboard routes/components */}
        <h1>Dashboard coming soon</h1>
      </main>
    </div>
  );
}
