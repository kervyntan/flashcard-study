// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHTrGh4L_lYklXJrfLt94ERq4QuxILnJg",
  authDomain: "flashcard-study-c6eae.firebaseapp.com",
  projectId: "flashcard-study-c6eae",
  storageBucket: "flashcard-study-c6eae.appspot.com",
  messagingSenderId: "207904484194",
  appId: "1:207904484194:web:7ca91ed8cd52791ea05a3b"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

export { db, auth, storage };