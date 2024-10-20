// Función para comprobar si un número es primo
function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Generar el siguiente primo
function siguientePrimo(num) {
    let siguiente = num + 1;
    while (!esPrimo(siguiente)) {
        siguiente++;
    }
    return siguiente;
}

// Generar el primo anterior
function anteriorPrimo(num) {
    let anterior = num - 1;
    while (anterior > 1 && !esPrimo(anterior)) {
        anterior--;
    }
    return anterior;
}

let numeroPrimoActual = 2;
const numeroPrimoElemento = document.getElementById('primeNumber');

// Manejar el click izquierdo (avanzar)
document.addEventListener('click', function () {
    numeroPrimoActual = siguientePrimo(numeroPrimoActual);
    numeroPrimoElemento.textContent = numeroPrimoActual;
});

// Manejar el click derecho (retroceder)
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    if (numeroPrimoActual > 2) {
        numeroPrimoActual = anteriorPrimo(numeroPrimoActual);
        numeroPrimoElemento.textContent = numeroPrimoActual;
    }
});
