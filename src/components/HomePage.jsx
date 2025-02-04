import React from "react";

function HomePage() {
  return <div>HomePage</div>;
}

export default HomePage;
// import React, { useEffect, useState } from "react";
// import {
//   collection,
//   addDoc,
//   doc,
//   updateDoc,
//   arrayUnion,
//   getDocs, // Import getDocs
//   query, // Import query
//   where, // Import where
// } from "firebase/firestore";
// import { db } from "../firebase";

// function HomePage() {
//   const [userDocId, setUserDocId] = useState(localStorage.getItem("userDocId")); // Get from local storage

//   useEffect(() => {
//     if (userDocId) {
//       return;
//     }

//     const createUserDocument = async () => {
//       try {
//         const usersCollection = collection(db, "userDB");
//         const q = query(
//           usersCollection,
//           where("uid", "==", /* the user's uid */ "")
//         ); // replace with actual user id
//         const querySnapshot = await getDocs(q);
//         if (querySnapshot.empty) {
//           const newUserDocRef = await addDoc(usersCollection, {
//             entries: [], // Initialize with an empty array
//           });
//           localStorage.setItem("userDocId", newUserDocRef.id);
//           setUserDocId(newUserDocRef.id);
//           console.log("New user document created with ID:", newUserDocRef.id);
//         } else {
//           querySnapshot.forEach((doc) => {
//             localStorage.setItem("userDocId", doc.id);
//             setUserDocId(doc.id);
//             console.log("Existing user document ID:", doc.id);
//           });
//         }
//       } catch (error) {
//         console.error("Error creating/fetching user document:", error);
//       }
//     };

//     createUserDocument();
//   }, []);

//   const addEntryToDocument = async (newEntry) => {
//     if (!userDocId) {
//       console.error("User document ID not found. Cannot add entry.");
//       return; // or handle this case appropriately (e.g., show a message)
//     }

//     try {
//       const docRef = doc(db, "userDB", userDocId); // Use userDocId from state

//       await updateDoc(docRef, {
//         entries: arrayUnion(newEntry),
//       });

//       console.log("Entry successfully added to document!");
//     } catch (error) {
//       console.error("Error adding entry:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>HomePage Data</h2>
//       <button
//         type="button"
//         className="border rounded-md bg-stone-100 hover:bg-stone-200"
//         onClick={() =>
//           addEntryToDocument({
//             amount: 1500,
//             createdAT: new Date(),
//             type: "INCOME",
//           })
//         }
//       >
//         add data to firestore
//       </button>
//     </div>
//   );
// }

// export default HomePage;

// import React from "react";
// import {
//   collection,
//   addDoc,
//   doc,
//   updateDoc,
//   arrayUnion,
// } from "firebase/firestore";
// import { db } from "../firebase";
// function HomePage() {
//   //   const addData = async (data) => {
//   //     try {
//   //       //       const collectionRef = collection(db, "userDB");
//   //       const collectionRef = collection(db, "userDB", "57xhDMToRTo4FL8I3Hxj");
//   //       const docRef = await addDoc(collectionRef, data);
//   //       console.log("Document written with ID:", docRef.id);
//   //     } catch (error) {
//   //       console.error("Error adding document:", error);
//   //     }
//   //   };
//   const addEntryToDocument = async (newEntry) => {
//     try {
//       const docRef = doc(db, "userDB", "57xhDMToRTo4FL8I3Hxj");

//       // Add the new entry to the 'entries' array using arrayUnion
//       await updateDoc(docRef, {
//         entries: arrayUnion(newEntry),
//       });

//       console.log("Entry successfully added to document!");
//     } catch (error) {
//       console.error("Error adding entry:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>HomePage Data</h2>
//       <button
//         type="button"
//         className="border rounded-md bg-stone-100 hover:bg-stone-200"
//         onClick={() =>
//           addEntryToDocument({
//             amount: 1500,
//             createdAT: new Date(),
//             type: "INCOME",
//           })
//         }
//       >
//         add data to firestore
//       </button>
//     </div>
//   );
// }

// export default HomePage;
