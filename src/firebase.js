import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBI8WWq6lMx47wcsRonE_IeXsP-ilavKr8",
  authDomain: "knitart-c068f.firebaseapp.com",
  projectId: "knitart-c068f",
  storageBucket: "knitart-c068f.appspot.com",
  messagingSenderId: "1066879530161",
  appId: "1:1066879530161:web:cfb10635fba3a2bcf4de90"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const templatesColRef = collection(db, "templates");
