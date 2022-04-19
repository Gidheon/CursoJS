/* for (let i = 0; i <= 10; i++) { //con += va de 2 en 2
    if (i === 5) {
        console.log('Cinco');
       // break; para cortar ejecucion
       continue; //ejecuta el cinco y no muestra el 5 de la variable i

    }
    console.log(`Numero: ${i}`);
    
}
 */
const carrito = [
    {nombre: 'Monitor de 20 pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200, descuento: true },
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
];

for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento) {
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`)
        continue;
    }
    console.log(carrito[i].nombre);
    
}