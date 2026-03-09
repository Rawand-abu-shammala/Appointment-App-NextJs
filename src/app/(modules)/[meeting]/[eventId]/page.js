"use client"
import React, { useEffect, useState } from 'react'
import MeetingDataTime from '../_components/MeetingDataTime'
import { doc, getDoc, collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import { app } from '../../dashboard/confing/FirebaseConfing';


function SharedEventMeeting({params}) {
    const db = getFirestore(app);

    const[meetingInfo,setMeetingInfo] = useState()
      const[eventInfo,setEventInfo] = useState()
      
    useEffect(()=>{

      
    params&&getMeetingAndEventDetails()
  },[params])
   const getMeetingAndEventDetails= async()=>{
   const q = query(collection(db, "Meeting"), where("meetingName", "==", params.meeting ));

      const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setMeetingInfo(doc.data());
    });

      const docRef = doc(db, "Event", params.eventId );
    const docSnap = await getDoc(docRef);

    setEventInfo(docSnap.data())

    }

  
  return (
    <div>

      <MeetingDataTime eventInfo={eventInfo} meetingInfo={meetingInfo}/>
    </div>
  )
}

export default SharedEventMeeting



// "use client"
// import React, { useEffect, useState } from 'react'
// import MeetingDataTime from '../_components/MeetingDataTime'
// import { doc, getDoc, collection, query, where, getDocs, getFirestore } from "firebase/firestore";
// import { app } from '../../dashboard/confing/FirebaseConfing';


// function SharedEventMeeting({params}) {
//     const db = getFirestore(app);

//     const[meetingInfo,setMeetingInfo] = useState()
//       const[eventInfo,setEventInfo] = useState()
      
//     useEffect(()=>{

      
//     params&&getMeetingAndEventDetails()
//   },[params])
//    const getMeetingAndEventDetails= async()=>{
//    const q = query(collection(db, "Meeting"), where("meetingName", "==", params.meeting ));

//       const querySnapshot = await getDocs(q);
//     querySnapshot.forEach((doc) => {
//       // doc.data() is never undefined for query doc snapshots
//       setMeetingInfo(doc.data());
//     });

//       const docRef = doc(db, "Event", params.eventId );
//     const docSnap = await getDoc(docRef);

//     setEventInfo(docSnap.data())

//     }

  
//   return (
//     <div>

//       <MeetingDataTime eventInfo={eventInfo} meetingInfo={meetingInfo}/>
//     </div>
//   )
// }

// export default SharedEventMeeting