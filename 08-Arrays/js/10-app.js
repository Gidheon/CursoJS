const carrito = [
    {nombre: 'Monitor de 20 pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
];

//.map crea un nuevo arreglo  mientras que for each nop
const nuevoArreglo = carrito.map( function(producto){
    return (`${producto.nombre} = Precio: ${producto.precio}`);
});

//con este array metod se puede hacer la variable como se guste
const nuevoArreglo2 = carrito.forEach( function(producto){
    return (`${producto.nombre} = Precio: ${producto.precio}`);
});

console.log(nuevoArreglo);
console.log(nuevoArreglo2);