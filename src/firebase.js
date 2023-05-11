import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBACqIUZo28gtOK10Osy3Ba1aTycg1hh7g",
  authDomain: "knitart-e3b35.firebaseapp.com",
  projectId: "knitart-e3b35",
  storageBucket: "knitart-e3b35.appspot.com",
  messagingSenderId: "962468210182",
  appId: "1:962468210182:web:6d6deb57d0f34dc1650587",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const templatesColRef = collection(db, "templates");
