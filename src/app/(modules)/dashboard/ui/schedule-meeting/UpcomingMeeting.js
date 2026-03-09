"use client";
import React from "react";
import useUpcoming from "../../hooks/useUpcoming";

export default function UpcomingMeeting() {
  const { loading, error, upcoming } = useUpcoming();

  if (loading) return <div>Loading upcoming meetings...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  if (!upcoming || upcoming.length === 0) {
    return <div>No upcoming meetings.</div>;
  }

  return (
    <div>
      {upcoming.map(m => (
        <div key={m.id} style={{ padding: 10, borderBottom: "1px solid #f0f0f0" }}>
          <div style={{ fontWeight: 700 }}>{m.title}</div>
          <div style={{ fontSize: 13, color: "#666" }}>{m.date} {m.time || ""}</div>
        </div>
      ))}
    </div>
  );
}