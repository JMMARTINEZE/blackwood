/**
 * ARCHIVO PRINCIPAL DE INTERFAZ - APPALACHIAN RESURGENCE TRUST (ART)
 * Versión: 2050.12.29
 */

document.addEventListener('DOMContentLoaded', () => {
    loadPreferences();
    initAppearanceMenu();
    initARTSystem();
});

/**
 * INICIALIZACIÓN DEL MENÚ DE APARIENCIA (Toggle del engranaje ⚙️)
 */
function initAppearanceMenu() {
    const menu = document.getElementById('appearance-menu');
    const toggleBtn = document.querySelector('.appearance-toggle');

    if (!menu || !toggleBtn) return;

    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('visible');
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !toggleBtn.contains(e.target)) {
            menu.classList.remove('visible');
        }
    });
}

/**
 * SISTEMA DE METADATOS Y RASTREO (Simulación narrativa)
 */
function initARTSystem() {
    // A. Minutos aleatorios para la auditoría
    const auditTimer = document.getElementById('audit-timer');
    if (auditTimer) {
        auditTimer.innerText = Math.floor(Math.random() * 59) + 1;
    }

    // B. Generar IP interna ficticia (Rango 10.42.x.x)
    const userIp = document.getElementById('user-fake-ip');
    if (userIp) {
        userIp.innerText = `10.42.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
    }

    // C. Generar ID de Sesión único (ART-XXXXXXXX)
    const sessionId = document.getElementById('user-session-id');
    if (sessionId) {
        const chars = 'ABCDEF0123456789';
        let result = 'ART-';
        for (let i = 0; i < 8; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        sessionId.innerText = result;
    }
}

/**
 * PROTOCOLO DE EMERGENCIA
 */
function dispararEmergencia() {
    const modal = document.getElementById('modal-emergencia');
    if (modal) {
        modal.style.display = 'flex';
        console.warn('ALERTA: Protocolo de emergencia activado desde terminal local.');
    }
}

function cerrarEmergencia() {
    const modal = document.getElementById('modal-emergencia');
    if (modal) {
        modal.style.display = 'none';
    }
}

/**
 * GESTIÓN DE APARIENCIA Y PERSISTENCIA (LocalStorage)
 */
function setFont(size, button) {
    const sizes = { small: '14px', standard: '16px', large: '19px' };
    document.body.style.fontSize = sizes[size] || sizes.standard;

    updateActiveButton(button);
    localStorage.setItem('wiki-font-size', size);
}

function setWidth(width, button) {
    const content = document.getElementById('content');
    if (content) {
        content.classList.toggle('full-width', width === 'full');
    }

    updateActiveButton(button);
    localStorage.setItem('wiki-width', width);
}

function setMode(mode, button) {
    document.body.classList.toggle('dark-mode', mode === 'dark');

    updateActiveButton(button);
    localStorage.setItem('wiki-mode', mode);
}

/**
 * UTILIDADES DE INTERFAZ
 */
function updateActiveButton(activeBtn) {
    if (!activeBtn) return;
    const group = activeBtn.closest('.control-group');
    if (group) {
        group.querySelectorAll('.btn-wiki').forEach(btn => btn.classList.remove('active'));
        activeBtn.classList.add('active');
    }
}

function loadPreferences() {
    const savedMode = localStorage.getItem('wiki-mode') || 'light';
    const savedWidth = localStorage.getItem('wiki-width') || 'standard';
    const savedFont = localStorage.getItem('wiki-font-size') || 'standard';

    // Aplicar Modo
    const btnMode = document.getElementById(
        savedMode === 'dark' ? 'btn-mode-dark' : 'btn-mode-light'
    );
    setMode(savedMode, btnMode);

    // Aplicar Ancho
    const btnWidth = document.getElementById(
        savedWidth === 'full' ? 'btn-width-full' : 'btn-width-std'
    );
    setWidth(savedWidth, btnWidth);

    // Aplicar Fuente
    const btnFont = document.getElementById(
        savedFont === 'standard' ? 'btn-font-std' : `btn-font-${savedFont}`
    );
    setFont(savedFont, btnFont);
}
