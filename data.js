// =============================================
//  GhanaArtisan - Shared Data & Utilities
// =============================================

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
    { id: "tech",         name: "Technology",          icon: "fa-laptop" }
];

let sampleArtisans = [
    {
        id: 1, name: "Kwame Mensah", email: "kwame.mensah@example.com", phone: "0241234567", password: "password123",
        category: "plumbing", skills: ["Pipe Installation","Leak Repair","Water Heater Installation"],
        region: "Greater Accra Region", district: "Accra Metropolitan", address: "House No. 23, Ring Road, Accra",
        experience: 5, rating: 4.8, price: "₵150/hour", verified: true, completedJobs: 124,
        bio: "Professional plumber with 5+ years experience. Specialized in modern plumbing solutions for homes and businesses.",
        idType: "ecowascard", idNumber: "GHA-123456789-0", profilePic: null,
        credentials: [{ type: "certificate", name: "Plumbing License", file: "plumbing_license.pdf" },{ type: "certificate", name: "Safety Training", file: "safety_cert.pdf" }],
        jobRequests: [{ id: 1, clientName: "Ama Serwaa", clientPhone: "0541234567", clientEmail: "ama@example.com", description: "Fix leaking kitchen pipe", date: "2024-01-15", status: "pending" },{ id: 2, clientName: "Kofi Asante", clientPhone: "0247654321", clientEmail: "kofi@example.com", description: "Install new bathroom fixtures", date: "2024-01-10", status: "accepted" }],
        payments: [{ id: 1, amount: "₵450", date: "2024-01-10", status: "completed", client: "Kofi Asante" },{ id: 2, amount: "₵300", date: "2024-01-15", status: "pending", client: "Ama Serwaa" }],
        workUpdates: [{ id: 1, jobDesc: "Fix leaking kitchen pipe", beforeImg: null, afterImg: null, note: "Pipe replaced and sealed. No more leaks.", date: "2024-01-16", status: "completed" }]
    },
    {
        id: 2, name: "Amina Okafor", email: "amina.okafor@example.com", phone: "0552345678", password: "password123",
        category: "tailoring", skills: ["Dress Making","Traditional Wear","Alterations"],
        region: "Ashanti Region", district: "Kumasi Metropolitan", address: "Plot 45, Adum, Kumasi",
        experience: 8, rating: 4.9, price: "₵75/item", verified: true, completedJobs: 89,
        bio: "Master tailor specializing in African traditional attire and modern fashion designs.",
        idType: "voters_id", idNumber: "VOT-987654321", profilePic: null,
        credentials: [{ type: "certificate", name: "Fashion Design Diploma", file: "fashion_diploma.pdf" }],
        jobRequests: [{ id: 1, clientName: "Yaa Boahen", clientPhone: "0248889999", clientEmail: "yaa@example.com", description: "Make traditional Kente outfit", date: "2024-01-12", status: "pending" }],
        payments: [{ id: 1, amount: "₵375", date: "2024-01-05", status: "completed", client: "Akua Mensah" }],
        workUpdates: []
    },
    {
        id: 3, name: "John Kamau", email: "john.kamau@example.com", phone: "0203456789", password: "password123",
        category: "electrical", skills: ["House Wiring","Solar Installation","Electrical Maintenance"],
        region: "Eastern Region", district: "New Juaben South Municipal", address: "Block C, Koforidua",
        experience: 7, rating: 4.7, price: "₵200/hour", verified: true, completedJobs: 156,
        bio: "Certified electrician with expertise in residential and commercial electrical systems.",
        idType: "ecowascard", idNumber: "GHA-234567890-1", profilePic: null,
        credentials: [],
        jobRequests: [],
        payments: [{ id: 1, amount: "₵800", date: "2024-01-08", status: "completed", client: "Kwadwo Boateng" },{ id: 2, amount: "₵600", date: "2024-01-12", status: "completed", client: "Abena Kumi" }],
        workUpdates: []
    }
];

let sampleClients = [
    { id: 1, name: "Kofi Asante", email: "kofi@example.com", phone: "0247654321", password: "password123", role: "client", jobsRequested: 2, paymentsMade: [{ id: 1, amount: "₵450", date: "2024-01-10", artisan: "Kwame Mensah", status: "completed" }] },
    { id: 2, name: "Ama Serwaa",  email: "ama@example.com",  phone: "0541234567", password: "password123", role: "client", jobsRequested: 1, paymentsMade: [{ id: 1, amount: "₵300", date: "2024-01-15", artisan: "Kwame Mensah", status: "pending" }] }
];

// ---- Service Requests (go to both admin & artisan) ----
// status: 'pending_admin' | 'approved' | 'reassigned' | 'rejected' | 'completed'
let serviceRequests = [
    {
        id: 1,
        clientName: "Kofi Asante", clientEmail: "kofi@example.com", clientPhone: "0247654321",
        artisanId: 1, artisanName: "Kwame Mensah",
        category: "plumbing", description: "Fix leaking kitchen pipe urgently",
        region: "Greater Accra Region", district: "Accra Metropolitan",
        address: "House No. 23, Ring Road, Accra",
        date: "2024-01-15", status: "approved",
        adminNote: "", paymentStatus: "pending", amount: ""
    },
    {
        id: 2,
        clientName: "Ama Serwaa", clientEmail: "ama@example.com", clientPhone: "0541234567",
        artisanId: 2, artisanName: "Amina Okafor",
        category: "tailoring", description: "Need a traditional Kente outfit made for graduation",
        region: "Ashanti Region", district: "Kumasi Metropolitan",
        address: "Plot 45, Adum, Kumasi",
        date: "2024-01-16", status: "pending_admin",
        adminNote: "", paymentStatus: "not_paid", amount: ""
    }
];

const adminCredentials = { username: "ARTISANCONNECT", password: "3767 ARTISANCONNECT" };

// ---- Session helpers (localStorage) ----
function saveUser(user) { localStorage.setItem('ghanaArtisanUser', JSON.stringify(user)); }
function loadUser()     { const u = localStorage.getItem('ghanaArtisanUser'); return u ? JSON.parse(u) : null; }
function clearUser()    { localStorage.removeItem('ghanaArtisanUser'); }

// ---- Registered artisans pool (array — survives page reloads) ----
function saveArtisanProfile(profile) {
    // Save single profile (for current artisan session)
    localStorage.setItem('ghanaArtisanProfile', JSON.stringify(profile));
    // Also add to the pool of all registered artisans for admin to see
    let pool = [];
    try { pool = JSON.parse(localStorage.getItem('ghanaArtisanPool') || '[]'); } catch(e) { pool = []; }
    const idx = pool.findIndex(a => a.email === profile.email);
    if (idx >= 0) { pool[idx] = profile; } else { pool.push(profile); }
    localStorage.setItem('ghanaArtisanPool', JSON.stringify(pool));
}
function loadArtisanProfile() {
    const p = localStorage.getItem('ghanaArtisanProfile');
    return p ? JSON.parse(p) : null;
}
function clearArtisanProfile() {
    localStorage.removeItem('ghanaArtisanProfile');
    // Do NOT clear the pool — other artisans may still be in it
}
function loadArtisanPool() {
    try { return JSON.parse(localStorage.getItem('ghanaArtisanPool') || '[]'); } catch(e) { return []; }
}
function mergeArtisanPoolIntoSample() {
    // Merge localStorage-registered artisans into sampleArtisans so admin can see them
    const pool = loadArtisanPool();
    pool.forEach(a => {
        if (!sampleArtisans.find(x => x.email === a.email)) {
            sampleArtisans.push(a);
        } else {
            // Update existing record (e.g. verified status)
            const idx = sampleArtisans.findIndex(x => x.email === a.email);
            if (idx >= 0) sampleArtisans[idx] = { ...sampleArtisans[idx], ...a };
        }
    });
}

// ---- Registered clients pool ----
function saveClientProfile(profile) {
    localStorage.setItem('ghanaClientProfile', JSON.stringify(profile));
    let pool = [];
    try { pool = JSON.parse(localStorage.getItem('ghanaClientPool') || '[]'); } catch(e) { pool = []; }
    const idx = pool.findIndex(c => c.email === profile.email);
    if (idx >= 0) { pool[idx] = profile; } else { pool.push(profile); }
    localStorage.setItem('ghanaClientPool', JSON.stringify(pool));
}
function loadClientProfile() {
    const p = localStorage.getItem('ghanaClientProfile');
    return p ? JSON.parse(p) : null;
}
function clearClientProfile() { localStorage.removeItem('ghanaClientProfile'); }
function mergeClientPoolIntoSample() {
    try {
        const pool = JSON.parse(localStorage.getItem('ghanaClientPool') || '[]');
        pool.forEach(c => {
            if (!sampleClients.find(x => x.email === c.email)) sampleClients.push(c);
        });
    } catch(e) {}
}

// ---- Shared UI helpers ----
function showNotification(message, type = 'info') {
    const n = document.createElement('div');
    n.style.cssText = `position:fixed;top:20px;right:20px;padding:1rem 1.5rem;
        background:${type==='success'?'#25D366':type==='error'?'#CE1126':'#006600'};
        color:white;border-radius:8px;box-shadow:0 5px 15px rgba(0,0,0,0.2);
        z-index:9999;animation:fadeIn 0.3s ease;font-family:'Inter',sans-serif;`;
    n.innerHTML = `<div style="display:flex;align-items:center;gap:10px;">
        <i class="fas ${type==='success'?'fa-check-circle':type==='error'?'fa-exclamation-circle':'fa-info-circle'}"></i>
        <span>${message}</span></div>`;
    document.body.appendChild(n);
    setTimeout(() => { if (n.parentElement) n.remove(); }, 3000);
}

function loadRegionsIntoSelect(selectEl) {
    selectEl.innerHTML = '<option value="">Select Region</option>';
    ghanaData.regions.forEach(r => {
        const o = document.createElement('option');
        o.value = r.name;
        o.textContent = `${r.name} (Capital: ${r.capital})`;
        selectEl.appendChild(o);
    });
}

function loadDistrictsIntoSelect(selectEl, regionName) {
    selectEl.innerHTML = '<option value="">Select District</option>';
    const region = ghanaData.regions.find(r => r.name === regionName);
    if (region) {
        region.districts.forEach(d => {
            const o = document.createElement('option');
            o.value = d; o.textContent = d;
            selectEl.appendChild(o);
        });
    }
}

function loadCategoriesIntoSelect(selectEl) {
    selectEl.innerHTML = '<option value="">Select Category</option>';
    categories.forEach(c => {
        const o = document.createElement('option');
        o.value = c.id; o.textContent = c.name;
        selectEl.appendChild(o);
    });
}
