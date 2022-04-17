const carrito = [
    {nombre: 'Monitor de 20 pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
];



//for loop
for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
    console.log(carrito[i].nombre);

    console.log(`${carrito[i].nombre} = Precio: ${carrito[i].precio}`);
}

//con este array metod se puede hacer la variable como se guste
carrito.forEach( function(producto){
    console.log(`${producto.nombre} = Precio: ${producto.precio}`);
});