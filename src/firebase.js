import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDxWIVyilzoMEaXcboDiD-TH5MqDl1XJoo",
  authDomain: "knitart-432d6.firebaseapp.com",
  projectId: "knitart-432d6",
  storageBucket: "knitart-432d6.appspot.com",
  messagingSenderId: "566278852449",
  appId: "1:566278852449:web:e2fbf95d0d329d5e79bf20"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const templatesColRef = collection(db, "templates");
