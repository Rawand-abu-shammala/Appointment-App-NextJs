"use client";
import React from "react";

export default function SideNavBar() {
  return (
    <nav>
      <div style={{ fontWeight: 700, marginBottom: 12 }}>App</div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ marginBottom: 8 }}><a href="/dashboard">Overview</a></li>
        <li style={{ marginBottom: 8 }}><a href="/dashboard/availability">Availability</a></li>
        <li style={{ marginBottom: 8 }}><a href="/dashboard/meeting-list">Meetings</a></li>
        <li><a href="/dashboard/schedule-meeting">Schedule</a></li>
      </ul>
    </nav>
  );
}