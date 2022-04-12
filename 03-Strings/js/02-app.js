const producto = 'Monitor 50 Pulgadas';

console.log(producto);

//conocer la cantidad de letras de la cadena te texto
console.log(producto.length); //de los muy poco metodos que no utilizan parentesis

//para saber en que posicion tiene la palabra monitor
//console.log(producto.indexOf('Tablet'));

//busca por inclusion de palabra o letra y devuelve true o false
console.log(producto.includes('Tablet')); //devuelve false por q no lo encuentra
console.log(producto.includes('Monitor')); //devuelve true por que si lo encuentra
console.log(producto.includes('monitor')); //devuelve false por q tiene que ser la palabra exacta