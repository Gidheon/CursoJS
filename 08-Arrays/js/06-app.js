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

let resultado;

//forma declarativa: realiza un clon con  esos tres puntitos a carrito
resultado = [...carrito, producto];

//realiza una copia de resultado y luego comola el producto al final
resultado =[...resultado, producto2];

//Coloca el producto al principio y luego realiza una copia
resultado =[producto3, ...resultado];


console.table(resultado);