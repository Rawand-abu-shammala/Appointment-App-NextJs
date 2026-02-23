"use client"
import { useState } from "react"
import { setDoc, getFirestore, doc } from "firebase/firestore"
import { app } from "@/app/(modules)/dashboard/confing/FirebaseConfing"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { useRouter } from "next/navigation"

export function useCreateMeetingFormLogic() {
  const [meetingName, setMeetingName] = useState("")
  const { user } = useKindeBrowserClient()
  const router = useRouter()
  const db = getFirestore(app)

  const onCreateMeeting = async () => {
    if (!meetingName || !user?.email) return

    await setDoc(doc(db, "Meeting", user.email), {
      meetingName: meetingName,
      email: user.email,
      userName: user.given_name + " " + user.family_name,
    })

    console.log("document saved")
    router.push("/dashboard")
  }

  return {
    meetingName,
    setMeetingName,
    onCreateMeeting,
  }
}