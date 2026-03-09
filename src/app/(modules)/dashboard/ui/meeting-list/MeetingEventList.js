"use client";
import React from "react";
import useMeetings from "../../hooks/useMeetings";

export default function MeetingEventList() {
  const { loading, error, meetings } = useMeetings();

  if (loading) return <div>Loading meetings...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  if (!meetings || meetings.length === 0) {
    return <div>No meetings found.</div>;
  }

  return (
    <div>
      {meetings.map(m => (
        <div key={m.id} style={{ padding: 10, borderBottom: "1px solid #f5f5f5" }}>
          <div style={{ fontWeight: 700 }}>{m.title}</div>
          <div style={{ fontSize: 13, color: "#666" }}>{m.date} {m.time ? `• ${m.time}` : ""}</div>
          <div style={{ fontSize: 13 }}>{m.location}</div>
        </div>
      ))}
    </div>
  );
}