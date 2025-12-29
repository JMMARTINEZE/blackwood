document.addEventListener("DOMContentLoaded", function() {
    const lista = document.getElementById('lista-merito');
    if (lista) {
        const items = lista.getElementsByTagName('li');
        
        for (let i = 0; i < items.length; i++) {
            // Genera un número aleatorio entre 0 y 1. 
            // Si es mayor a 0.5 (50% de probabilidad), añade vacantes.
            if (Math.random() > 0.5) {
                // Creamos el elemento span para el texto de vacantes
                const vacanteSpan = document.createElement('span');
                
                // Aplicamos el estilo directamente para no usar CSS externo
                vacanteSpan.style.color = "#28a745"; // Verde ART
                vacanteSpan.style.fontWeight = "bold";
                vacanteSpan.style.marginLeft = "10px";
                
                // Texto que aparecerá
                vacanteSpan.innerText = "[ VACANTES DISPONIBLES ]";
                
                // Lo añadimos al final del <li>
                items[i].appendChild(vacanteSpan);
            }
        }
    }
});