"use client"

import { useMemo } from "react"

export function usePreviewMeetingLogic({ formValue }) {
  const timeSlotes = useMemo(() => {
    const interval = formValue?.duration
    if (!interval) return undefined

    const startTime = 8 * 60 // 8:00
    const endTime = 22 * 60 // 22:00
    const totalSlots = Math.floor((endTime - startTime) / interval)
    if (totalSlots <= 0) return []

    const slots = Array.from({ length: totalSlots }, (_, i) => {
      const totalMinutes = startTime + i * interval
      const hours = Math.floor(totalMinutes / 60)
      const minutes = totalMinutes % 60
      const formattedHours = hours > 12 ? hours - 12 : hours
      const period = hours >= 12 ? "PM" : "AM"
      return `${String(formattedHours).padStart(2, "0")}:${String(minutes).padStart(2, "0")} ${period}`
    })

    return slots
  }, [formValue?.duration])

  return {
    formValue,
    timeSlotes,
  }
}