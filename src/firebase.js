import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB1FRL-JiMJsc9AJmsAuBSyAsJ7HcchVNE",
  authDomain: "react-ts-study.firebaseapp.com",
  projectId: "react-ts-study",
  storageBucket: "react-ts-study.firebasestorage.app",
  messagingSenderId: "796025215277",
  appId: "1:796025215277:web:05d8c43e86d2f810969ba4",
  measurementId: "G-HCQE1GSNCL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);