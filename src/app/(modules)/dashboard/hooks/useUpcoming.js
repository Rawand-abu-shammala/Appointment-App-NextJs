"use client";
import { useEffect, useState } from "react";
import { getUpcomingMeetings } from "./services/meetingService";

export default function useUpcoming() {
  const [upcoming, setUpcoming] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      setError("");
      try {
        const data = await getUpcomingMeetings();
        if (mounted) setUpcoming(data);
      } catch (err) {
        if (mounted) setError(err.message || "Failed to load upcoming meetings");
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => { mounted = false; };
  }, []);

  return { upcoming, loading, error };
}