/**
 * DASHBOARD DE ESTADO DE SERVICIOS - APPALACHIAN RESURGENCE TRUST (ART)
 * Versión: 2050.11.30
 */
const ctxColor = '#4a4a4a';

// 1. ENERGÍA: Obtenidos vs Necesarios
new Chart(document.getElementById('chartEnergia'), {
    type: 'bar',
    data: {
        labels: ['Generador Geotermal', 'Solar Camuflada', 'Eólica Cresta'],
        datasets: [{
            label: 'KW Obtenidos',
            data: [450, 120, 80],
            backgroundColor: '#28a745'
        }, {
            label: 'KW Necesarios',
            data: [300, 100, 60],
            backgroundColor: '#ffc107'
        }]
    },
    options: { responsive: true, scales: { y: { beginAtZero: true } } }
});

// 2. SEGURIDAD: Falsas alarmas vs Positivos
new Chart(document.getElementById('chartSeguridad'), {
    type: 'line',
    data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
        datasets: [{
            label: 'Falsas Alarmas (Fauna/Clima)',
            data: [12, 19, 3, 5, 2, 8],
            borderColor: '#007bff',
            tension: 0.3
        }, {
            label: 'Intrusiones Reales',
            data: [0, 1, 0, 0, 1, 0],
            borderColor: '#dc3545',
            borderDash: [5, 5]
        }]
    }
});

// 3. DEMOGRAFÍA: Pirámide de edad
new Chart(document.getElementById('chartDemografia'), {
    type: 'doughnut',
    data: {
        labels: ['< 10', '10-12', '13-16', '17-20', '> 21'],
        datasets: [{
            data: [15, 20, 35, 20, 90],
            backgroundColor: ['#e9ecef', '#dee6e2ff', '#daced8ff', '#bdbaadff', '#495057']
        }]
    }
});

// 4. CULTURA: Aprobados vs Rechazados
new Chart(document.getElementById('chartCultura'), {
    type: 'pie',
    data: {
        labels: ['Aprobados (Manuales)', 'Aprobados (Externos)', 'Rechazados'],
        datasets: [{
            data: [45, 25, 5],
            backgroundColor: ['#28a745', '#20c997', '#dc3545']
        }]
    }
});

// 5. DEPORTE: Participantes vs No participantes
new Chart(document.getElementById('chartDeporte'), {
    type: 'radar',
    data: {
        labels: ['Fútbol Am.', 'Pentatlón', 'Artes Marciales', 'Baloncesto', 'Natación', 'Sin actividad'],
        datasets: [{
            label: 'Participación Juvenil %',
            data: [80, 53, 65, 40, 30, 10],
            fill: true,
            backgroundColor: 'rgba(40, 167, 69, 0.2)',
            borderColor: '#28a745'
        }]
    }
});

// 6. ECONOMÍA: Demanda Laboral
new Chart(document.getElementById('chartEconomia'), {
    type: 'bar',
    data: {
        labels: ['Informático', 'Mantenimiento', 'Diplomacia', 'Logística', 'Seguridad'],
        datasets: [{
            label: 'Nivel de Demanda (%)',
            data: [15, 25, 15, 25, 24],
            backgroundColor: ['#e9ecef', '#dee6e2ff', '#daced8ff', '#bdbaadff', '#495057'],
            borderWidth: 1,
            borderColor: '#ccc'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, // IMPORTANTE: Esto permite que se estire al 100% del div
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) { return value + '%'; }
                }
            }
        }
    }
});
