// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCog9kvQI1va08Ra_SXzo7ZiUGchTN3Pec",
  authDomain: "hayyak-db039.firebaseapp.com",
  projectId: "hayyak-db039",
  storageBucket: "hayyak-db039.appspot.com",
  messagingSenderId: "766242487044",
  appId: "1:766242487044:web:3e3d4c857afaf88953ee51",
  measurementId: "G-7V8ED3PD91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the services you'll need
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);