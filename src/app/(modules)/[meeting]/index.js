"use client";

import DateTimeComponent from "./_components/DateTimeComponent";
import MeetingDataTime from "./_components/MeetingDataTime";
import UserForm from "./_components/UserForm";
import { useMeetingPage } from "./hooks/useMeetingPage";

export default function MeetingPage({ params }) {
  const { eventId } = useMeetingPage(params);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <MeetingDataTime eventId={eventId} />
        <DateTimeComponent eventId={eventId} />
      </div>

      <UserForm eventId={eventId} />
    </div>
  );
}