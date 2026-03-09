import { useMemo } from "react";

export function useMeetingPage(params) {
  const eventId = useMemo(() => {
    return params?.eventId ?? params?.meeting ?? null;
  }, [params]);

  return {
    eventId,
  };
}