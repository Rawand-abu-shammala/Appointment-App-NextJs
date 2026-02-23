// "use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CreateMeetingFormUI({
  meetingName,
  setMeetingName,
  onCreateMeeting,
}) {
  return (
    <div className="flex flex-col items-center gap-20 my-10">
      <Image width={200} height={200} src="/logo.png" alt="logo" />

      <div className="flex flex-col items-center gap-4 max-w-3xl mt-4">
        <h2 className="font-bold text-3xl text-[#039C96]">
          What is Your Meeting About ?
        </h2>

        <p className="text-slate-400 font-bold">Create your Meeting Here</p>

        <div className="w-full">
          <label className="text-slate-400">Meeting Name</label>

          <Input
            value={meetingName}
            onChange={(e) => setMeetingName(e.target.value)}
            className="mt-4"
            placeholder="Add Your Meeting Here"
          />
        </div>

        <Button
          onClick={onCreateMeeting}
          disabled={!meetingName}
          className="w-full mt-2 text-white cursor-pointer"
        >
          Create Meeting
        </Button>
      </div>
    </div>
  );
}
