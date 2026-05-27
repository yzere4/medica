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
