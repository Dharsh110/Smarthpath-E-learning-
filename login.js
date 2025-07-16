// login.js
import { auth, signInWithEmailAndPassword } from './firebaseconnection.js';

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login Successful! Redirecting...");
      window.location.href = "index.html"; // Dashboard/home page
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});
