// Función que cambia el texto de un botón
function cambiarTexto(boton) {
    if (boton.innerText == "Login") {
        boton.innerText = "Logout";
    } else {
        boton.innerText = "Login";
    }
}

// Función que muestra un mensaje de alerta
function mensaje() {
    alert("Ninja was liked!");
}

// Función que elimina un botón
function eliminarBoton(boton) {
    boton.remove();
}