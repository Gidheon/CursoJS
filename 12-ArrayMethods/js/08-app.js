const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

console.log(meses);

//sprea operator con arreglo de indice
const meses2 = [...meses, 'Agosto']; //el orden influye
console.log(meses2);


const producto = { producto: 'Disco Duro', precio: 300 };

const carrito2 = [...carrito, producto];

console.log(carrito2);

//error sprea operator

const numeros = [1,[2,3],3];
//const copyNumbers = [...numeros];

const copyNumbers = JSON.parse(JSON.stringify(numeros)); //forma correcta de copiar los numeros

copyNumbers[1][0] = 5;

console.log(numeros [1][0]);
console.log(copyNumbers[1][0]);