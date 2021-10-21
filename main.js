let total = 0;

function agregarAlCarrito() {

    do {
        let producto = prompt("¿Querés encargar una pizza de muzarella, provolone o ambas?", "Ej: ambas");
        let cantidad = parseInt(prompt("¿Cuantos queres comprar?", 0));

        let precio = 0;

        switch (producto) {
            case "muzarella" :
                precio = 500;
                break;
            case "provolone" :
                precio = 700;
                break;
            case "ambas" :
                precio = 1100;
                break;
            default :
                alert("Alguno de los datos ingresados es incorrecto");
                precio = 0;
                cantidad = 0;
        }

        total = total + precio * cantidad;
        otroProducto = confirm("¿Querés agregar otro producto?")
    } while (otroProducto);
}

function aplicarDescuento(total) {
    if(total >= 5000) {
        total = total * 0.80;
    }
    return total;
}

function calcularEnvio(total) {
    let confirmacion = confirm("¿Querés envío a domicilio?");

    if( confirmacion && total >= 2000) {
        alert("Tenés envio gratis. El total de tu compra es $"+total);
    } else if ( confirmacion && total < 2000 && total != 0) {
        alert("El envío cuesta $700. El total de tu compra es $"+ total )
        total = total + 700;
    } else {
        alert("El total de tu compra es $"+total);
    }

    return total;
}

agregarAlCarrito();
calcularEnvio(aplicarDescuento(total));