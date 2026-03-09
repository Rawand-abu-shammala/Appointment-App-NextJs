import { db } from "@/lib/confing/FirebaseConfing";
import { collection, getDocs } from "firebase/firestore";

export async function getAvailability() {
  // Simple Firestore read; wrap in try/catch if needed
  const snapshot = await getDocs(collection(db, "availability"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}