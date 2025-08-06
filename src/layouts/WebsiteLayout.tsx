// src/layouts/WebsiteLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import WebsiteNav from "../components/website/WebsiteNav";
import WebsiteFooter from "../components/website/WebsiteFooter";

export default function WebsiteLayout() {
  return (
    <>
      <WebsiteNav />
      <main>
        {/* this is where /contact, /about, etc. will render */}
        <Outlet />
      </main>
      <WebsiteFooter />
    </>
  );
}
