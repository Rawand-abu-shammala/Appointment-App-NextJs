"use client"
import { useEffect, useState } from "react"
import { doc, getFirestore, setDoc } from "firebase/firestore"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { app } from "@/lib/confing/FirebaseConfing" 
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export function useMeetingFormLogic({ setFormValue }) {
  const [program, setProgram] = useState()
  const [meetingName, setMeeting] = useState()
  const [duration, setDuration] = useState(30)
  const [programsURL, setProgramsURL] = useState()
  const [date, setDate] = useState()

  const router = useRouter()
  const db = getFirestore(app)
  const { user } = useKindeBrowserClient()

  useEffect(() => {
    if (typeof setFormValue === "function") {
      setFormValue({
        program,
        meetingName,
        duration,
        programsURL,
        date,
      })
    }
  }, [program, meetingName, duration, programsURL, date, setFormValue])

  const buildDocData = () => {
    const raw = {
      id: new Date().getTime().toString(),
      date: date ?? new Date().toISOString(),
      program,
      meetingName,
      duration,
      programsURL,
      mettingId: user?.email ? doc(db, "Meeting", user.email) : undefined,
      createdBy: user?.email,
    }
    return Object.fromEntries(Object.entries(raw).filter(([_, v]) => v !== undefined))
  }

  const onCreateMeeting = async () => {
    try {
      const idd = new Date().getTime().toString()
      const data = buildDocData()
      await setDoc(doc(db, "Event", idd), data)
      toast.success("New meeting added")
      router.push("/dashboard/meeting-list")
    } catch (err) {
      console.error("create meeting error:", err)
      toast.error("Failed to create meeting")
    }
  }

  return {
    program,
    setProgram,
    meetingName,
    setMeeting,
    duration,
    setDuration,
    programsURL,
    setProgramsURL,
    date,
    setDate,
    onCreateMeeting,
  }
}