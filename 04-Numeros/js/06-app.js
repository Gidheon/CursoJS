const numero1 = '20';
const numero2 = '20.2';
const numero3 = 'Uno';
const numero4 = 20;

console.log(Number.parseInt(numero1)); //combierte a numero string a numero entero
console.log(Number.parseFloat(numero2)); //comvierte a decimales
console.log(Number.parseInt(numero3)); //devuelve Nan por que no puede convertirlo


//Revisar si un numero es entero o no
console.log(Number.isInteger(numero4));

console.log(numero1);