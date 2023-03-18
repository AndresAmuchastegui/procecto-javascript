// Entradas
let distancia = parseFloat(prompt("Ingrese la distancia de envio en kilómetros:"));
while (isNaN(distancia) || distancia < 0) {
    alert("La distancia de envio debe ser un dato numerico y no debe ser inferior a 0")
    distancia = +prompt("Ingrese la distancia en kilómetros:");
}

let peso = parseFloat(prompt("Ingrese el peso del paquete en kilogramos:"));
while (isNaN(peso) || peso < 0) {
    alert("El peso del producto debe ser un dato numerico y no debe ser inferior a 0")
    peso = +prompt("Ingrese el peso en kilogramos:");
}

// Declara variables y objetos
let costoKm = 2; // Costo por kilómetro
let costoPeso = 5; // Costo por kilogramo
let costoFijo = 10; // Costo fijo de entrega
let descuento = 0; // Descuento a aplicar al costo total
let total = 0; // Costo total de entrega
let paquetes = [
    {nombre: "Paquete 1", peso: 2, distancia: 10},
    {nombre: "Paquete 2", peso: 4, distancia: 20},
    {nombre: "Paquete 3", peso: 1, distancia: 5},
    {nombre: "Paquete 4", peso: 3, distancia: 15},
    {nombre: "Paquete 5", peso: 5, distancia: 25},
]; 

// Función para calcular el costo de entrega
function calcularCosto(distancia, peso) {
    let costoDistancia = distancia * costoKm;
    let costoPesoTotal = peso * costoPeso;
    let costoTotal = costoDistancia + costoPesoTotal + costoFijo;
    return costoTotal;
}

// Llamar a la función
total = calcularCosto(distancia, peso);

// Aplicar descuento del 10% si el costo total es mayor a 50
if (total > 50) {
    descuento = total * 0.1;
    total -= descuento;
}

// Mostrar el resultado al usuario
console.log("El costo de entrega es $" + total.toFixed(2) + ".");
console.log("Se aplicó un descuento de $" + descuento.toFixed(2) + ".");

let paquetesLivianos = paquetes.filter(function(paquete) {
    return paquete.peso < 3;
});

console.log("Los paquetes livianos son:");
console.log(paquetesLivianos);

let paqueteBuscado = paquetes.find(function(paquete) {
    return paquete.distancia === 20;
});

console.log("El paquete buscado es:");
console.log(paqueteBuscado);
