// =============================================
//  GhanaArtisan - Shared Navigation
// =============================================

function renderNavbar(activePage) {
    const user = loadUser();

    // ---- CUSTOMER PORTAL: slim navbar ----
    if (activePage === 'portal') {
        return `
            <div class="ghana-flag"></div>
            <nav class="navbar" style="padding:0.7rem 5%;">
                <div class="nav-container">
                    <a href="index.html" class="logo" style="font-size:1.4rem;">
                        <i class="fas fa-hands-helping" style="-webkit-text-fill-color:#006600;color:#006600;"></i>
                        GhanaArtisan
                    </a>
                    <div style="display:flex;align-items:center;gap:0.8rem;">
                        <div class="user-pill">
                            <i class="fas fa-user-circle"></i>
                            <span>${user?.name || 'Customer'}</span>
                        </div>
                        <a href="index.html" class="nav-portal-btn" style="background:rgba(0,102,0,0.1);color:#006600;box-shadow:none;">
                            <i class="fas fa-home"></i> Home
                        </a>
                        <button onclick="navLogout()" class="nav-logout-btn">
                            <i class="fas fa-sign-out-alt"></i> Logout
                        </button>
                    </div>
                </div>
            </nav>`;
    }

    // ---- ARTISAN PORTAL: slim navbar ----
    if (activePage === 'artisan-portal') {
        return `
            <div class="ghana-flag"></div>
            <nav class="navbar" style="padding:0.7rem 5%;">
                <div class="nav-container">
                    <a href="index.html" class="logo" style="font-size:1.4rem;">
                        <i class="fas fa-hands-helping" style="-webkit-text-fill-color:#006600;color:#006600;"></i>
                        GhanaArtisan
                    </a>
                    <div style="display:flex;align-items:center;gap:0.8rem;">
                        <div class="user-pill" style="background:rgba(0,102,0,0.08);color:#006600;border:1px solid rgba(0,102,0,0.2);">
                            <i class="fas fa-hard-hat"></i>
                            <span>${user?.name || 'Artisan'}</span>
                        </div>
                        <a href="index.html" class="nav-portal-btn" style="background:rgba(0,102,0,0.1);color:#006600;box-shadow:none;">
                            <i class="fas fa-home"></i> Home
                        </a>
                        <button onclick="navLogout()" class="nav-logout-btn">
                            <i class="fas fa-sign-out-alt"></i> Logout
                        </button>
                    </div>
                </div>
            </nav>`;
    }

    // ---- FULL NAVBAR: all other pages ----
    const pages = [
        { id: 'home',          label: 'Home',          href: 'index.html' },
        { id: 'login',         label: 'Get Started',   href: 'login.html' },
        { id: 'find-artisans', label: 'Find Artisans', href: 'find-artisans.html' },
        { id: 'how-it-works',  label: 'How It Works',  href: 'how-it-works.html' },
        { id: 'contact',       label: 'Contact',       href: 'contact.html' },
    ];

    const links = pages.map(p => `
        <a href="${p.href}" class="nav-link ${activePage === p.id ? 'active' : ''}">
            ${p.label}
        </a>
    `).join('');

    let rightSection = '';
    if (user) {
        rightSection = `
            ${user.role === 'client' ? `
                <a href="customer-portal.html" class="nav-portal-btn">
                    <i class="fas fa-th-large"></i> My Portal
                </a>` : ''}
            ${user.role === 'artisan' ? `
                <a href="artisan-portal.html" class="nav-portal-btn" style="background:linear-gradient(135deg,#006600,#009900);">
                    <i class="fas fa-hard-hat"></i> My Dashboard
                </a>` : ''}
            <button onclick="navLogout()" class="nav-logout-btn">
                <i class="fas fa-sign-out-alt"></i> Logout
            </button>
        `;
    }

    const mobileLinks = pages.map(p => `
        <a href="${p.href}" class="mobile-link ${activePage === p.id ? 'active' : ''}">
           ${p.label}
        </a>
    `).join('');

    return `
        <div class="ghana-flag"></div>

        <nav class="navbar">
            <div class="nav-container">
                <a href="index.html" class="logo">
                    <i class="fas fa-hands-helping" style="-webkit-text-fill-color:#006600;color:#006600;"></i>
                    GhanaArtisan
                </a>
                <div class="nav-links">
                    ${links}
                    <div class="nav-right">${rightSection}</div>
                </div>
                <button class="hamburger" onclick="toggleMobileMenu()" aria-label="Menu">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
            <div class="mobile-menu" id="mobile-menu">
                ${mobileLinks}
                ${user
                    ? `<button onclick="navLogout()" class="mobile-link" style="background:none;border:none;text-align:left;cursor:pointer;color:#CE1126;font-family:inherit;font-size:1rem;font-weight:500;padding:0.5rem 0;">
                           <i class="fas fa-sign-out-alt"></i> Logout
                       </button>`
                    : ''
                }
                <a href="admin.html" class="mobile-link" style="color:#CE1126;margin-top:0.3rem;">
                    <i class="fas fa-user-shield"></i> Admin Login
                </a>
            </div>
        </nav>

        <!-- Floating Admin Button -->
        <a href="admin.html" class="floating-admin-btn" title="Admin Login">
            <i class="fas fa-user-shield"></i>
            <span>Admin</span>
        </a>
    `;
}

function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('open');
}

function navLogout() {
    clearUser();
    showNotification('Logged out successfully', 'info');
    setTimeout(() => { window.location.href = 'index.html'; }, 800);
}

const sharedCSS = `
    :root {
        --primary: #006600;
        --primary-light: #009900;
        --secondary: #FF9900;
        --accent: #CE1126;
        --success: #25D366;
        --dark: #333333;
        --light: #F5F5F5;
        --gradient-primary: linear-gradient(135deg, #006600 0%, #FF9900 100%);
        --gradient-secondary: linear-gradient(135deg, #CE1126 0%, #FFCC00 100%);
        --gradient-ghana: linear-gradient(90deg, #006600 33%, #FF9900 33% 66%, #CE1126 66%);
        --magic-shadow: 0 10px 30px rgba(0,102,0,0.3);
    }

    *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }

    body {
        font-family: 'Inter', sans-serif;
        background: var(--light);
        color: var(--dark);
        overflow-x: hidden;
    }

    /* Ghana Flag bar */
    .ghana-flag {
        position: fixed; top: 0; left: 0; width: 100%; height: 5px; z-index: 1001;
        background: linear-gradient(90deg, #006600 33%, #FF9900 33% 66%, #CE1126 66%);
    }

    /* ===== NAVBAR ===== */
    .navbar {
        background: white; position: fixed; top: 5px; width: 100%; z-index: 1000;
        padding: 0.85rem 5%; box-shadow: 0 2px 20px rgba(0,0,0,0.1);
    }
    .nav-container {
        display: flex; justify-content: space-between; align-items: center;
        max-width: 1400px; margin: 0 auto;
    }
    .logo {
        font-family: 'Poppins', sans-serif; font-size: 1.7rem; font-weight: 700;
        background: var(--gradient-primary); -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; display: flex; align-items: center;
        gap: 10px; text-decoration: none; flex-shrink: 0;
    }
    .nav-links {
        display: flex; align-items: center; gap: 1.2rem;
    }
    .nav-link {
        text-decoration: none; color: #444; font-weight: 500; font-size: 0.95rem;
        padding: 6px 2px; border-bottom: 2px solid transparent;
        transition: all 0.2s; white-space: nowrap;
    }
    .nav-link:hover { color: #006600; border-bottom-color: #006600; }
    .nav-link.active { color: #006600; border-bottom-color: #006600; font-weight: 600; }
    .nav-right { display: flex; gap: 0.6rem; align-items: center; margin-left: 0.5rem; }

    /* User pill */
    .user-pill {
        background: rgba(0,102,0,0.08); color: #006600; padding: 6px 14px;
        border-radius: 20px; font-size: 0.85rem; font-weight: 600;
        display: flex; align-items: center; gap: 6px; border: 1px solid rgba(0,102,0,0.2);
    }
    .nav-logout-btn {
        background: var(--gradient-secondary); color: white; border: none;
        padding: 7px 16px; border-radius: 8px; font-weight: 600; cursor: pointer;
        font-family: 'Inter', sans-serif; font-size: 0.85rem;
        display: flex; align-items: center; gap: 6px; transition: all 0.2s;
    }
    .nav-logout-btn:hover { opacity: 0.88; transform: translateY(-1px); }

    /* My Portal / Dashboard button */
    .nav-portal-btn {
        background: var(--gradient-primary); color: white; text-decoration: none;
        padding: 7px 16px; border-radius: 8px; font-weight: 600; font-size: 0.85rem;
        display: inline-flex; align-items: center; gap: 6px; transition: all 0.2s;
        box-shadow: 0 3px 10px rgba(0,102,0,0.25);
    }
    .nav-portal-btn:hover { opacity: 0.88; transform: translateY(-1px); }

    /* ===== FLOATING ADMIN BUTTON ===== */
    .floating-admin-btn {
        position: fixed; bottom: 28px; right: 28px; z-index: 999;
        background: linear-gradient(135deg, #1a1a2e, #CE1126);
        color: white; text-decoration: none;
        padding: 12px 20px; border-radius: 50px;
        display: flex; align-items: center; gap: 8px;
        font-family: 'Inter', sans-serif; font-weight: 700; font-size: 0.88rem;
        box-shadow: 0 6px 25px rgba(206,17,38,0.45);
        transition: all 0.3s ease;
        border: 2px solid rgba(255,255,255,0.15);
    }
    .floating-admin-btn:hover { transform: translateY(-4px) scale(1.04); box-shadow: 0 12px 35px rgba(206,17,38,0.55); }
    .floating-admin-btn::before {
        content: ''; position: absolute; inset: -4px; border-radius: 54px;
        border: 2px solid rgba(206,17,38,0.4);
        animation: adminPulse 2.5s ease-in-out infinite;
    }
    @keyframes adminPulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50%       { opacity: 0; transform: scale(1.15); }
    }

    /* ===== BUTTONS ===== */
    .ghana-btn {
        background: var(--gradient-primary); color: white; border: none;
        padding: 10px 22px; border-radius: 8px; font-weight: 600; cursor: pointer;
        transition: all 0.3s ease; box-shadow: var(--magic-shadow);
        display: inline-flex; align-items: center; justify-content: center;
        gap: 8px; font-family: 'Inter', sans-serif; text-decoration: none;
        font-size: 0.95rem;
    }
    .ghana-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(0,102,0,0.4); }
    .ghana-btn.red      { background: var(--gradient-secondary); }
    .ghana-btn.secondary { background: #FF9900; box-shadow: 0 5px 15px rgba(255,153,0,0.3); }
    .ghana-btn.secondary:hover { box-shadow: 0 10px 25px rgba(255,153,0,0.4); }

    /* Ghana Badge */
    .ghana-badge {
        background: var(--gradient-primary); color: white;
        padding: 6px 14px; border-radius: 20px; font-size: 0.85rem;
        display: inline-flex; align-items: center; gap: 5px;
    }

    /* ===== FORM INPUTS ===== */
    select, input[type="text"], input[type="email"], input[type="password"],
    input[type="tel"], input[type="number"], input[type="date"], textarea {
        padding: 12px; border: 2px solid rgba(0,102,0,0.2); border-radius: 8px;
        font-family: 'Inter', sans-serif; background: white;
        transition: all 0.3s ease; width: 100%; font-size: 0.95rem;
    }
    select:focus, input:focus, textarea:focus {
        outline: none; border-color: #006600;
        box-shadow: 0 0 0 3px rgba(0,102,0,0.1);
    }

    /* ===== PAGE WRAPPER ===== */
    .page-wrapper { padding-top: 80px; min-height: 100vh; }

    /* Section titles */
    .section-title { font-family: 'Poppins', sans-serif; color: #006600; text-align: center; margin-bottom: 0.5rem; }
    .section-sub   { text-align: center; color: #666; margin-bottom: 2.5rem; }

    /* Status badges */
    .status-verified { background: rgba(37,211,102,0.15); color: #1a9e4e; padding: 4px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: 600; }
    .status-pending  { background: rgba(255,153,0,0.15);  color: #cc7700; padding: 4px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: 600; }

    /* Artisan Card */
    .artisan-card {
        background: white; border-radius: 15px; overflow: hidden;
        box-shadow: 0 5px 15px rgba(0,0,0,0.08); transition: all 0.3s ease;
        border: 1px solid rgba(0,102,0,0.1); margin-bottom: 1.5rem;
    }
    .artisan-card:hover { transform: translateY(-4px); box-shadow: 0 15px 30px rgba(0,102,0,0.18); }
    .artisan-card-body { padding: 1.5rem; }

    /* ===== MOBILE MENU ===== */
    .hamburger {
        display: none; background: none; border: none;
        font-size: 1.5rem; color: #006600; cursor: pointer;
    }
    .mobile-menu {
        display: none; flex-direction: column; gap: 0;
        border-top: 1px solid #eee; margin-top: 0.5rem;
    }
    .mobile-menu.open { display: flex; }
    .mobile-link {
        text-decoration: none; color: #444; font-weight: 500; font-size: 0.95rem;
        padding: 0.7rem 0; border-bottom: 1px solid #eee; display: block;
    }
    .mobile-link:hover { color: #006600; }
    .mobile-link.active { color: #006600; font-weight: 600; }

    @media (max-width: 820px) {
        .nav-links { display: none; }
        .hamburger { display: block; }
        .navbar { padding: 0.8rem 5%; }
    }

    /* ===== ANIMATIONS ===== */
    @keyframes fadeIn { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
    .fade-in { animation: fadeIn 0.5s ease forwards; }

    /* Modal */
    .modal { display:none; position:fixed; inset:0; background:rgba(0,0,0,0.5); z-index:2000; overflow-y:auto; padding:2rem; }
    .modal.active { display:flex; align-items:flex-start; justify-content:center; }
    .modal-content { background:white; border-radius:15px; padding:2rem; max-width:600px; width:100%; position:relative; margin:auto; }
    .modal-content.large { max-width:900px; }
    .close-modal { position:absolute; top:1rem; right:1rem; background:none; border:none; font-size:1.5rem; cursor:pointer; color:#666; }
    .close-modal:hover { color:#006600; }
`;
