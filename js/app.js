document.addEventListener("DOMContentLoaded", () => {
    // Basic auth check
    const currentUser = JSON.parse(localStorage.getItem('medicaUser'));
    
    // Auto redirect
    const path = window.location.pathname;
    
    if (!currentUser && !path.endsWith('index.html') && !path.endsWith('/')) {
        window.location.href = 'index.html';
        return;
    }

    if (currentUser && (path.endsWith('index.html') || path.endsWith('/'))) {
        window.location.href = currentUser.role === 'patient' ? 'patient.html' : 'doctor.html';
        return;
    }

    // Set header
    const headerInfo = document.getElementById('header-info');
    if (currentUser && headerInfo) {
        headerInfo.innerHTML = `
            <span>Zalogowano jako: <strong>${currentUser.name}</strong></span>
            <button class="secondary" onclick="logout()" style="margin-left: 15px; padding: 5px 10px; font-size:14px;">Wyloguj</button>
        `;
    }
});

function logout() {
    localStorage.removeItem('medicaUser');
    localStorage.removeItem('activePatientId');
    window.location.href = 'index.html';
}

function getPatientData(patientId) {
    return clinicData.users.find(u => u.id === patientId && u.role === 'patient');
}

function getDoctorData(doctorId) {
    return clinicData.users.find(u => u.id === doctorId && u.role === 'doctor');
}

// ===== User Switcher =====

function populateUserDropdown() {
    const container = document.getElementById('users-dropdown-content');
    if (!container) return;
    const currentUser = JSON.parse(localStorage.getItem('medicaUser'));
    const doctors = clinicData.users.filter(u => u.role === 'doctor');
    const patients = clinicData.users.filter(u => u.role === 'patient');

    function initials(u) { return u.initials || u.name.split(' ').map(n => n[0]).join('').substring(0, 2); }

    let html = '<div class="user-dropdown-label">Lekarze</div>';
    doctors.forEach(d => {
        const active = currentUser && d.id === currentUser.id;
        html += `<div class="user-dropdown-item${active ? ' current' : ''}" onclick="switchUser('${d.id}')">
            <div class="user-dropdown-avatar">${initials(d)}</div>
            <div>
                <div class="user-dropdown-item-name">${d.name}${active ? ' <span style="color:var(--medica-green-mid)">✓</span>' : ''}</div>
                <div class="user-dropdown-item-sub">${d.specialization}</div>
            </div>
        </div>`;
    });

    html += '<div class="user-dropdown-sep"></div><div class="user-dropdown-label">Pacjenci</div>';
    patients.forEach(p => {
        const active = currentUser && p.id === currentUser.id;
        html += `<div class="user-dropdown-item${active ? ' current' : ''}" onclick="switchUser('${p.id}')">
            <div class="user-dropdown-avatar patient">${initials(p)}</div>
            <div>
                <div class="user-dropdown-item-name">${p.name}${active ? ' <span style="color:var(--medica-green-mid)">✓</span>' : ''}</div>
                <div class="user-dropdown-item-sub">${(p.tags || []).slice(0, 2).join(', ') || p.status}</div>
            </div>
        </div>`;
    });

    container.innerHTML = html;
}

function toggleUserDropdown() {
    const dd = document.getElementById('user-dropdown');
    const trigger = document.getElementById('user-switcher-trigger');
    if (!dd) return;
    const isOpen = dd.classList.toggle('open');
    if (trigger) trigger.classList.toggle('open', isOpen);
}

function switchUser(userId) {
    const user = clinicData.users.find(u => u.id === userId);
    if (!user) return;
    const safeUser = { ...user };
    delete safeUser.password;
    localStorage.setItem('medicaUser', JSON.stringify(safeUser));
    localStorage.removeItem('activePatientId');
    window.location.href = user.role === 'patient' ? 'patient.html' : 'doctor.html';
}

document.addEventListener('click', function (e) {
    const trigger = document.getElementById('user-switcher-trigger');
    const dropdown = document.getElementById('user-dropdown');
    if (!trigger || !dropdown) return;
    if (!trigger.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
        trigger.classList.remove('open');
    }
});
