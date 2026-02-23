"use client"
// import CreateMeetingFormUI from "./CreateMeetingForm.ui"
import CreateMeetingFormUI from "./_components/CreateMeetingForm.ui"
import { useCreateMeetingFormLogic } from "./hooks/useCreateMeetingFormLogic"

export default function CreateMeetingForm() {
  const logic = useCreateMeetingFormLogic()
  return <CreateMeetingFormUI {...logic} />
}