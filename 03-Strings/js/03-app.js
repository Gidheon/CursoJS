const producto = 'Monitor 50 Pulgadas ';
const precio ='30 USD';

console.log(producto.concat(precio));
console.log(producto.concat('En descuento'));

//formas de concatenar
console.log(producto + 'Con un precio de ' + precio);
console.log("El producto "+producto+"Tiene un precio de "+precio);
console.log("El producto ",producto,"Tiene un precio de ",precio);
console.log(`El producto ${producto} tiene un precio de $ ${precio}`);