const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
//todos los elementos deben cumplir la condicion en este caso todos deben ser menores a 1000 en ese caso true
const resultado = carrito.every(producto => producto.precio < 1000);

console.log(resultado);

//en este caso con 1 que la cumpla basta
const resultad2 = carrito.some(producto => producto.precio < 500);
console.log(resultad2);


