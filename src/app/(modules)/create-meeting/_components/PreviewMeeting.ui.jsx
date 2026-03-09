"use client"

import React from "react"
import Image from "next/image"
import { Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"

export default function PreviewMeetingUI({ formValue, timeSlotes, onDateChange }) {
  return (
    <div className="p-7 bg-white">
      <div className="flex gap-6 items-start">
        <div className="w-1/3 min-w-[220px] flex flex-col items-start">
          <div className="rounded-full p-2 bg-white mb-4">
            <Image width={150} height={150} alt="logo" src="/logo.png" />
          </div>

          <h2 className="text-3xl font-extrabold text-emerald-600 mb-3">
            {formValue?.meetingName ?? "Meeting Name"}
          </h2>

          <div className="text-sm text-slate-500 mb-4">Program</div>
          <div className="text-base font-medium mb-4">{formValue?.program ?? "-"}</div>

          <div className="flex items-center gap-3 text-slate-700 mb-4">
            <Clock />
            <div className="font-medium">{formValue?.duration ?? "30"} Min</div>
          </div>

          <div className="text-sm text-slate-500">Date</div>
          <div className="mt-1 text-slate-700">{formValue?.date ? new Date(formValue.date).toLocaleDateString() : "No date selected"}</div>
        </div>

        <div className="flex-1 flex gap-6 min-w-0">
          <div className="w-[360px] max-w-[40%] min-w-[260px] border rounded-md p-3 overflow-auto">
            <CalendarComponent numberOfMonths={1} value={formValue?.date ?? null} onChange={(d) => onDateChange?.(d)} />
          </div>

          <div className="flex-1 border rounded-md p-4 h-[420px] overflow-auto">
            <h3 className="font-semibold text-slate-800 mb-3">Available Time Slots</h3>

            {timeSlotes && timeSlotes.length > 0 ? (
              <div className="flex flex-col gap-3">
                {timeSlotes.map((slot, idx) => (
                  <Button key={idx} variant="outline" className="justify-start px-3 py-2">
                    {slot}
                  </Button>
                ))}
              </div>
            ) : (
              <div className="text-slate-400">No time slots (choose a duration)</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
