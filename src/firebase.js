import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDIuqx6hkP4GoqJpPvKvtax9lQv8ze8rig",
  authDomain: "knitart-23db8.firebaseapp.com",
  projectId: "knitart-23db8",
  storageBucket: "knitart-23db8.appspot.com",
  messagingSenderId: "610382603645",
  appId: "1:610382603645:web:8d74f70be8a3c99f7f9814"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const templatesColRef = collection(db, "templates");
