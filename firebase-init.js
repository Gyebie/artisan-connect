// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);