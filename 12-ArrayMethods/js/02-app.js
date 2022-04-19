const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

/* meses.forEach((mes,i) => {
    if (mes === 'Abril') {
        console.log(`Encontrado en el mes ${i}`);
    }
}); */

//encontrar el indice de abril
const indice = meses.findIndex(mes => mes === 'Abril');
console.log(indice); //sale -1 si no lo encuentra de caso contrario sale el indice de donde lo encuentra


//encontrar un indice de una rreglo de objetos
const indice2 = carrito.findIndex(producto => producto.precio === 100); //si hay 2 elementos con el mismo precio solo retorna 1, el primero que encuentre 
console.log(indice2);