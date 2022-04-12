const producto = 'Monitor 50 Pulgadas';

//.repeat te va a permitri repetir una cadena de texto
const texto = ' en Promocion'.repeat(3);//nos repetira 3 veces este texto
/* const texto = ' en Promocion'.repeat(2.4); rtedondeara el numero y colocara 2 repeticiones solamente */

console.log(texto);
console.log(`${producto} ${texto} !!!`);

//.split te permitira dividir un string

const actividad = "Estoy aprendiendo js moderno";
console.log(actividad.split(" ")); //divide la cadena de texto por cada una de las palabras

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(", "));

const tweet = 'Aprendiendo JS moderno #JSModernoConJuan';
console.log(tweet.split('#'));