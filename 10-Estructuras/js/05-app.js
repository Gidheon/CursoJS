//switch case

const metodoPago = 'efectivo';

switch (metodoPago) {
    case 'efectivo':
        pagar(metodoPago);
        break;

    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;

    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}`);
        break;

    //default es obligatorio en caso que ninguna condicion se cumpla
    default:
        console.log('Aun no has seleccionado un metodo de pago o metodo de pago no soportado');
        break;
}

function pagar(metodoPago) {
    console.log(`Pagaste con ${metodoPago}`)
}