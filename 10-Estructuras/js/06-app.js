const usuario = true;
const puedePagar = true;

if (usuario && puedePagar) {
    console.log('Si puedes comprar');
} else if (!usuario && !puedePagar) {
    console.log('No, no puedes comprar');
}
else if (!usuario) {
    console.log(`inicia sesion o saca una cuenta`);
} else if (!puedePagar) {
    console.log('Fondos insuficientes');
}
else {
    console.log('No, no puedes comprar');
}