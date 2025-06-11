// Import Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCWD_5Y-pm64xP80uzfNBVg5h6I2HmuKGo",
  authDomain: "smarthpath-e-learning.firebaseapp.com",
  projectId: "smarthpath-e-learning",
  storageBucket: "smarthpath-e-learning.appspot.com",
  messagingSenderId: "216969628964",
  appId: "1:216969628964:web:1e4b2372b16bca362277b1",
  measurementId: "G-5XZHZVLL8H"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export auth for use in other scripts
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut };
