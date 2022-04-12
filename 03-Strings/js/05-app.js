const producto = 'Monitor 50 Pulgadas';

//.replace para reemplezar
console.log(producto);
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

//.slice para cortar
console.log(producto.slice(0, 10)); //corta desde la pocicion del caracter 0 al 10
console.log(producto.slice(8));// ya que no se le paso el limite hasta donde asume de que cortara desde el 8 al final
console.log(producto.slice(2, 1));  // si el primer numero es mayo no va a cortar

//Alternativa a slice
console.log(producto.substring(0, 10)); // donde incia a cortar y donde deja de cortar
console.log(producto.substring(2, 1)); //si le pasas un numero mayo de inicio substring lo modifica del menor al mayor

const usuario = "Eduardo";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));//corta desde la primera letra