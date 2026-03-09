"use client";
import React from "react";

export default function UserHeader() {
  // Simple header placeholder (avatar, name, actions)
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div style={{ textAlign: "right", marginRight: 8 }}>
        <div style={{ fontSize: 14 }}>روند سامي</div>
        <div style={{ fontSize: 12, color: "#666" }}>online</div>
      </div>
      <div style={{
        width: 36, height: 36, borderRadius: 999, background: "#ddd", display: "flex",
        alignItems: "center", justifyContent: "center", fontWeight: 700
      }}>
        RS
      </div>
    </div>
  );
}