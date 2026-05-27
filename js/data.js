const clinicData = {
    users: [
        { id: 'd1', role: 'doctor', username: 'd.nowak', password: 'haslo123', name: 'Dr. Anna Nowak', initials: 'AN' },
        { id: 'd2', role: 'doctor', username: 'j.kowalski', password: 'haslo123', name: 'Dr. Jan Kowalski', initials: 'JK' },
        { id: 'd3', role: 'doctor', username: 'p.wisniewski', password: 'haslo123', name: 'Dr. Piotr Wiśniewski', initials: 'PW' },
        
        { 
            id: 'p1', role: 'patient', username: 'a.mickiewicz', password: 'adam123', name: 'Adam Mickiewicz', initials: 'AM', dob: '1980-05-15', age: 46, gender: 'Mężczyzna',
            pesel: '80051512345', phone: '+48 111 222 333', email: 'adam@mickiewicz.pl', address: 'ul. Literacka 1, 00-001 Warszawa',
            status: 'Aktywny pacjent', tags: ['Nadciśnienie', 'Cukrzyca T2'],
            vitals: { pressure: '142/90', pressureStatus: 'yellow', glucose: '7.8', glucoseStatus: 'yellow', hr: '78', hrStatus: 'green', bmi: '26.4', bmiStatus: 'green', lastMeasured: '23.04.2026' },
            allergies: [{ name: 'Penicylina — ciężka reakcja' }, { name: 'Pyłki traw' }],
            history: 'Nadciśnienie, Cukrzyca typu 2', meds: 'Lisinopril 10mg, Metformina 500mg', notes: 'Pacjent zgłasza częste bóle głowy.', docs: ['EKG - 2024.pdf'],
            icdHistory: [
                { code: 'E11', name: 'Cukrzyca insulinoniezależna', date: '12.05.2021', doctor: 'Dr. Anna Nowak', status: 'Przewlekła' },
                { code: 'I10', name: 'Samoistne (pierwotne) nadciśnienie', date: '04.02.2020', doctor: 'Dr. Jan Kowalski', status: 'Aktywna' }
            ],
            medicationsList: [
                { name: 'Lisinopril', dose: '10mg', freq: '1x dziennie', since: '15.06.2021', nextRx: '12.06.2026', doctor: 'Dr. Anna Nowak', status: 'Aktywny' },
                { name: 'Metformina', dose: '500mg', freq: '2x dziennie', since: '20.08.2021', nextRx: '01.07.2026', doctor: 'Dr. Jan Kowalski', status: 'Aktywny' }
            ]
        },
        { 
            id: 'p2', role: 'patient', username: 'j.slowacki', password: 'juliusz123', name: 'Juliusz Słowacki', initials: 'JS', dob: '1991-09-04', age: 34, gender: 'Mężczyzna',
            pesel: '91090454321', phone: '+48 222 333 444', email: 'juliusz@slowacki.pl', address: 'ul. Wieszcza 2, 30-002 Kraków',
            status: 'Aktywny pacjent', tags: ['Astma'],
            vitals: { pressure: '120/80', pressureStatus: 'green', glucose: '5.2', glucoseStatus: 'green', hr: '72', hrStatus: 'green', bmi: '22.1', bmiStatus: 'green', lastMeasured: '10.05.2026' },
            allergies: [{ name: 'Sierść kota' }],
            history: 'Astma', meds: 'Salbutamol wziewnie', notes: 'Zalecono unikanie alergenów.', docs: ['Spirometria.pdf'],
            icdHistory: [
                { code: 'J45', name: 'Astma', date: '11.11.2015', doctor: 'Dr. Piotr Wiśniewski', status: 'Przewlekła' }
            ],
            medicationsList: [
                { name: 'Salbutamol', dose: '100mcg/dawkę', freq: 'Doraźnie', since: '11.11.2015', nextRx: '-', doctor: 'Dr. Piotr Wiśniewski', status: 'Aktywny' }
            ]
        },
        { 
            id: 'p3', role: 'patient', username: 'b.prus', password: 'boleslaw123', name: 'Bolesław Prus', initials: 'BP', dob: '1975-08-20', age: 50, gender: 'Mężczyzna',
            pesel: '75082098765', phone: '+48 333 444 555', email: 'b.prus@lalka.pl', address: 'ul. Nowy Świat 5, 00-003 Warszawa',
            status: 'Aktywny pacjent', tags: ['Profilaktyka'],
            vitals: { pressure: '125/82', pressureStatus: 'green', glucose: '5.5', glucoseStatus: 'green', hr: '68', hrStatus: 'green', bmi: '24.5', bmiStatus: 'green', lastMeasured: '01.03.2026' },
            allergies: [],
            history: 'Brak przewlekłych chorób', meds: 'Brak', notes: 'Profilaktyka w normie.', docs: [],
            icdHistory: [
                { code: 'Z00.0', name: 'Ogólne badanie lekarskie', date: '18.05.2026', doctor: 'Dr. Jan Kowalski', status: 'Zakończona' }
            ],
            medicationsList: []
        },
        { 
            id: 'p4', role: 'patient', username: 'h.sienkiewicz', password: 'henryk123', name: 'Henryk Sienkiewicz', initials: 'HS', dob: '1960-05-05', age: 66, gender: 'Mężczyzna',
            pesel: '60050511223', phone: '+48 444 555 666', email: 'h.sienkiewicz@potop.pl', address: 'ul. Historyczna 10, 00-004 Warszawa',
            status: 'Wymaga uwagi', tags: ['Choroba wieńcowa'],
            vitals: { pressure: '135/85', pressureStatus: 'yellow', glucose: '6.0', glucoseStatus: 'green', hr: '65', hrStatus: 'yellow', bmi: '28.2', bmiStatus: 'yellow', lastMeasured: '15.01.2026' },
            allergies: [{ name: 'Aspiryna' }],
            history: 'Choroba wieńcowa', meds: 'Acard 75mg, Bisoprolol', notes: 'Wymaga kontroli kardiologicznej za 3 mce.', docs: ['Echo_Ostre.pdf', 'Wypis_Szpital.pdf'],
            icdHistory: [
                { code: 'I25', name: 'Przewlekła choroba niedokrwienna serca', date: '20.01.2026', doctor: 'Dr. Anna Nowak', status: 'Aktywna' }
            ],
            medicationsList: [
                { name: 'Bisoprolol', dose: '5mg', freq: '1x rano', since: '25.01.2026', nextRx: '20.06.2026', doctor: 'Dr. Anna Nowak', status: 'Aktywny' },
                { name: 'Acard', dose: '75mg', freq: '1x wieczorem', since: '25.01.2026', nextRx: '20.06.2026', doctor: 'Dr. Anna Nowak', status: 'Aktywny' }
            ]
        },
        { 
            id: 'p5', role: 'patient', username: 'w.reymont', password: 'wladek123', name: 'Władysław Reymont', initials: 'WR', dob: '1985-07-07', age: 40, gender: 'Mężczyzna',
            pesel: '85070733445', phone: '+48 555 666 777', email: 'w.reymont@chlopi.pl', address: 'ul. Wiejska 7, 90-005 Łódź',
            status: 'Aktywny pacjent', tags: ['Migreny'],
            vitals: { pressure: '118/75', pressureStatus: 'green', glucose: '5.1', glucoseStatus: 'green', hr: '70', hrStatus: 'green', bmi: '23.8', bmiStatus: 'green', lastMeasured: '09.09.2025' },
            allergies: [],
            history: 'Migreny', meds: 'Sumatryptan doraźnie', notes: 'Obserwacja częstotliwości ataków.', docs: ['MRI_Glowy.pdf'],
            icdHistory: [
                { code: 'G43', name: 'Migrena', date: '05.09.2025', doctor: 'Dr. Piotr Wiśniewski', status: 'Przewlekła' }
            ],
            medicationsList: [
                { name: 'Sumatryptan', dose: '50mg', freq: 'Doraźnie w czasie ataku', since: '09.09.2025', nextRx: '-', doctor: 'Dr. Piotr Wiśniewski', status: 'Aktywny' }
            ]
        },
        { 
            id: 'p6', role: 'patient', username: 'e.orzeszkowa', password: 'eliza123', name: 'Eliza Orzeszkowa', initials: 'EO', dob: '1990-06-06', age: 35, gender: 'Kobieta',
            pesel: '90060655667', phone: '+48 666 777 888', email: 'e.orzeszkowa@nadniemn.pl', address: 'ul. Rzeczna 3, 15-006 Białystok',
            status: 'Aktywny pacjent', tags: ['Niedoczynność tarczycy'],
            vitals: { pressure: '115/78', pressureStatus: 'green', glucose: '4.8', glucoseStatus: 'green', hr: '66', hrStatus: 'green', bmi: '21.5', bmiStatus: 'green', lastMeasured: '10.02.2026' },
            allergies: [],
            history: 'Niedoczynność tarczycy', meds: 'Euthyrox 50', notes: 'TSH stabilne.', docs: ['Wyniki_Krwi_2025.pdf'],
            icdHistory: [
                { code: 'E03.9', name: 'Niedoczynność tarczycy, nieokreślona', date: '14.02.2026', doctor: 'Dr. Jan Kowalski', status: 'Przewlekła' }
            ],
            medicationsList: [
                { name: 'Euthyrox', dose: '50mcg', freq: '1x rano na czczo', since: '14.02.2026', nextRx: '10.08.2026', doctor: 'Dr. Jan Kowalski', status: 'Aktywny' }
            ]
        },
        { 
            id: 'p7', role: 'patient', username: 'm.konopnicka', password: 'maria123', name: 'Maria Konopnicka', initials: 'MK', dob: '1995-10-10', age: 30, gender: 'Kobieta',
            pesel: '95101077889', phone: '+48 777 888 999', email: 'm.konopnicka@rota.pl', address: 'ul. Ludowa 12, 60-007 Poznań',
            status: 'Aktywny pacjent', tags: ['Alergia'],
            vitals: { pressure: '110/70', pressureStatus: 'green', glucose: '4.5', glucoseStatus: 'green', hr: '75', hrStatus: 'green', bmi: '20.0', bmiStatus: 'green', lastMeasured: '01.04.2026' },
            allergies: [{ name: 'Pyłki drzew' }, { name: 'Roztocza' }],
            history: 'Alergia pyłkowa', meds: 'Clatra', notes: 'Odczulanie w trakcie.', docs: [],
            icdHistory: [
                { code: 'J30.1', name: 'Alergiczny nieżyt nosa wywołany pyłkami', date: '01.04.2026', doctor: 'Dr. Anna Nowak', status: 'Przewlekła' }
            ],
            medicationsList: [
                { name: 'Clatra', dose: '20mg', freq: '1x dziennie', since: '01.04.2026', nextRx: '01.07.2026', doctor: 'Dr. Anna Nowak', status: 'Aktywny' }
            ]
        }
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
