//Operador que e igual que

const dinero = 1000;
const totalAPagar = 500;
const tarjeta = true;
const cheque = true;

if (dinero >= totalAPagar) {    //solo una condicion que se cumple
    console.log('Si podemos pagar');
} else if (cheque) {
    console.log('Si tengo cheque');
} else if (tarjeta) {
    console.log('Si puedo pagar por que tengo la tarjeta');
} else {
    console.log('Fondos Insuficientes');
}