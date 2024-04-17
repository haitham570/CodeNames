// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFEhoeOc16t0Tsro7om3gfbx8obpU8EZ0",
  authDomain: "codenames-87773.firebaseapp.com",
  projectId: "codenames-87773",
  storageBucket: "codenames-87773.appspot.com",
  messagingSenderId: "998528111549",
  appId: "1:998528111549:web:5f2815816660215dd8f8d4",
  measurementId: "G-JVYN23F8E4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;

