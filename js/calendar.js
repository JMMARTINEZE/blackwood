/**
 * CALENDARIO - APPALACHIAN RESURGENCE TRUST (ART)
 * Versión: 2050.12.01 (Parche de compatibilidad de terminal)
 */

function filterEvents(category, buttonElement) {
    // 1. Actualizar estados visuales de los botones
    const buttons = document.querySelectorAll('.btn-filter');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Si pasamos el elemento directamente, es más seguro que usar 'event'
    if (buttonElement) {
        buttonElement.classList.add('active');
    }

    // 2. Filtrar eventos
    const events = document.querySelectorAll('.event-item');
    const headers = document.querySelectorAll('.month-header');

    events.forEach(eventCard => {
        if (category === 'all' || eventCard.classList.contains(category)) {
            eventCard.style.display = 'flex';
        } else {
            eventCard.style.display = 'none';
        }
    });

    // 3. Lógica extra: Ocultar meses vacíos (opcional pero recomendado)
    headers.forEach(header => {
        // Miramos si hay algún evento visible después de este encabezado
        let next = header.nextElementSibling;
        let hasVisibleEvents = false;
        
        while (next && !next.classList.contains('month-header')) {
            if (next.classList.contains('event-item') && next.style.display === 'flex') {
                hasVisibleEvents = true;
                break;
            }
            next = next.nextElementSibling;
        }
        
        header.style.display = hasVisibleEvents ? 'block' : 'none';
    });
}