import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export {db}

export const firebaseApp = initializeApp(firebaseConfig);

// Import the firebase object ("firebaseApp") like so in other files:
// import {firebaseApp} from "../config/firebaseConfig"
// Create an auth object ("auth") like so in other files:
// import {getAuth} from "firebase/auth";
// const auth = getAuth(firebaseApp);
// Create a firestore object ("db") like so in other files:
// import {getFirestore} from "firebase/firestore";
// const db = getFirestore(firebaseApp);
