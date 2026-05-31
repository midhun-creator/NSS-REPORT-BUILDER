// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA-bxGxWhtPaIbSopI1WXkDGGSSRiQp-w",
  authDomain: "nssreportbuilder.firebaseapp.com",
  projectId: "nssreportbuilder",
  storageBucket: "nssreportbuilder.firebasestorage.app",
  messagingSenderId: "608260137893",
  appId: "1:608260137893:web:431da270df65eadaaebe4c",
  measurementId: "G-7D3J6SRTFZ"
};

let auth = null;
let db = null;

// Initialize Firebase only if the API key has been added
if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  auth = firebase.auth();
  db = firebase.firestore();
  console.log("Firebase initialized successfully.");
} else {
  console.error("⚠️ FIREBASE NOT CONFIGURED: Please add your keys to firebase-config.js");
}
