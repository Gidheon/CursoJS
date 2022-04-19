const pendientes = ['Tarea','comer','proyecto','estudiar js'];

const carrito = [
    {nombre: 'Monitor de 20 pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
];

for (let pendiente of pendientes) {
    console.log(pendiente);
}

for (let producto of carrito) {
    console.log(producto.nombre);
}

//itera sobre arreglos