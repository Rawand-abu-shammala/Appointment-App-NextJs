"use client";
import { useEffect, useState } from "react";
import { getMeetings } from "./services/meetingService";

export default function useMeetings() {
  const [meetings, setMeetings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      setError("");
      try {
        const data = await getMeetings();
        if (mounted) setMeetings(data);
      } catch (err) {
        if (mounted) setError(err.message || "Failed to load meetings");
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => { mounted = false; };
  }, []);

  return { meetings, loading, error };
}