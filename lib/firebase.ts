import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey:
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY ||
    process.env.VITE_FIREBASE_API_KEY ||
    "YOUR_API_KEY",
  authDomain:
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ||
    process.env.VITE_FIREBASE_AUTH_DOMAIN ||
    "YOUR_PROJECT.firebaseapp.com",
  projectId:
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ||
    process.env.VITE_FIREBASE_PROJECT_ID ||
    "YOUR_PROJECT_ID",
  storageBucket:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ||
    process.env.VITE_FIREBASE_STORAGE_BUCKET ||
    "YOUR_PROJECT.appspot.com",
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ||
    process.env.VITE_FIREBASE_MESSAGING_SENDER_ID ||
    "YOUR_SENDER_ID",
  appId:
    process.env.NEXT_PUBLIC_FIREBASE_APP_ID ||
    process.env.VITE_FIREBASE_APP_ID ||
    "YOUR_APP_ID",
  measurementId:
    process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ||
    process.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Warn if any placeholder values are still present (i.e., env vars not set)
const placeholderValues = [
  "YOUR_API_KEY",
  "YOUR_PROJECT.firebaseapp.com",
  "YOUR_PROJECT_ID",
  "YOUR_PROJECT.appspot.com",
  "YOUR_SENDER_ID",
  "YOUR_APP_ID",
];
if (placeholderValues.some(val => Object.values(firebaseConfig).includes(val))) {
  console.warn("Firebase configuration contains placeholder values. Ensure environment variables are set for production.");
}


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app;
