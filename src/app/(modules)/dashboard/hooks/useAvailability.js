"use client";
import { useEffect, useState } from "react";
import { getAvailability } from "./services/availabilityService";

export default function useAvailability() {
  const [availability, setAvailability] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      setError("");
      try {
        const data = await getAvailability();
        if (mounted) setAvailability(data);
      } catch (err) {
        if (mounted) setError(err.message || "Failed to load availability");
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => { mounted = false; };
  }, []);

  return { availability, loading, error };
}