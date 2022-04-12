//pregunta al usuario cual es su nombre
/* 
    ======================================
    ===LE PREGUNTA AL USUARIO SU NOMBRE===
    ======================================
*/
const nombre = prompt('Cual es tu name?');

//toma el nombre y lo muestra en pantalla
document.querySelector('.contenido').innerHTML = `${nombre} esta aprendiendo javascript moderno`;

//asigna el valor hacia la variable producto
const producto = 'Monitor dde 24 pulgadas';


console.time('Hola');

console.warn('eso no esta permitido');
console.warn('eso no esta permitido');
console.warn('eso no esta permitido');
console.warn('eso no esta permitido');
console.warn('eso no esta permitido');
console.warn('eso no esta permitido');
console.warn('eso no esta permitido');
console.warn('eso no esta permitido');

console.timeEnd('Hola');

/* 
Java Scrip no pasa nada si no coloco el ;
pero es recomendable siempre ponerlo por orden.

en funciones agregar un tab o espacio para mantener el orden de la misma


bien
function hola() {
    console.log('ok');
    console.log('ok');
    console.log('ok');
}

mal
function hola() {
console.log('ok');
console.log('ok');
console.log('ok');
}

*/

