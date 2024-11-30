// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

// Firebase configuration (replace with your actual Firebase project details)
const firebaseConfig = {
    apiKey: "AIzaSyCBj61ozUOQYwyOeDrYitLElAzUaK3Kzfk",
    authDomain: "myfirst-webapp.firebaseapp.com",
    projectId: "myfirst-webapp",
    storageBucket: "myfirst-webapp.firebasestorage.app",
    messagingSenderId: "862813763911",
    appId: "1:862813763911:web:08072b25920d1bd921b462",
    measurementId: "G-LFC2EYVYQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign In Button Click Event
document.getElementById("signInBtn").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully signed in
        alert("Sign-in successful!");

        // Redirect user to another page after sign-in (e.g., dashboard.html)
        window.location.href = "dashboard.html";  // Change to the page you want
      })
      .catch((error) => {
        // Handle error (e.g., incorrect credentials)
        alert("Error: " + error.message);
      });
  } else {
    alert("Please fill out both email and password.");
  }
});
