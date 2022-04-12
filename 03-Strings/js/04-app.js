const producto = '             Monitor 50 Pulgadas          ';

console.log(producto);
console.log(producto.length);

//Eliminar del inicio los espacio en blanco...
console.log(producto.trimStart()); //del inicio
console.log(producto.trimEnd()); //del final

console.log(producto.trimStart().trimEnd());

console.log(producto.trim()); //elimina espacios en blanco en ambas direcciones