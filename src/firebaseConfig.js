// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAOn232EWEgky-L3Zpw6P2NyzTWxiR0C10",
  authDomain: "digiport-dc.firebaseapp.com",
  projectId: "digiport-dc",
  storageBucket: "digiport-dc.appspot.com",
  messagingSenderId: "228798034178",
  appId: "1:228798034178:web:6ed172228a86539711121b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
