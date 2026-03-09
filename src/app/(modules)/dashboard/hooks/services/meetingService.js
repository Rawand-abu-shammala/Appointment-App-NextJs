import { db } from "@/lib/confing/FirebaseConfing";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";

export async function getMeetings() {
  const snapshot = await getDocs(collection(db, "meetings"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function getUpcomingMeetings() {
  // Example: return next 10 meetings ordered by date (assumes `date` is ISO string)
  const q = query(collection(db, "meetings"), orderBy("date", "asc"));
  const snapshot = await getDocs(q);
  // Optionally filter in code for future dates
  const now = new Date().toISOString();
  return snapshot.docs
    .map(doc => ({ id: doc.id, ...doc.data() }))
    .filter(m => !m.date || m.date >= now)
    .slice(0, 10);
}