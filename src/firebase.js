// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyAnWkwegIBXAOoZxo5ZLEqq21ZgVbJ_NfI",
  authDomain: "chat-app-ddea3.firebaseapp.com",
  projectId: "chat-app-ddea3",
  storageBucket: "chat-app-ddea3.appspot.com",
  messagingSenderId: "315796855428",
  appId: "1:315796855428:web:279b0d9860ee295346c0d1",
  measurementId: "G-XVB2NEB75T",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
