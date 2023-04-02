// Manejador de eventos para el botón "Calcular costo"
document.getElementById("calcular-btn").addEventListener("click", function (event) {
    event.preventDefault(); // evitar que el formulario se envíe

    // Leer los valores de los campos de entrada
    let peso = parseFloat(document.getElementById("peso").value);
    let distancia = parseFloat(document.getElementById("distancia").value);

    // Calcular el costo de envío
    let costo = calcularCostoEnvio(peso, distancia);

    // Mostrar el resultado en la página
    let resultado = document.createElement("p");
    resultado.textContent = "El costo de envío es de $" + costo.toFixed(2);
    document.body.appendChild(resultado);
});

// Función para calcular el costo de envío
function calcularCostoEnvio(peso, distancia) {
    // Leer los valores de costo de envío desde un archivo JSON
    let costoBase = 10;
    let costoPorKg = 1.5;
    let costoPorKm = 0.5;

    // Calcular el costo total de envío
    let costo = costoBase + (peso * costoPorKg) + (distancia * costoPorKm);

    // Almacenar los datos en el Storage
    localStorage.setItem("peso", peso);
    localStorage.setItem("distancia", distancia);
    localStorage.setItem("costo", costo);

    // Devolver el costo total
    return costo;
}
