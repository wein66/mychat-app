import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyChcSqb3dg_wKW2-t0YzCvjW3q0RlVbAzs",
  authDomain: "chat-a0b68.firebaseapp.com",
  projectId: "chat-a0b68",
  storageBucket: "chat-a0b68.appspot.com",
  messagingSenderId: "631247313644",
  appId: "1:631247313644:web:b1907e23c62654a3daa3c9",
  measurementId: "G-ZEW35D5V9F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);

export { auth, database };