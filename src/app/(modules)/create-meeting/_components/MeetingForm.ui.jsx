"use client"

import React from "react"
import { ChevronLeft } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import programs from "../../_utils/program"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export default function MeetingFormUI({
  program,
  setProgram,
  meetingName,
  setMeeting,
  duration,
  setDuration,
  programsURL,
  setProgramsURL,
  onCreateMeeting,
}) {
  return (
    <aside className="p-6 border-r h-full bg-white">
      <div className="mb-4">
        <Link href="/dashboard" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
          <ChevronLeft size={18} />
          <span className="text-sm">Cancel</span>
        </Link>
      </div>

      <h1 className="font-extrabold text-2xl text-slate-900 mb-2">Create New Meeting</h1>
      <p className="text-sm text-slate-500 mb-6">Create a meeting and share it with your students.</p>

      <div className="mb-5">
        <label className="block text-sm font-medium text-slate-700 mb-2">Meeting Name*</label>
        <Input
          value={meetingName ?? ""}
          onChange={(e) => setMeeting(e.target.value)}
          placeholder="Meeting Name"
        />
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium text-slate-700 mb-2">Duration*</label>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="w-36 bg-emerald-600 hover:bg-emerald-700">
                <span className="font-medium">{duration} Min</span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="bg-white border shadow-md w-40">
              <DropdownMenuItem onClick={() => setDuration(15)}>15 Min</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDuration(30)}>30 Min</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDuration(45)}>45 Min</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDuration(60)}>60 Min</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium text-slate-700 mb-3">Choose Program*</label>

        <div className="grid grid-cols-3 gap-3">
          {programs.map((item, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setProgram(item.name)}
              className={`flex flex-col items-center gap-2 p-3 rounded-lg border transition-shadow text-center ${
                program === item.name ? "ring-2 ring-emerald-200 bg-emerald-50 shadow-sm" : "bg-white hover:shadow"
              }`}
            >
              <Image width={56} height={56} alt={item.name} src={item.icon ?? item.image} />
              <span className="text-xs text-slate-700">{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      {program && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-2">Add {program} URL*</label>
          <Input
            value={programsURL ?? ""}
            onChange={(e) => setProgramsURL(e.target.value)}
            placeholder="https://your-link.example"
          />
        </div>
      )}

      <div className="mt-6">
        <Button
          onClick={onCreateMeeting}
          disabled={!(meetingName && duration && programsURL && program)}
          className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50"
        >
          Create
        </Button>
      </div>
    </aside>
  )
}

