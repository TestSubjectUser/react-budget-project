import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Get a reference to the Firestore database

export { db }; // Export the Firestore instance
