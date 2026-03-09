
"use client";
import React from "react";
import AvailabilityView from "./ui/availability/AvailabilityView";
import MeetingEventList from "./ui/meeting-list/MeetingEventList";
import UpcomingMeeting from "./ui/schedule-meeting/UpcomingMeeting";

export default function DashboardPage() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>

      <section style={{ marginTop: 20 }}>
        <h2>Availability</h2>
        <AvailabilityView />
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Meetings</h2>
        <MeetingEventList />
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Upcoming</h2>
        <UpcomingMeeting />
      </section>
    </div>
  );
}




// "use client";
// import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"

// export default function DashboardPage() {

// const { user } = useKindeBrowserClient()

// console.log("USER:", user)

// return (
// <div>Dashboard</div>
// )

// }







// // "use client"
// // import React, { useEffect } from 'react'
// // import { getFirestore,doc, getDoc } from "firebase/firestore";
// // import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
// // import { app } from './confing/FirebaseConfing'

// // function Dashboard() {
// //   const {user} = useKindeBrowserClient()
// //   const db = getFirestore(app);

// //   useEffect(() => {
// //   if (user?.email) {
// //     MeetingRegistered();
// //   }
// // }, [user]);

// //   const MeetingRegistered= async()=>{

// // const docRef = doc(db, "Meeting",user?.email );
// // const docSnap = await getDoc(docRef);

// // if (docSnap.exists()) {
// //   console.log("Document data:", docSnap.data());
// // } else {
// //   // docSnap.data() will be undefined in this case
// //   console.log("No such document!");
// // }
// //   }
// //   return (
// //     <div>
// //       dashboard
// // </div>
// //   )
// // }

// // export default Dashboard
