"use client";
import React from "react";
import useAvailability from "../../hooks/useAvailability";

export default function AvailabilityView() {
  const { loading, error, availability } = useAvailability();

  if (loading) return <div>Loading availability...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  if (!availability || availability.length === 0) {
    return <div>No availability set.</div>;
  }

  return (
    <div>
      {availability.map(item => (
        <div key={item.id} style={{ padding: 8, borderBottom: "1px solid #f0f0f0" }}>
          <div><strong>{item.date}</strong></div>
          <div style={{ fontSize: 13, color: "#555" }}>{item.notes || "—"}</div>
        </div>
      ))}
    </div>
  );
}