//for each

const pendientes = ['Tarea','comer','proyecto','estudiar js'];


pendientes.forEach((pendiente,indice) => {
    console.log(`${indice}: ${pendiente}`);
});

const carrito = [
    {nombre: 'Monitor de 20 pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
];

carrito.forEach(producto => {
    console.log(producto.nombre);
});

//con variable
//el for each no puede llenar una variable
const nuevoArreglo = carrito.forEach(producto => producto.nombre);

//el map puede llenar variable
const nuevoArreglo2 = carrito.map(producto => producto.nombre);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);