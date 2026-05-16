// =============================================
//  firebase-init.js  — load as a regular script
//  <script src="firebase-init.js"></script>
// =============================================

const firebaseConfig = {
    apiKey:            "AIzaSyAk-dVEwGWASpagLsrEfugDd0W6whykWr4",
    authDomain:        "artisan-connect-34ed5.firebaseapp.com",
    projectId:         "artisan-connect-34ed5",
    storageBucket:     "artisan-connect-34ed5.firebasestorage.app",
    messagingSenderId: "614514628028",
    appId:             "1:614514628028:web:dcef0d1b15228d52e247b9",
    measurementId:     "G-GBEJQGVNPX"
};

// Use dynamic import so this file doesn't need type="module"
(async () => {
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js");
    const { getFirestore }  = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
    const app = initializeApp(firebaseConfig);
    const db  = getFirestore(app);
    window.__db = db;
    console.log("[Firebase] Initialised ✓");
})();
