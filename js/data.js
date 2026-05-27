const clinicData = {
    users: [
        { id: 'd1', role: 'doctor', username: 'd.nowak', password: 'haslo123', name: 'Dr. Anna Nowak' },
        { id: 'd2', role: 'doctor', username: 'j.kowalski', password: 'haslo123', name: 'Dr. Jan Kowalski' },
        { id: 'd3', role: 'doctor', username: 'p.wisniewski', password: 'haslo123', name: 'Dr. Piotr Wiśniewski' },
        
        { id: 'p1', role: 'patient', username: 'a.mickiewicz', password: 'adam123', name: 'Adam Mickiewicz', dob: '1980-05-15', history: 'Nadciśnienie, Cukrzyca typu 2', meds: 'Lisinopril 10mg, Metformina 500mg', notes: 'Pacjent zgłasza częste bóle głowy.', docs: ['EKG - 2024.pdf'] },
        { id: 'p2', role: 'patient', username: 'j.slowacki', password: 'juliusz123', name: 'Juliusz Słowacki', dob: '1991-09-04', history: 'Astma', meds: 'Salbutamol wziewnie', notes: 'Zalecono unikanie alergenów.', docs: ['Spirometria.pdf'] },
        { id: 'p3', role: 'patient', username: 'b.prus', password: 'boleslaw123', name: 'Bolesław Prus', dob: '1975-08-20', history: 'Brak przewlekłych chorób', meds: 'Brak', notes: 'Profilaktyka w normie.', docs: [] },
        { id: 'p4', role: 'patient', username: 'h.sienkiewicz', password: 'henryk123', name: 'Henryk Sienkiewicz', dob: '1960-05-05', history: 'Choroba wieńcowa', meds: 'Acard 75mg, Bisoprolol', notes: 'Wymaga kontroli kardiologicznej za 3 mce.', docs: ['Echo_Ostre.pdf', 'Wypis_Szpital.pdf'] },
        { id: 'p5', role: 'patient', username: 'w.reymont', password: 'wladek123', name: 'Władysław Reymont', dob: '1985-07-07', history: 'Migreny', meds: 'Sumatryptan doraźnie', notes: 'Obserwacja częstotliwości ataków.', docs: ['MRI_Glowy.pdf'] },
        { id: 'p6', role: 'patient', username: 'e.orzeszkowa', password: 'eliza123', name: 'Eliza Orzeszkowa', dob: '1990-06-06', history: 'Niedoczynność tarczycy', meds: 'Euthyrox 50', notes: 'TSH stabilne.', docs: ['Wyniki_Krwi_2025.pdf'] },
        { id: 'p7', role: 'patient', username: 'm.konopnicka', password: 'maria123', name: 'Maria Konopnicka', dob: '1995-10-10', history: 'Alergia pyłkowa', meds: 'Clatra', notes: 'Odczulanie w trakcie.', docs: [] }
    ],
    appointments: [
        { id: 'a1', patientId: 'p1', doctorId: 'd1', date: '2025-10-10 10:00', status: 'Zrealizowana', notes: 'Kontrola ciśnienia' },
        { id: 'a2', patientId: 'p1', doctorId: 'd2', date: '2026-06-15 11:30', status: 'Umówiona', notes: 'Konsultacja internistyczna' },
        { id: 'a3', patientId: 'p2', doctorId: 'd3', date: '2025-12-05 09:00', status: 'Zrealizowana', notes: 'Zaostrzenie astmy' },
        { id: 'a4', patientId: 'p2', doctorId: 'd1', date: '2026-06-20 14:00', status: 'Umówiona', notes: 'Badanie kontrolne' },
        { id: 'a5', patientId: 'p3', doctorId: 'd2', date: '2026-05-18 10:15', status: 'Zrealizowana', notes: 'Przegląd zdrowia' },
        { id: 'a6', patientId: 'p3', doctorId: 'd3', date: '2026-07-10 08:30', status: 'Umówiona', notes: 'Medycyna pracy' },
        { id: 'a7', patientId: 'p4', doctorId: 'd1', date: '2026-01-20 12:00', status: 'Zrealizowana', notes: 'Bóle w klatce' },
        { id: 'a8', patientId: 'p4', doctorId: 'd2', date: '2026-06-01 13:00', status: 'Umówiona', notes: 'Echo serca - konsultacja' },
        { id: 'a9', patientId: 'p5', doctorId: 'd3', date: '2025-09-09 16:00', status: 'Zrealizowana', notes: 'Konsultacja neurologiczna' },
        { id: 'a10', patientId: 'p5', doctorId: 'd1', date: '2026-08-14 10:00', status: 'Umówiona', notes: 'Odnowienie recepty' },
        { id: 'a11', patientId: 'p6', doctorId: 'd2', date: '2026-02-14 15:45', status: 'Zrealizowana', notes: 'Kontrola TSH' },
        { id: 'a12', patientId: 'p6', doctorId: 'd3', date: '2026-06-25 09:15', status: 'Umówiona', notes: 'USG Tarczycy' },
        { id: 'a13', patientId: 'p7', doctorId: 'd1', date: '2026-04-01 11:00', status: 'Zrealizowana', notes: 'Wysypka' },
        { id: 'a14', patientId: 'p7', doctorId: 'd2', date: '2026-07-05 11:30', status: 'Umówiona', notes: 'Testy alergiczne' },
        { id: 'a15', patientId: 'p1', doctorId: 'd3', date: '2026-04-10 14:00', status: 'Zrealizowana', notes: 'Ból pleców' }
    ],
    testResults: [
        { id: 't1', patientId: 'p1', doctorId: 'd1', date: '2025-10-05', name: 'EKG Spoczynkowe', result: 'Nadciśnienie, hipertrofia lewej komory' },
        { id: 't2', patientId: 'p2', doctorId: 'd3', date: '2025-12-01', name: 'Spirometria', result: 'Obniżone FEV1, odwracalne po podaniu leku' },
        { id: 't3', patientId: 'p4', doctorId: 'd1', date: '2026-01-15', name: 'Troponiny', result: 'Podwyższone' },
        { id: 't4', patientId: 'p6', doctorId: 'd2', date: '2026-02-10', name: 'TSH', result: '3.4 mU/l - W normie' },
        { id: 't5', patientId: 'p7', doctorId: 'd2', date: '2026-04-01', name: 'IgE całkowite', result: 'Podwyższone - 450 IU/ml' }
    ]
};
