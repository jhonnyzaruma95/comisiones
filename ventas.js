const VENTAS_BASE = 5;


function calcularComision(numeroVentas, PrecioProducto) {
    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {
        let ventasExtra = numeroVentas - VENTAS_BASE;
        comision = ventasExtra * (PrecioProducto * 0.10);
    }

    return comision;
}

function validarInput(idInput, idError) {
    const input = document.getElementById(idInput);
    const error = document.getElementById(idError);
    const valor = input.value.trim();

    // Limpiar mensaje anterior
    error.textContent = "";

    // No puede estar vacío
    if (valor === "") {
        error.textContent = "Este campo no puede estar vacío.";
        return false;
    }

    // Solo números
    if (!/^\d+$/.test(valor)) {
        error.textContent = "Solo se permiten números.";
        return false;
    }

    // Máximo 5 dígitos
    if (valor.length > 5) {
        error.textContent = "Máximo 5 dígitos.";
        return false;
    }

    return true;
}

function calcular(){

    //recuperamos propiedades de las cajas de texto
    //let componenteSueldoBase = document.getElementById("txtSueldoBase");
    //let componenteVentas = document.getElementById("txtVentas");
    //let componentePrecio = document.getElementById("txtPrecio");

    //recuperamos el valor de las cajas de texto

    //let sueldoBaseStr = componenteSueldoBase.value;

    //let sueldoBaseStr = recuperarTexto("txtSueldoBase");
    //let numeroVentasStr = recuperarTexto("txtVentas");
    //let PrecioProductoStr = recuperarTexto("txtPrecio");

    //let numeroVentasStr = componenteVentas.value;
    //let PrecioProductoStr = componentePrecio.value;

    //convertimos el texto a numero


    let sueldoBase = recuperarFloat("txtSueldoBase")
    let numeroVentas = recuperarFloat("txtVentas")
    let PrecioProducto = recuperarFloat("txtPrecio")

    let comision = calcularComision(numeroVentas, PrecioProducto);

    let total = sueldoBase + comision;

    //let spSueldoBase = document.getElementById("spSueldoBase");
    //let spComision = document.getElementById("spComision");
    //let spTotal = document.getElementById("spTotal");

    //spSueldoBase.textContent = sueldoBase;
    //spComision.textContent = comision;
    //spTotal.textContent = total;

    mostrarEnSpan("spSueldoBase", sueldoBase);
    mostrarEnSpan("spComision", comision);
    mostrarEnSpan("spTotal", total);

}
