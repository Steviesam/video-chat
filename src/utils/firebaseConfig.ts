import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  apiKey: "AIzaSyCQEf2UM0UhgzZswp27rAztmKR2L60DrCE",
  authDomain: "zoom-clone-7461f.firebaseapp.com",
  projectId: "zoom-clone-7461f",
  storageBucket: "zoom-clone-7461f.appspot.com",
  messagingSenderId: "173650582810",
  appId: "1:173650582810:web:f430412a36409eeac2e0a3",
  measurementId: "G-WFJCG64PGF",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");