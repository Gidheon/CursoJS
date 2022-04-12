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
const {nombre, precio, disponible} = producto;

console.log(nombre);
console.log(precio);
console.log(disponible);