import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDk9UzXcYsjUeX9rz8BUM1NDj33Cue5DIE",
  authDomain: "budget-tracker-848c1.firebaseapp.com",
  projectId: "budget-tracker-848c1",
  storageBucket: "budget-tracker-848c1.firebasestorage.app",
  messagingSenderId: "100967386842",
  appId: "1:100967386842:web:735240272cadbb0b0d1fe3",
  measurementId: "G-N71Y6QYWHQ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Get a reference to the Firestore database

export { db }; // Export the Firestore instance
