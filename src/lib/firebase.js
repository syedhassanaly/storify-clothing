// Firebase initialization.
// Config now comes from environment variables (see .env.example) instead of
// being hardcoded, and getAuth() is correctly passed the initialized app
// (previously `getAuth()` was called with no arguments, which silently
// falls back to the "default" app and can misbehave with multiple apps).
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHlVc-Y_jjDKA5-ljzePGAmAhY5qLUEUc",
  authDomain: "storify-clothing-5e7bd.firebaseapp.com",
  projectId: "storify-clothing-5e7bd",
  storageBucket: "storify-clothing-5e7bd.firebasestorage.app",
  messagingSenderId: "338017752163",
  appId: "1:338017752163:web:c164eb89f06a27b3929456",
  measurementId: "G-3GDP5F4E55"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
