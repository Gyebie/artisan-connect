// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk-dVEwGWASpagLsrEfugDdOW6whykWr4",
  authDomain: "artisan-connect-34ed5.firebaseapp.com",
  projectId: "artisan-connect-34ed5",
  storageBucket: "artisan-connect-34ed5.firebasestorage.app",
  messagingSenderId: "614514628028",
  appId: "1:614514628028:web:dcef0d1b15228d52e247b9",
  measurementId: "G-GBEJQGVNPX"
};
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

window.__firebaseReady(db);

console.log("[Firebase] Initialised ✓");
