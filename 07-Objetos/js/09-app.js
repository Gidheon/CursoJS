"use strict";

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

//no permite modificar las propiedades ni agregar nuevas, pero si se pueden modificar las existentes
Object.seal(producto);

producto.disponible = false;
/* producto.imagen = 'imagen.jpg';
delete  producto.precio;  */

console.log(producto);

console.log(Object.isSealed(producto));