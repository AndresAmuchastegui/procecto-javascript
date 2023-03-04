// Pedir al usuario el precio base, porcentaje de impuestos y porcentaje de descuento
let precioBase = "n";
precioBase = +prompt("Ingrese el precio base del producto (solo se permiten números): ");
while (isNaN(precioBase) || precioBase < 0) {
    alert("El precio del producto debe ser numerico y no debe ser inferior a 0")
    precioBase = +prompt("Ingrese el precio base del producto (solo se permiten números): ");
}

let impuestos = "n";
impuestos = +prompt("Ingrese el porcentaje de impuestos (por ejemplo, 10 para un impuesto del 10%) (solo se permiten números): ");
while (isNaN(impuestos) || impuestos < 0) {
    alert("El porcentaje de impuestos debe ser numerico y no debe ser inferior a 0%")
    impuestos = +prompt("Ingrese el porcentaje de impuestos (por ejemplo, 10 para un impuesto del 10%) (solo se permiten números): ");
}

let descuento = "n";
descuento = +prompt("Ingrese el porcentaje de descuento (por ejemplo, 5 para un descuento del 5%): ");
while (isNaN(descuento) || descuento < 0 || descuento > 100) {
    alert("El porcentaje de descuento debe ser numerico, no puede superar el 100% ni ser inferior a 0%.")
    descuento = +prompt("Ingrese el porcentaje de descuento (por ejemplo, 5 para un descuento del 5%): ");
}


// Función para calcular el precio final del producto
function calcularPrecioFinal(precioBase, impuestos, descuento) {
    let descuentoAplicados = precioBase * (descuento / 100);
    let precioConDescuento = precioBase - descuentoAplicados;
    let impuestosAplicados = precioConDescuento * (impuestos / 100);
    let precioFinal = precioConDescuento + impuestosAplicados;
    return [precioFinal, impuestosAplicados, descuentoAplicados];

}

let precios = calcularPrecioFinal(precioBase, impuestos, descuento);
let precioFinal = precios[0];
let impuestosAplicados = precios[1];
let descuentoAplicado = precios[2];

// Llamar a la función y mostrar el precio final al usuario
alert("El precio final del producto es: $" + precioFinal.toFixed(2) + "\n" +
    "-----------------------------------------" + "\n" +
    "Precio base del producto: $" + precioBase.toFixed(2) + "\n" +
    "Impuestos aplicados: $" + impuestosAplicados.toFixed(2) + " (" + impuestos.toFixed(2) + "%)\n" +
    "Descuento aplicado: $" + descuentoAplicado.toFixed(2) + " (" + descuento.toFixed(2) + "%)");