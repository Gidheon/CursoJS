const carrito = [];


//Definir producto
const producto = {
    nombre: 'Monitor de 50 pulgadas',
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

const producto4 = {
    nombre: 'Celular 2',
    precio: 800
}

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);
carrito.unshift(producto3);

console.table(carrito);

//eliminar el ultimo elemento de ujn arreglo

/* carrito.pop();
console.table(carrito);

carrito.pop();
console.table(carrito); */

//eliminar del inicio del arreglo

/* carrito.shift(); */

//eliminar con spliceÑ primer parametro donde iniciara a cortar, cantidad de elementos
carrito.splice(1,1); //(1 donde incia, 1 cantidad)

console.table(carrito);