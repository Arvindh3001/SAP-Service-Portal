const state = {
    currentUser: {
        role: 'admin',
        name: 'Sharma & Sons Service',
        id: 'ASP-BLR-042',
        initials: 'AS'
    },
    casesPending: [
        { id: 'TKT-0898', customer: 'Reliance Ind.', issue: 'Server cooling failure', priority: 'High', created: 'Apr 23, 08:00' },
        { id: 'TKT-0897', customer: 'L&T Ltd.', issue: 'CCTV DVR not recording', priority: 'Medium', created: 'Apr 23, 09:15' },
        { id: 'TKT-0896', customer: 'HDFC Bank', issue: 'UPS alarm — bypass mode', priority: 'High', created: 'Apr 23, 09:30' },
        { id: 'TKT-0895', customer: 'Bajaj Auto', issue: 'Fire alarm panel fault', priority: 'High', created: 'Apr 23, 09:45' },
    ],
    activeCases: [
        { id: 'TKT-0891', customer: 'Infosys Ltd.', issue: 'HP printer offline', tech: 'Ravi Kumar', stage: 'In Progress', due: 'Today 5:00 PM', priority: 'High' },
        { id: 'TKT-0887', customer: 'TCS Bangalore', issue: 'AC breakdown', tech: 'Priya Mehta', stage: 'On Site', due: 'Today 3:00 PM', priority: 'High' },
        { id: 'TKT-0883', customer: 'Wipro Ltd.', issue: 'UPS replacement', tech: 'Suresh Nair', stage: 'Parts Pending', due: 'Apr 24', priority: 'Medium' },
        { id: 'TKT-0880', customer: 'Accenture', issue: 'Server room cooling', tech: 'Kiran Patil', stage: 'En Route', due: 'Today 6:00 PM', priority: 'High' },
    ]
};

const screens = {
    'admin-home': renderAdminHome,
    'onboarding-personal': renderOnboardingPersonal,
    'onboarding-review': renderOnboardingReview,
    'admin-case-details': renderAdminCaseDetails
};

function navigateTo(screenId) {
    const app = document.getElementById('app-content');
    if (screens[screenId]) {
        app.innerHTML = screens[screenId]();
        window.scrollTo(0, 0);
        bindEvents();
    }
}

function bindEvents() {
    document.querySelectorAll('[data-nav]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const dest = e.currentTarget.getAttribute('data-nav');
            navigateTo(dest);
        });
    });
}

// Reusable Top Bars
function renderTopBar(type = 'dashboard') {
    if (type === 'dashboard') {
        return `
            <div class="top-bar-white">
                <div class="top-bar-left">
                    <button class="icon-btn"><i class="fa-solid fa-bars"></i></button>
                    <div style="background:#008FD3; color:white; padding:4px 8px; font-weight:bold; border-radius:4px; font-size:14px;">SAP</div>
                    <span class="app-title">Sales and Service Cloud</span>
                </div>
                <div class="top-bar-right">
                    <div class="search-container">
                        <i class="fa-solid fa-search search-icon"></i>
                        <input type="text" class="search-bar" placeholder="Search">
                    </div>
                    <button class="icon-btn"><i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                    <button class="icon-btn"><i class="fa-solid fa-list-check"></i></button>
                    <div class="avatar" data-nav="onboarding-personal">${state.currentUser.initials}</div>
                </div>
            </div>
            <button class="help-btn">? Help</button>
        `;
    } else {
        return `
            <div class="top-bar-blue">
                <div class="top-bar-left">
                    <div style="background:white; color:#008FD3; padding:4px 8px; font-weight:bold; border-radius:4px; font-size:14px; cursor:pointer;" data-nav="admin-home">SAP</div>
                    <span class="app-title">Technician Self-Registration Portal</span>
                </div>
                <div class="top-bar-right">
                    <span style="font-size:12px; cursor:pointer;">Already registered?</span>
                </div>
            </div>
            <button class="help-btn">? Help</button>
        `;
    }
}

// --- SCREEN: Admin Dashboard (Screenshot 5) ---
function renderAdminHome() {
    return `
        ${renderTopBar('dashboard')}
        
        <div class="hero-banner">
            <div class="date">Thursday, Apr 24 2026</div>
            <h1>Good morning, ${state.currentUser.name} (${state.currentUser.id})</h1>
            <div class="stats">52 active cases • 9 technicians on field • 4 SLA breach risks • 3 claims pending approval</div>
        </div>

        <div class="dashboard-content">
            <!-- Top KPIs -->
            <div class="kpi-row">
                <div class="kpi-card-styled border-blue">
                    <div class="kpi-title"><i class="fa-regular fa-calendar-plus" style="color:#0a6ed1;"></i> New Cases Today</div>
                    <div class="kpi-value">12</div>
                </div>
                <div class="kpi-card-styled border-orange">
                    <div class="kpi-title"><i class="fa-regular fa-circle-question" style="color:#cc6600;"></i> Pending Assignment</div>
                    <div class="kpi-value">8</div>
                </div>
                <div class="kpi-card-styled border-teal">
                    <div class="kpi-title"><i class="fa-solid fa-expand" style="color:#007b8a;"></i> In Field</div>
                    <div class="kpi-value">9</div>
                </div>
                <div class="kpi-card-styled border-orange">
                    <div class="kpi-title"><i class="fa-solid fa-pause" style="color:#cc6600;"></i> Parts Pending</div>
                    <div class="kpi-value">4</div>
                </div>
                <div class="kpi-card-styled border-green">
                    <div class="kpi-title"><i class="fa-solid fa-check" style="color:#107e3e;"></i> Closed Today</div>
                    <div class="kpi-value">18</div>
                </div>
                <div class="kpi-card-styled border-red">
                    <div class="kpi-title"><i class="fa-solid fa-location-dot" style="color:#bb0000;"></i> SLA Breach Risk</div>
                    <div class="kpi-value">4</div>
                </div>
            </div>

            <!-- Main Grid -->
            <div class="main-grid">
                <!-- Left Col -->
                <div>
                    <h3 style="font-size:14px; margin-bottom:12px; color:#6a6d70;">Quick Actions</h3>
                    <div class="quick-actions-grid">
                        <div class="quick-action-btn"><i class="fa-regular fa-calendar-plus"></i>New Case</div>
                        <div class="quick-action-btn"><i class="fa-solid fa-xmark"></i>Technicians</div>
                        <div class="quick-action-btn"><i class="fa-regular fa-circle-question"></i>Allocate</div>
                        <div class="quick-action-btn"><i class="fa-solid fa-check"></i>Approvals</div>
                        <div class="quick-action-btn"><i class="fa-solid fa-file-invoice-dollar"></i>Claims</div>
                        <div class="quick-action-btn"><i class="fa-solid fa-book-open"></i>Reports</div>
                    </div>
                </div>

                <!-- Middle Col -->
                <div>
                    <!-- Pending Assignment -->
                    <div class="table-container">
                        <div class="table-header">
                            <h3 style="color:#6a6d70;">Cases Pending Assignment</h3>
                            <span class="badge-count">8 Pending</span>
                        </div>
                        <table class="styled-table">
                            <thead>
                                <tr><th>CASE ID</th><th>CUSTOMER</th><th>ISSUE SUMMARY</th><th>PRIORITY</th><th>CREATED</th></tr>
                            </thead>
                            <tbody>
                                ${state.casesPending.map(c => `
                                    <tr>
                                        <td style="color:#6a6d70;">${c.id}</td>
                                        <td>${c.customer}</td>
                                        <td>${c.issue}</td>
                                        <td><span class="text-${c.priority === 'High' ? 'red' : 'orange'}">${c.priority}</span></td>
                                        <td style="color:#6a6d70;">${c.created}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>

                    <!-- Active Cases -->
                    <div class="table-container">
                        <div class="table-header">
                            <h3 style="color:#6a6d70;">Active Cases</h3>
                        </div>
                        <table class="styled-table">
                            <thead>
                                <tr><th>CASE ID</th><th>CUSTOMER</th><th>ISSUE</th><th>TECH</th><th>STAGE</th><th>SLA DUE</th><th>STATUS</th></tr>
                            </thead>
                            <tbody>
                                ${state.activeCases.map(c => `
                                    <tr ${c.id === 'TKT-0891' ? 'data-nav="admin-case-details"' : ''}>
                                        <td style="color:#6a6d70;">${c.id}</td>
                                        <td>${c.customer}</td>
                                        <td>${c.issue}</td>
                                        <td>${c.tech}</td>
                                        <td><span class="badge bg-${c.stage === 'In Progress' || c.stage === 'Parts Pending' || c.stage==='On Site' ? 'orange' : 'blue'}">${c.stage}</span></td>
                                        <td style="color:#6a6d70;">${c.due}</td>
                                        <td><span class="badge bg-${c.priority === 'High' ? 'red' : 'orange'}">${c.priority}</span></td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Right Col -->
                <div>
                    <div class="chart-card">
                        <h3 style="color:#6a6d70;">Technician Status</h3>
                        <div class="donut-chart" style="color:#107e3e;">9</div>
                        <div style="text-align:center; font-size:12px; color:#107e3e; font-weight:600; margin-bottom:16px;">9 / 14<br>On Field</div>
                        <div class="chart-legend">
                            <div class="legend-item"><span style="color:#6a6d70;"><span class="legend-dot" style="background:#107e3e;"></span>Available</span> <span>3</span></div>
                            <div class="legend-item"><span style="color:#6a6d70;"><span class="legend-dot" style="background:#0a6ed1;"></span>On Field</span> <span>9</span></div>
                            <div class="legend-item"><span style="color:#6a6d70;"><span class="legend-dot" style="background:#6a6d70;"></span>Offline</span> <span>2</span></div>
                        </div>
                    </div>

                    <div class="chart-card">
                        <h3 style="color:#6a6d70;">SLA Overview</h3>
                        <div class="donut-chart donut-red" style="color:#bb0000;">4</div>
                        <div style="text-align:center; font-size:12px; color:#bb0000; font-weight:600; margin-bottom:16px;">4<br>Breach Risk</div>
                        <div class="chart-legend">
                            <div class="legend-item"><span style="color:#6a6d70;"><span class="legend-dot" style="background:#bb0000;"></span>Immediate</span> <span style="color:#bb0000; font-weight:bold;">4</span></div>
                            <div class="legend-item"><span style="color:#6a6d70;"><span class="legend-dot" style="background:#cc6600;"></span>Urgent</span> <span>12</span></div>
                            <div class="legend-item"><span style="color:#6a6d70;"><span class="legend-dot" style="background:#107e3e;"></span>Normal</span> <span>36</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// --- SCREEN: Registration Personal Details (Screenshot 4) ---
function renderOnboardingPersonal() {
    return `
        ${renderTopBar('registration')}
        
        <div class="stepper-container">
            <div class="stepper-line"><div class="stepper-line-fill" style="width:0%;"></div></div>
            
            <div class="step active">
                <div class="step-icon">1</div>
                <div class="step-label">Personal Details</div>
                <div style="font-size:10px; color:#6a6d70;">Your basic information</div>
            </div>
            <div class="step pending">
                <div class="step-icon">2</div>
                <div class="step-label">KYC Documents</div>
                <div style="font-size:10px; color:#6a6d70;">Aadhaar, PAN, Certs</div>
            </div>
            <div class="step pending">
                <div class="step-icon">3</div>
                <div class="step-label">Skills & Zone</div>
                <div style="font-size:10px; color:#6a6d70;">Experience & service area</div>
            </div>
            <div class="step pending">
                <div class="step-icon">4</div>
                <div class="step-label">Review & Submit</div>
                <div style="font-size:10px; color:#6a6d70;">Confirm and submit</div>
            </div>
        </div>

        <div class="registration-container">
            <div class="form-card">
                <h2>Personal Details</h2>
                <p>Enter your personal information. Fields marked * are mandatory. This information will be verified during KYC.</p>
                
                <div class="form-grid">
                    <div class="input-group">
                        <label>First Name *</label>
                        <input type="text" placeholder="e.g. Ravi">
                    </div>
                    <div class="input-group">
                        <label>Last Name *</label>
                        <input type="text" placeholder="e.g. Kumar">
                    </div>
                    <div class="input-group">
                        <label>Date of Birth *</label>
                        <input type="text" placeholder="dd-mm-yyyy">
                    </div>
                    <div class="input-group" style="display:flex; flex-direction:row; gap:16px;">
                        <div style="flex:1;">
                            <label style="display:block; margin-bottom:8px; font-size:12px; font-weight:600;">Gender *</label>
                            <select style="width:100%; padding:10px; border:1px solid #e0e1e3; border-radius:4px;"><option>Select</option></select>
                        </div>
                        <div style="flex:1;">
                            <label style="display:block; margin-bottom:8px; font-size:12px; font-weight:600;">Nationality *</label>
                            <select style="width:100%; padding:10px; border:1px solid #e0e1e3; border-radius:4px;"><option>Indian</option></select>
                        </div>
                    </div>
                    <div class="input-group">
                        <label>Mobile Number *</label>
                        <input type="text" placeholder="+91 98765 43210">
                    </div>
                    <div class="input-group">
                        <label>Alternate Number</label>
                        <input type="text" placeholder="+91 xxxxx xxxxx">
                    </div>
                    <div class="input-group">
                        <label>Email Address *</label>
                        <input type="text" placeholder="ravi.kumar@email.com">
                    </div>
                    <div class="input-group">
                        <label>Aadhaar Number *</label>
                        <input type="text" placeholder="XXXX XXXX XXXX">
                    </div>
                    <div class="input-group" style="grid-column: span 2;">
                        <label>Current Address *</label>
                        <input type="text" placeholder="Street, Area, City, PIN">
                    </div>
                    <div class="input-group">
                        <label>Service Zone / City *</label>
                        <select><option>e.g. Bangalore North</option></select>
                    </div>
                    <div class="input-group">
                        <label>Years of Experience *</label>
                        <input type="text" placeholder="e.g. 5 years">
                    </div>
                </div>

                <div class="form-actions">
                    <span style="font-size:11px; color:#6a6d70;">All fields marked * are mandatory. Your details will be verified by the ASP before activation.</span>
                    <button class="btn-primary" data-nav="onboarding-review">Next: KYC Documents →</button>
                </div>
            </div>
        </div>
    `;
}

// --- SCREEN: Registration Review & Submit (Screenshot 2) ---
function renderOnboardingReview() {
    return `
        ${renderTopBar('registration')}
        
        <div class="stepper-container">
            <div class="stepper-line"><div class="stepper-line-fill" style="width:100%;"></div></div>
            
            <div class="step completed">
                <div class="step-icon"><i class="fa-solid fa-check"></i></div>
                <div class="step-label" style="color:#107e3e;">Personal Details</div>
            </div>
            <div class="step completed">
                <div class="step-icon"><i class="fa-solid fa-check"></i></div>
                <div class="step-label" style="color:#107e3e;">KYC Documents</div>
            </div>
            <div class="step completed">
                <div class="step-icon"><i class="fa-solid fa-check"></i></div>
                <div class="step-label" style="color:#107e3e;">Skills & Zone</div>
            </div>
            <div class="step active">
                <div class="step-icon">4</div>
                <div class="step-label">Review & Submit</div>
            </div>
        </div>

        <div class="registration-container">
            <div style="background:white; padding:24px; border-radius:8px; border:1px solid #e0e1e3; margin-bottom:24px;">
                <h2 style="font-size:18px; margin-bottom:4px;">Review & Submit Application</h2>
                <p style="font-size:12px; margin-bottom:24px; color:#6a6d70;">Please verify all details before submitting. Your application will be reviewed by the ASP. You will be notified within 2-3 business days.</p>
                
                <div class="summary-grid">
                    <div class="summary-card">
                        <div class="summary-header">
                            <span><i class="fa-regular fa-user" style="margin-right:8px;"></i>Personal Details</span>
                            <span class="edit-link" data-nav="onboarding-personal">Edit</span>
                        </div>
                        <div class="summary-body">
                            <div style="margin-bottom:8px;"><span style="color:#6a6d70; display:block;">Name</span>Ravi Kumar</div>
                            <div style="margin-bottom:8px;"><span style="color:#6a6d70; display:block;">DOB</span>15 Apr 1990</div>
                            <div><span style="color:#6a6d70; display:block;">Mobile</span>+91 98765 43210</div>
                        </div>
                    </div>
                    <div class="summary-card">
                        <div class="summary-header">
                            <span><i class="fa-regular fa-file-lines" style="margin-right:8px;"></i>KYC Documents</span>
                            <span class="edit-link">Edit</span>
                        </div>
                        <div class="summary-body">
                            <div style="margin-bottom:8px;"><span style="color:#6a6d70; display:block;">Aadhaar</span><span class="text-success">Verified ✓</span></div>
                            <div style="margin-bottom:8px;"><span style="color:#6a6d70; display:block;">PAN Card</span><span class="text-success">Uploaded ✓</span></div>
                            <div><span style="color:#6a6d70; display:block;">HVAC Cert.</span><span class="text-success">Uploaded ✓</span></div>
                        </div>
                    </div>
                    <div class="summary-card">
                        <div class="summary-header">
                            <span><i class="fa-solid fa-wrench" style="margin-right:8px;"></i>Skills & Service Zone</span>
                            <span class="edit-link">Edit</span>
                        </div>
                        <div class="summary-body">
                            <div style="margin-bottom:8px;"><span style="color:#6a6d70; display:block;">Primary Skill</span>HVAC (Level 2)</div>
                            <div style="margin-bottom:8px;"><span style="color:#6a6d70; display:block;">Secondary</span>Electrical Systems</div>
                            <div><span style="color:#6a6d70; display:block;">Certificate</span>HVAC-TUV-2022</div>
                        </div>
                    </div>
                </div>
            </div>

            <div style="background:white; padding:24px; border-radius:8px; border:1px solid #e0e1e3;">
                <h3 style="font-size:14px; margin-bottom:24px; color:#32363a;"><i class="fa-regular fa-file-lines" style="margin-right:8px; color:#cc6600;"></i>Review Your Information</h3>
                
                <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:32px; margin-bottom:32px; font-size:12px;">
                    <div>
                        <div style="color:#6a6d70; margin-bottom:4px;">Full Name:</div><div style="margin-bottom:16px;">—</div>
                        <div style="color:#6a6d70; margin-bottom:4px;">Mobile:</div><div style="margin-bottom:16px;">—</div>
                        <div style="color:#6a6d70; margin-bottom:4px;">Service Zone:</div><div style="margin-bottom:16px;">—</div>
                    </div>
                    <div>
                        <div style="color:#6a6d70; margin-bottom:4px;">Date of Birth:</div><div style="margin-bottom:16px;">—</div>
                        <div style="color:#6a6d70; margin-bottom:4px;">Email:</div><div style="margin-bottom:16px;">—</div>
                        <div style="color:#6a6d70; margin-bottom:4px;">Experience:</div><div style="margin-bottom:16px;">—</div>
                    </div>
                    <div>
                        <div style="color:#6a6d70; margin-bottom:4px;">Gender:</div><div style="margin-bottom:16px;">—</div>
                        <div style="color:#6a6d70; margin-bottom:4px;">Aadhaar:</div><div style="margin-bottom:16px;">—</div>
                        <div style="color:#6a6d70; margin-bottom:4px;">Address:</div><div style="margin-bottom:16px;">—</div>
                    </div>
                </div>

                <div style="border-top:1px solid #e0e1e3; padding-top:24px;">
                    <div style="font-size:12px; color:#6a6d70; margin-bottom:12px;">Documents Uploaded:</div>
                    <div style="background:#fee0e0; color:#bb0000; padding:8px 12px; border-radius:4px; font-size:11px; display:inline-block; margin-bottom:16px;">
                        ⚠ No documents uploaded - Please complete KYC step
                    </div>
                    <div style="background:#fef0e0; border:1px solid #cc6600; padding:12px; border-radius:4px; font-size:11px; color:#32363a; margin-bottom:32px;">
                        i Please go back to upload at least one KYC document before submitting
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span style="font-size:11px; color:#6a6d70;">By submitting, you confirm all information is accurate and consent to background verification.</span>
                        <button class="btn-primary" data-nav="admin-home">Submit Application</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// --- SCREEN: Admin Case Details (ui.txt spec) ---
function renderAdminCaseDetails() {
    const statusBoxes = [
        { label: 'New',         bg: '#dff4e9', color: '#107e3e' },
        { label: 'Assigned',    bg: '#e0f0ff', color: '#0a6ed1' },
        { label: 'In Progress', bg: '#fef0e0', color: '#cc6600' },
        { label: 'On Hold',     bg: '#f3f3f4', color: '#6a6d70' },
        { label: 'Completed',   bg: '#f3f3f4', color: '#6a6d70' },
        { label: 'Escalated',   bg: '#f3f3f4', color: '#6a6d70' },
    ];

    return `
        ${renderTopBar('dashboard')}
        <div style="position:relative; flex:1; min-height:852px; background:#f3f3f4;">

            <!-- Case Flow Progress Bar: top 12px (screen 60 - topbar 48) -->
            <div style="position:absolute; top:12px; left:16px; width:936px; height:36px; display:flex; gap:4px;">
                ${statusBoxes.map(s => `
                    <div style="flex:1; height:36px; background:${s.bg}; color:${s.color}; border-radius:6px;
                                display:flex; align-items:center; justify-content:center;
                                font-size:10px; font-weight:600;">
                        ${s.label}
                    </div>
                `).join('')}
            </div>

            <!-- Breadcrumb: top 60px -->
            <div style="position:absolute; top:60px; left:16px; font-size:11px; color:#6a6d70;">
                <span style="cursor:pointer;" data-nav="admin-home">Home</span>
                <span style="margin:0 4px;">›</span>
                <span>Cases</span>
                <span style="margin:0 4px;">›</span>
                <span style="color:#32363a; font-weight:700;">TKT-2024-0891</span>
            </div>

            <!-- Action Buttons: top 60px -->
            <button data-nav="admin-home"
                style="position:absolute; top:60px; left:968px; width:130px; height:40px;
                       background:#0a6ed1; color:white; border:none; border-radius:6px;
                       font-size:13px; font-weight:600; cursor:pointer; display:flex;
                       align-items:center; justify-content:center; gap:6px; transition:all 0.2s;"
                onmouseover="this.style.background='#0858a8'" onmouseout="this.style.background='#0a6ed1'">
                <i class="fa-solid fa-pen" style="font-size:12px;"></i> Edit Case
            </button>
            <button data-nav="admin-home"
                style="position:absolute; top:60px; left:1116px; width:180px; height:40px;
                       background:#107e3e; color:white; border:none; border-radius:6px;
                       font-size:13px; font-weight:600; cursor:pointer; display:flex;
                       align-items:center; justify-content:center; gap:6px; transition:all 0.2s;"
                onmouseover="this.style.background='#0d6631'" onmouseout="this.style.background='#107e3e'">
                <i class="fa-solid fa-user-plus" style="font-size:12px;"></i> Assign Technician
            </button>

            <!-- LEFT CARD - Case Information: top 96px, left 16px, 936x388 -->
            <div style="position:absolute; top:96px; left:16px; width:936px; height:388px;
                        background:white; border-radius:8px; border:1px solid #e0e1e3;
                        box-shadow:0px 1px 6px rgba(0,0,0,0.08); overflow:hidden;">
                <!-- Header -->
                <div style="padding:16px 20px 0;">
                    <div style="display:flex; align-items:center; gap:10px; margin-bottom:4px;">
                        <span style="font-size:18px; font-weight:700; color:#32363a;">TKT-2024-0891</span>
                        <span style="background:#fee0e0; color:#bb0000; border-radius:12px;
                                     padding:2px 12px; font-size:11px; font-weight:600; width:70px; text-align:center;">High</span>
                    </div>
                    <div style="font-size:11px; color:#6a6d70; margin-bottom:12px;">
                        HP LaserJet Pro M404dn — Not Printing &nbsp;•&nbsp; Infosys Limited, Bangalore &nbsp;•&nbsp; Floor 12, IT Department
                    </div>
                </div>
                <div style="height:1px; background:#e0e1e3; margin:0 20px;"></div>

                <!-- Two Column Info -->
                <div style="display:grid; grid-template-columns:1fr 1fr; padding:16px 20px; gap:0;">
                    <div style="display:flex; flex-direction:column; gap:18px; font-size:11px;">
                        <div><span style="font-weight:700; color:#32363a;">Customer</span><br><span style="color:#6a6d70;">Infosys Limited, Bangalore</span></div>
                        <div><span style="font-weight:700; color:#32363a;">Product</span><br><span style="color:#6a6d70;">HP LaserJet Pro M404dn</span></div>
                        <div><span style="font-weight:700; color:#32363a;">Serial No.</span><br><span style="color:#6a6d70;">CNBXJ34570</span></div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:18px; font-size:11px;">
                        <div><span style="font-weight:700; color:#32363a;">Service Zone</span><br><span style="color:#6a6d70;">Bangalore North</span></div>
                        <div><span style="font-weight:700; color:#32363a;">Assigned To</span><br><span style="color:#6a6d70;">Ravi Kumar</span></div>
                        <div><span style="font-weight:700; color:#32363a;">Warranty Status</span><br><span style="color:#6a6d70;">In Warranty</span></div>
                    </div>
                </div>

                <div style="height:1px; background:#e0e1e3; margin:0 20px;"></div>

                <!-- Problem Description -->
                <div style="padding:12px 20px 0; font-size:11px;">
                    <div style="font-weight:700; color:#32363a; margin-bottom:4px;">Problem Description</div>
                    <div style="color:#6a6d70; line-height:1.5;">
                        Printer stopped printing. Error message 'Paper Jam' but no visible jam. Power cycled multiple times. Display shows ready but jobs stuck in queue.
                    </div>
                </div>

                <div style="height:1px; background:#e0e1e3; margin:12px 20px 0;"></div>

                <!-- Service History -->
                <div style="padding:12px 20px 0; font-size:11px;">
                    <div style="font-weight:700; color:#32363a; margin-bottom:4px;">Service History</div>
                    <div style="color:#6a6d70; line-height:1.7;">
                        Last service: 2 months ago — Toner replacement<br>
                        Previous issue: Print quality degradation (resolved)<br>
                        Maintenance schedule: Up to date
                    </div>
                </div>
            </div>

            <!-- RIGHT CARD - Technician Notes: top 96px, left 968px, 456x388 -->
            <div style="position:absolute; top:96px; left:968px; width:456px; height:388px;
                        background:white; border-radius:8px; border:1px solid #e0e1e3;
                        box-shadow:0px 1px 6px rgba(0,0,0,0.08); overflow:hidden;">
                <div style="padding:14px 16px; font-size:13px; font-weight:700; color:#32363a;">Technician Notes</div>
                <div style="height:1px; background:#e0e1e3;"></div>
                <div style="padding:14px 16px; font-size:11px; color:#6a6d70; display:flex; flex-direction:column; gap:16px;">
                    <div>
                        <div style="font-weight:600; color:#32363a; margin-bottom:2px;">Apr 23, 10:00 AM — Ravi Kumar</div>
                        <div>Checked printer — paper feed roller worn. Ordered replacement part.</div>
                    </div>
                    <div>
                        <div style="font-weight:600; color:#32363a; margin-bottom:2px;">Apr 23, 11:30 AM — Ravi Kumar</div>
                        <div>Part arrived. Installing now.</div>
                    </div>
                    <div>
                        <div style="font-weight:600; color:#32363a; margin-bottom:2px;">Apr 23, 12:45 PM — Ravi Kumar</div>
                        <div>Roller replaced. Running test prints. All working normally.</div>
                    </div>
                </div>
            </div>

            <!-- PARTS USED CARD: top 500px, left 16px, 468x184 -->
            <div style="position:absolute; top:500px; left:16px; width:468px; height:184px;
                        background:white; border-radius:8px; border:1px solid #e0e1e3;
                        box-shadow:0px 1px 6px rgba(0,0,0,0.08); overflow:hidden;">
                <div style="padding:12px 16px; font-size:13px; font-weight:700; color:#32363a;">Parts Used</div>
                <div style="height:1px; background:#e0e1e3;"></div>
                <div style="padding:12px 16px; font-size:11px; color:#6a6d70; display:flex; flex-direction:column; gap:6px;">
                    <div style="color:#32363a; font-weight:600;">1x Paper Feed Roller (HP RM1-6414)</div>
                    <div>Part No: RM1-6414-000CN</div>
                    <div>Cost: ₹1,250</div>
                    <div style="color:#107e3e; font-weight:600;">Status: Installed</div>
                    <div style="margin-top:8px; padding-top:8px; border-top:1px solid #e0e1e3;">
                        No additional parts required.
                    </div>
                </div>
            </div>

            <!-- CASE STATUS CARD: top 500px, left 500px, 452x184 -->
            <div style="position:absolute; top:500px; left:500px; width:452px; height:184px;
                        background:white; border-radius:8px; border:1px solid #e0e1e3;
                        box-shadow:0px 1px 6px rgba(0,0,0,0.08); overflow:hidden;">
                <div style="padding:12px 16px; font-size:13px; font-weight:700; color:#32363a;">Case Status</div>
                <div style="height:1px; background:#e0e1e3;"></div>
                <div style="padding:16px; display:flex; gap:8px; align-items:center;">
                    <span style="background:#dff4e9; color:#107e3e; border-radius:12px; padding:4px 0;
                                 width:90px; text-align:center; font-size:11px; font-weight:600; height:22px; display:flex; align-items:center; justify-content:center;">In Warranty</span>
                    <span style="background:#dff4e9; color:#107e3e; border-radius:12px; padding:4px 0;
                                 width:81px; text-align:center; font-size:11px; font-weight:600; height:22px; display:flex; align-items:center; justify-content:center;">Completed</span>
                    <span style="background:#f3f3f4; color:#6a6d70; border-radius:12px; padding:4px 0;
                                 width:81px; text-align:center; font-size:11px; font-weight:600; height:22px; display:flex; align-items:center; justify-content:center;">Escalated</span>
                </div>
            </div>

            <!-- EXIT BUTTON: top 782px (830-48), left 1300px -->
            <button data-nav="admin-home"
                style="position:absolute; top:782px; left:1300px; width:120px; height:48px; z-index:10;
                       background:#0a6ed1; color:white; border:none; border-radius:6px;
                       font-size:13px; font-weight:600; cursor:pointer; display:flex;
                       align-items:center; justify-content:center; gap:8px; transition:all 0.2s;"
                onmouseover="this.style.background='#0858a8'" onmouseout="this.style.background='#0a6ed1'">
                <i class="fa-solid fa-arrow-left"></i> Exit
            </button>

        </div>
    `;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = '<div class="canvas" id="app-content"></div>';
    navigateTo('admin-home'); // Default to Admin Dashboard
});
