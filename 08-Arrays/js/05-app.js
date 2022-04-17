const meses = ['Enero','Febero', 'Marzo'];


/* meses[3] = 'Abril'; */

//Agregar al final del arreglo
meses.push('Abril');
meses.push('Mayo');

console.table(meses);

//2do ejemplo
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


carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);

console.table(carrito);