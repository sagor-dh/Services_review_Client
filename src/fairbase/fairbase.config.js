// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_fqpJT_nBObj4LDaq7uSqwD0A6MYUiGk",
  authDomain: "doctor-4c3c8.firebaseapp.com",
  projectId: "doctor-4c3c8",
  storageBucket: "doctor-4c3c8.appspot.com",
  messagingSenderId: "280715785652",
  appId: "1:280715785652:web:88c40fdab775d05227aee1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app