import {initializeApp} from 'firebase/app';
import {collection, getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDuV36FLI0nsZT_4ET6RemgmFhVu1-Qukw",
    authDomain: "knitart-c38ed.firebaseapp.com",
    projectId: "knitart-c38ed",
    storageBucket: "knitart-c38ed.appspot.com",
    messagingSenderId: "949312244882",
    appId: "1:949312244882:web:62f082ab70d81eef5faa4b"
};

const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const templatesColRef = collection(db, 'templates');
