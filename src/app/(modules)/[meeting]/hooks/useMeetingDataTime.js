// app/(modules)/[meeting]/hooks/useMeetingDataTime.js
import { useEffect, useState } from "react";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from '../../dashboard/confing/FirebaseConfing';
import { toast } from 'sonner';
import { format } from 'date-fns';

export function useMeetingDataTime(eventInfo, meetingInfo) {
  const [date, setDate] = useState(new Date());
  const [timeSlotes, setTimeSlots] = useState();
  const [enabletimeSlotes, setEnabletimeSlotes] = useState(false);

  const [selectedTime, setSelectedTime] = useState();
  const [step, setStep] = useState(1);

  const [note, setNote] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const db = getFirestore(app);

  useEffect(() => {
    eventInfo?.duration && createTimeSlot(eventInfo?.duration);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventInfo]);

  const createTimeSlot = (interval) => {
    const startTime = 8 * 60; // 8 AM in minutes
    const endTime = 22 * 60; // 10 PM in minutes
    const totalSlots = (endTime - startTime) / interval;
    const slots = Array.from({ length: totalSlots }, (_, i) => {
      const totalMinutes = startTime + i * interval;
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      const formattedHours = hours > 12 ? hours - 12 : hours; // Convert to 12-hour format
      const period = hours >= 12 ? 'PM' : 'AM';
      return `${String(formattedHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${period}`;
    });

    setTimeSlots(slots);
    console.log(slots);
  };

  const handleDate = (d) => {
    setDate(d);
    const dateFormat = format(d, "EEEE").toLowerCase();
    console.log("dateFormat", dateFormat);
    if (meetingInfo?.daysAvailable?.[dateFormat]) {
      setEnabletimeSlotes(true);
    } else {
      setEnabletimeSlotes(false);
    }
  };

  const handleScheduledMeeting = async () => {
    await setDoc(doc(db, "ScheduledMeeting", String(Date.now())), {
      meetingName: meetingInfo.meetingName,
      meetingEmail: meetingInfo.email,
      selectedTime: selectedTime,
      selectedDate: date,
      formatedDate: format(date, "PPP"),
      formatedTime: format(date, "t"),
      duration: eventInfo.duration,
      name: name,
      email: email,
      note: note,
    }).then((resp) => {
      toast("Meeting Scheduled Successfully");
    });
  };

  return {
    // state values
    date,
    timeSlotes,
    enabletimeSlotes,
    selectedTime,
    step,
    note,
    name,
    email,

    // setters (only those used by UI)
    setSelectedTime,
    setStep,
    setName,
    setEmail,
    setNote,

    // actions
    handleDate,
    handleScheduledMeeting,
  };
}