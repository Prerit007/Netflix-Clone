// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd_LQbsyZOywxIZF_FqVPjS5Hj0AcOCiQ",
  authDomain: "netflix-clone-48b18.firebaseapp.com",
  projectId: "netflix-clone-48b18",
  storageBucket: "netflix-clone-48b18.appspot.com",
  messagingSenderId: "569962720271",
  appId: "1:569962720271:web:a1770752ea60feaa82077a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
