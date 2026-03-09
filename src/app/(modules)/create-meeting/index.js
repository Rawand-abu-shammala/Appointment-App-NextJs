"use client"
import React, { useState } from "react"
import MeetingFormUI from "./_components/MeetingForm.ui"
import PreviewMeetingUI from "./_components/PreviewMeeting.ui"
import { useMeetingFormLogic } from "./hooks/useMeetingFormLogic"
import { usePreviewMeetingLogic } from "./hooks/usePreviewMeetingLogic"

export default function CreateMeeting() {
  const [formValue, setFormValue] = useState({
    program: undefined,
    meetingName: undefined,
    duration: 30,
    programsURL: undefined,
    date: undefined,
  })

  const meeting = useMeetingFormLogic({ setFormValue })
  const preview = usePreviewMeetingLogic({ formValue })

  return (
    <div className="grid md:grid-cols-3 grid-cols-1">
      <div className="p-3 shadow-md border border-slate-300 h-screen">
        <MeetingFormUI {...meeting} />
      </div>

      <div className="col-span-2">
        <PreviewMeetingUI {...preview} formValue={formValue} />
      </div>
    </div>
  )
}