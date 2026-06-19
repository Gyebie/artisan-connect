// =============================================
//  GhanaArtisan - Firebase Firestore Backend
//  Replace your old data.js with this file.
//  Follow FIREBASE_SETUP_GUIDE.md to configure.
// =============================================

// ── 1. Firebase SDK (loaded via CDN in every HTML file) ──────────────────────
//  Add these 3 script tags to the <head> of EVERY .html page,
//  BEFORE your <script src="data.js"></script> line:
//
//  <script type="module" src="firebase-init.js"></script>
//
//  Then change every HTML file's data.js script tag to:
//  <script type="module" src="data.js"></script>
//
//  The firebase-init.js file is generated separately (see FIREBASE_SETUP_GUIDE.md).

// ── 2. Firebase app instance (set by firebase-init.js via window.__db) ───────
let db;         // Firestore instance — populated by waitForDb() from window.__db
let auth;       // Firebase Auth instance (optional, for future use)

// ── 3. Static lookup data (unchanged — no need to store in DB) ───────────────
const ghanaData = {
    country: "Ghana",
    regions: [
        { name: "Ahafo Region", capital: "Goaso", districts: ["Asunafo North Municipal","Asunafo South","Asutifi North","Asutifi South","Tano North Municipal","Tano South Municipal"] },
        { name: "Ashanti Region", capital: "Kumasi", districts: ["Adansi North","Adansi South","Ahafo Ano North Municipal","Kumasi Metropolitan","Ahafo Ano South","Amansie Central","Amansie West","Asante Akim Central Municipal","Asante Akim North","Asante Akim South Municipal","Asokore Mampong Municipal","Asokwa Municipal","Atwima Kwanwoma","Atwima Mponua","Atwima Nwabiagya Municipal","Bekwai Municipal","Bosome Freho","Bosomtwe","Ejisu Municipal","Ejura/Sekyedumase Municipal","Juaben Municipal","Kwabre East Municipal","Kwadaso Municipal","Mampong Municipal","Obuasi East Municipal","Obuasi Municipal","Offinso Municipal","Offinso North","Oforikrom Municipal","Old Tafo Municipal","Sekyere Afram Plains","Sekyere Central","Sekyere East","Sekyere Kumawu","Sekyere South","Suame Municipal"] },
        { name: "Bono Region", capital: "Sunyani", districts: ["Banda","Berekum East Municipal","Berekum West","Dormaa Central Municipal","Dormaa East","Dormaa West","Jaman North","Jaman South Municipal","Tain","Wenchi Municipal"] },
        { name: "Bono East Region", capital: "Techiman", districts: ["Atebubu-Amantin Municipal","Kintampo North Municipal","Kintampo South","Nkoranza North","Nkoranza South Municipal","Pru East","Pru West","Sene East","Sene West","Techiman Municipal","Techiman North"] },
        { name: "Central Region", capital: "Cape Coast", districts: ["Abura/Asebu/Kwamankese","Agona East","Agona West Municipal","Ajumako/Enyan/Essiam","Asikuma Odoben Brakwa","Assin Central Municipal","Assin North","Assin South","Awutu Senya East Municipal","Awutu Senya West","Cape Coast Metropolitan","Effutu Municipal","Ekumfi","Gomoa Central","Gomoa East","Gomoa West","Komenda/Edina/Eguafo/Abirem Municipal","Mfantsiman Municipal","Twifo Atti Morkwa","Twifo/Hemang/Lower Denkyira","Upper Denkyira East Municipal","Upper Denkyira West"] },
        { name: "Eastern Region", capital: "Koforidua", districts: ["Abuakwa North Municipal","Abuakwa South Municipal","Achiase","Akuapim North Municipal","Akuapim South","Akyemansa","Asene Manso Akroso","Asuogyaman","Atiwa East","Atiwa West","Ayensuano","Birim Central Municipal","Birim North","Birim South","Denkyembour","Fanteakwa North","Fanteakwa South","Kwaebibirem Municipal","Kwahu Afram Plains North","Kwahu Afram Plains South","Kwahu East","Kwahu South","Kwahu West Municipal","Lower Manya Krobo Municipal","New Juaben North Municipal","New Juaben South Municipal","Nsawam Adoagyire Municipal","Okere","Suhum Municipal","Upper Manya Krobo"] },
        { name: "Greater Accra Region", capital: "Accra", districts: ["Ablekuma Central Municipal","Ablekuma North Municipal","Ablekuma West Municipal","Accra Metropolitan","Adenta Municipal","Ashaiman Municipal","Ayawaso Central Municipal","Ayawaso East Municipal","Ayawaso North Municipal","Ayawaso West Municipal","Ga Central Municipal","Ga East Municipal","Ga North Municipal","Ga South Municipal","Ga West Municipal","Korle-Klottey Municipal","Kpone-Katamanso","La-Dade-Kotopon Municipal","Ledzokuku Municipal","Ningo-Prampram","Okaikwei North Municipal","Shai-Osudoku","Tema Metropolitan"] },
        { name: "Northern Region", capital: "Tamale", districts: ["Gushegu Municipal","Karaga","Kpandai","Kumbungu","Mion","Nanton","Nanumba North Municipal","Nanumba South","Saboba","Sagnarigu Municipal","Savelugu Municipal","Tamale Metropolitan","Tatale Sanguli","Tolon"] },
        { name: "North East Region", capital: "Nalerigu", districts: ["Bunkpurugu Nyankpanduri","Chereponi","East Mamprusi Municipal","Mamprugu Moagduri","West Mamprusi Municipal","Yunyoo-Nasuan"] },
        { name: "Oti Region", capital: "Dambai", districts: ["Biakoye","Guan","Jasikan Municipal","Kadjebi","Krachi East Municipal","Krachi Nchumuru","Krachi West Municipal","Nkwanta North","Nkwanta South Municipal"] },
        { name: "Savannah Region", capital: "Damongo", districts: ["Bole","Central Gonja","East Gonja Municipal","North Gonja","North East Gonja","Sawla-Tuna-Kalba","West Gonja Municipal"] },
        { name: "Upper East Region", capital: "Bolgatanga", districts: ["Bawku Municipal","Bawku West","Binduri","Bolgatanga East","Bolgatanga Municipal","Bongo","Builsa North Municipal","Builsa South","Garu","Kassena-Nankana Municipal","Kassena-Nankana West","Nabdam","Pusiga","Talensi","Tempane"] },
        { name: "Upper West Region", capital: "Wa", districts: ["Daffiama Bussie Issa","Jirapa Municipal","Lambussie Karni","Lawra Municipal","Nadowli-Kaleo","Nandom Municipal","Sissala East Municipal","Sissala West","Wa East","Wa Municipal","Wa West"] },
        { name: "Volta Region", capital: "Ho", districts: ["Adaklu","Afadzato South","Agotime Ziope","Akatsi North","Akatsi South","Anloga","Central Tongu","Ho Municipal","Ho West","Hohoe Municipal","Keta Municipal","Ketu North Municipal","Ketu South Municipal","Kpando Municipal","North Dayi","North Tongu","South Dayi","South Tongu"] },
        { name: "Western Region", capital: "Sekondi-Takoradi", districts: ["Ahanta West Municipal","Amenfi Central","Amenfi West Municipal","Effia Kwesimintsim Municipal","Ellembelle","Jomoro Municipal","Mpohor","Nzema East Municipal","Prestea-Huni Valley Municipal","Sekondi Takoradi Metropolitan","Shama","Tarkwa-Nsuaem Municipal","Wassa Amenfi East Municipal","Wassa East"] },
        { name: "Western North Region", capital: "Sefwi Wiawso", districts: ["Aowin Municipal","Bia East","Bia West","Bibiani Anhwiaso Bekwai Municipal","Bodi","Juaboso","Sefwi Akontombra","Sefwi-Wiawso Municipal","Suaman"] }
    ]
};

const categories = [
    { id: "plumbing",     name: "Plumbing",           icon: "fa-faucet" },
    { id: "electrical",   name: "Electrical",          icon: "fa-bolt" },
    { id: "carpentry",    name: "Carpentry",           icon: "fa-hammer" },
    { id: "masonry",      name: "Masonry",             icon: "fa-home" },
    { id: "welding",      name: "Welding",             icon: "fa-fire" },
    { id: "painting",     name: "Painting",            icon: "fa-paint-roller" },
    { id: "tailoring",    name: "Tailoring",           icon: "fa-tshirt" },
    { id: "hairdressing", name: "Hairdressing",        icon: "fa-cut" },
    { id: "catering",     name: "Catering",            icon: "fa-utensils" },
    { id: "electronics",  name: "Electronics Repair",  icon: "fa-tools" },
    { id: "automobile",   name: "Automobile Repair",   icon: "fa-car" },
    { id: "construction", name: "Construction",        icon: "fa-hard-hat" },
    { id: "cleaning",     name: "Cleaning Services",   icon: "fa-broom" },
    { id: "gardening",    name: "Gardening",           icon: "fa-leaf" },
    { id: "tech",         name: "Technology",          icon: "fa-laptop" },
    { id: "decoration",   name: "Interior/General Decoration",  icon: "fa-couch" },
    { id: "events",       name: "Event Planning",               icon: "fa-calendar-star" },
    { id: "makeup",       name: "Make-up Artist",                icon: "fa-spa" },
    { id: "cakedesign",   name: "Wedding Cake Designer",         icon: "fa-birthday-cake" },
    { id: "bartender",    name: "Local Bar Vendor/Bartender",    icon: "fa-glass-martini-alt" },
    { id: "fabrication",  name: "Glass/Aluminum/Metal Fabrication", icon: "fa-border-all" },
    { id: "pop",          name: "Plaster of Paris (POP)",        icon: "fa-layer-group" },
    { id: "plasterboard", name: "Plaster Board",                 icon: "fa-th-large" },
    { id: "tiling",       name: "Tiling",                        icon: "fa-th" },
    { id: "homecare",     name: "Home Care",                     icon: "fa-hand-holding-heart" }
];

const adminCredentials = { username: "ARTISANCONNECT", password: "3767 ARTISANCONNECT" };

// ── 4. In-memory caches (populated from Firestore on page load) ───────────────
let sampleArtisans  = [];
let sampleClients   = [];
let serviceRequests = [];

// ── 5. Firestore helpers ──────────────────────────────────────────────────────

/** Wait for db to be ready (firebase-init.js sets window.__db asynchronously) */
function waitForDb(timeout = 8000) {
    return new Promise((resolve, reject) => {
        if (window.__db) { db = window.__db; resolve(db); return; }
        const start = Date.now();
        const id = setInterval(() => {
            if (window.__db) {
                db = window.__db;
                clearInterval(id);
                resolve(db);
            } else if (Date.now() - start > timeout) {
                clearInterval(id);
                reject(new Error("Firebase not initialised — window.__db was never set"));
            }
        }, 50);
    });
}

/** Generic: fetch all docs from a collection and return as array */
async function fetchCollection(collectionName) {
    const d = await waitForDb();
    const { collection, getDocs } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
    const snap = await getDocs(collection(d, collectionName));
    return snap.docs.map(doc => ({ _docId: doc.id, ...doc.data() }));
}

/** Generic: save/update a single doc by its Firestore doc ID */
async function saveDoc(collectionName, docId, data) {
    const d = await waitForDb();
    const { doc, setDoc } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
    const cleanData = JSON.parse(JSON.stringify(data)); // strip undefined
    await setDoc(doc(d, collectionName, docId), cleanData, { merge: true });
}

/** Generic: add a new doc with auto-generated ID */
async function addDoc_(collectionName, data) {
    const d = await waitForDb();
    const { collection, addDoc } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
    const cleanData = JSON.parse(JSON.stringify(data));
    const ref = await addDoc(collection(d, collectionName), cleanData);
    return ref.id;
}

/** Generic: delete a doc */
async function deleteDoc_(collectionName, docId) {
    const d = await waitForDb();
    const { doc, deleteDoc } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
    await deleteDoc(doc(d, collectionName, docId));
}

// ── 6. Initialise: load all data from Firestore into memory ──────────────────

/**
 * Call this once at the top of every page's <script> block:
 *   await initAppData();
 * This loads artisans, clients, and service requests from Firestore
 * into the in-memory arrays the rest of your code already uses.
 */
async function initAppData() {
    try {
        const [artisans, clients, requests] = await Promise.all([
            fetchCollection("artisans"),
            fetchCollection("clients"),
            fetchCollection("serviceRequests")
        ]);
        sampleArtisans  = artisans;
        sampleClients   = clients;
        serviceRequests = requests;
        console.log(`[Firebase] Loaded ${artisans.length} artisans, ${clients.length} clients, ${requests.length} requests`);
    } catch (err) {
        console.error("[Firebase] initAppData failed:", err);
        showNotification("Could not load data. Check your internet connection.", "error");
    }
}

// ── 7. Artisan CRUD ───────────────────────────────────────────────────────────

/**
 * Save (create or update) an artisan profile to Firestore.
 * Uses email as the stable doc ID.
 */
async function saveArtisanProfile(profile) {
    if (!profile?.email) { console.error("saveArtisanProfile: no email"); return; }
    const docId = profile.email.replace(/[.#$/[\]]/g, "_"); // Firestore-safe ID
    try {
        await saveDoc("artisans", docId, { ...profile, _docId: docId, updatedAt: new Date().toISOString() });
        // Also update in-memory cache
        const idx = sampleArtisans.findIndex(a => a.email === profile.email);
        const merged = { _docId: docId, ...profile };
        if (idx >= 0) sampleArtisans[idx] = merged; else sampleArtisans.push(merged);
        // Keep session storage for current-user quick access
        sessionStorage.setItem("ghanaArtisanProfile", JSON.stringify(profile));
    } catch (err) {
        console.error("[Firebase] saveArtisanProfile failed:", err);
        showNotification("Error saving profile. Please try again.", "error");
    }
}

function loadArtisanProfile() {
    // Returns the currently logged-in artisan from session storage
    const p = sessionStorage.getItem("ghanaArtisanProfile");
    return p ? JSON.parse(p) : null;
}

function clearArtisanProfile() {
    sessionStorage.removeItem("ghanaArtisanProfile");
}

function loadArtisanPool() {
    // Return the in-memory cache (already loaded from Firestore by initAppData)
    return sampleArtisans;
}

/** @deprecated — use initAppData() instead. Kept for backward compatibility. */
async function mergeArtisanPoolIntoSample() {
    // No-op: initAppData already fills sampleArtisans from Firestore
    return;
}

// ── 8. Client CRUD ────────────────────────────────────────────────────────────

async function saveClientProfile(profile) {
    if (!profile?.email) { console.error("saveClientProfile: no email"); return; }
    const docId = profile.email.replace(/[.#$/[\]]/g, "_");
    try {
        await saveDoc("clients", docId, { ...profile, _docId: docId, updatedAt: new Date().toISOString() });
        const idx = sampleClients.findIndex(c => c.email === profile.email);
        const merged = { _docId: docId, ...profile };
        if (idx >= 0) sampleClients[idx] = merged; else sampleClients.push(merged);
        sessionStorage.setItem("ghanaClientProfile", JSON.stringify(profile));
    } catch (err) {
        console.error("[Firebase] saveClientProfile failed:", err);
        showNotification("Error saving profile. Please try again.", "error");
    }
}

function loadClientProfile() {
    const p = sessionStorage.getItem("ghanaClientProfile");
    return p ? JSON.parse(p) : null;
}

function clearClientProfile() {
    sessionStorage.removeItem("ghanaClientProfile");
}

/** @deprecated — use initAppData() instead. Kept for backward compatibility. */
async function mergeClientPoolIntoSample() {
    return;
}

// ── 9. Service Request CRUD ───────────────────────────────────────────────────

/**
 * Add a new service request to Firestore and the in-memory array.
 * Returns the new request with its Firestore-generated ID.
 */
async function addServiceRequest(requestData) {
    try {
        const payload = {
            ...requestData,
            createdAt: new Date().toISOString(),
            status: requestData.status || "pending_admin"
        };
        const docId = await addDoc_("serviceRequests", payload);
        const withId = { _docId: docId, id: docId, ...payload };
        serviceRequests.push(withId);
        return withId;
    } catch (err) {
        console.error("[Firebase] addServiceRequest failed:", err);
        showNotification("Error submitting request. Please try again.", "error");
        return null;
    }
}

/**
 * Update an existing service request (e.g. change status, add admin note).
 * Pass the request's _docId or id.
 */
async function updateServiceRequest(docId, changes) {
    try {
        await saveDoc("serviceRequests", docId, changes);
        const idx = serviceRequests.findIndex(r => r._docId === docId || r.id === docId);
        if (idx >= 0) serviceRequests[idx] = { ...serviceRequests[idx], ...changes };
    } catch (err) {
        console.error("[Firebase] updateServiceRequest failed:", err);
        showNotification("Error updating request.", "error");
    }
}

// ── 10. Session helpers (use sessionStorage so session ends on tab close) ─────

function saveUser(user) {
    sessionStorage.setItem("ghanaArtisanUser", JSON.stringify(user));
}
function loadUser() {
    const u = sessionStorage.getItem("ghanaArtisanUser");
    return u ? JSON.parse(u) : null;
}
function clearUser() {
    sessionStorage.removeItem("ghanaArtisanUser");
}

// ── 11. Shared UI helpers (unchanged) ─────────────────────────────────────────

function showNotification(message, type = "info") {
    const n = document.createElement("div");
    n.style.cssText = `position:fixed;top:20px;right:20px;padding:1rem 1.5rem;
        background:${type==="success"?"#25D366":type==="error"?"#CE1126":"#006600"};
        color:white;border-radius:8px;box-shadow:0 5px 15px rgba(0,0,0,0.2);
        z-index:9999;animation:fadeIn 0.3s ease;font-family:'Inter',sans-serif;`;
    n.innerHTML = `<div style="display:flex;align-items:center;gap:10px;">
        <i class="fas ${type==="success"?"fa-check-circle":type==="error"?"fa-exclamation-circle":"fa-info-circle"}"></i>
        <span>${message}</span></div>`;
    document.body.appendChild(n);
    setTimeout(() => { if (n.parentElement) n.remove(); }, 3000);
}

function loadRegionsIntoSelect(selectEl) {
    selectEl.innerHTML = "<option value=''>Select Region</option>";
    ghanaData.regions.forEach(r => {
        const o = document.createElement("option");
        o.value = r.name;
        o.textContent = `${r.name} (Capital: ${r.capital})`;
        selectEl.appendChild(o);
    });
}

function loadDistrictsIntoSelect(selectEl, regionName) {
    selectEl.innerHTML = "<option value=''>Select District</option>";
    const region = ghanaData.regions.find(r => r.name === regionName);
    if (region) {
        region.districts.forEach(d => {
            const o = document.createElement("option");
            o.value = d; o.textContent = d;
            selectEl.appendChild(o);
        });
    }
}

function loadCategoriesIntoSelect(selectEl) {
    selectEl.innerHTML = "<option value=''>Select Category</option>";
    categories.forEach(c => {
        const o = document.createElement("option");
        o.value = c.id; o.textContent = c.name;
        selectEl.appendChild(o);
    });
}
