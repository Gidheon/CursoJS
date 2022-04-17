const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

//extrae el nombre y lo coloca en variable nombre
/* const nombre = producto.nombre;
console.log(nombre); */


// otra forma de extraer el nombre del producto y meterlo en una variable nueva
/* const {nombre} = producto; */
//o tambien puede simplificarse asi
/* Dentro de la llave tiene que existie dentor del objeto si cambiamos el primero por un nombre random como por ejemplo a
eso hace que quede undifined */
const {nombre, precio, disponible} = producto;

console.log(nombre);

//destructuring con arreglos
const numeros = [10,20,30,40,50];

/* si quiero acceder al 30 tengo q definirlos como {primero, segundo, tercero} */


//sintaxis 2 primera coma nada y segunda tampoco y luego la 3era
/* const {,,  tercero} = numeros; */

const [primero, ...tercero] =  numeros;

console.log(tercero);