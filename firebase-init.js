// =============================================
//  firebase-init.js
//  Include in EVERY HTML page BEFORE data.js:
//    <script type="module" src="firebase-init.js"></script>
//    <script type="module" src="data.js"></script>
// =============================================

// ── PASTE YOUR FIREBASE CONFIG HERE ──────────────────────────────────────────
// Get this from: Firebase Console → Project Settings → Your Apps → Web App
const firebaseConfig = {
    apiKey:            "PASTE_YOUR_apiKey_HERE",
    authDomain:        "PASTE_YOUR_authDomain_HERE",
    projectId:         "PASTE_YOUR_projectId_HERE",
    storageBucket:     "PASTE_YOUR_storageBucket_HERE",
    messagingSenderId: "PASTE_YOUR_messagingSenderId_HERE",
    appId:             "PASTE_YOUR_appId_HERE"
};
// ─────────────────────────────────────────────────────────────────────────────

import { initializeApp }   from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore }    from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

// Make Firestore instance available to data.js
window.__firebaseReady(db);

console.log("[Firebase] Initialised ✓");
