// Barrel export in case you want to import the module programmatically
export { default as DashboardPage } from "./page";
export { default as DashboardLayout } from "./layout";
src/app/(modules)/dashboard/layout.js
import React from "react";
import SideNavBar from "./ui/_components/SideNavBar";
import UserHeader from "./ui/_components/UserHeader";

export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside style={{ width: 260, borderRight: "1px solid #e6e6e6", padding: 16 }}>
        <SideNavBar />
      </aside>
      <div style={{ flex: 1 }}>
        <header style={{ borderBottom: "1px solid #eee", padding: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ margin: 0 }}>Dashboard</h2>
          <UserHeader />
        </header>
        <main style={{ padding: 20 }}>{children}</main>
      </div>
    </div>
  );
}