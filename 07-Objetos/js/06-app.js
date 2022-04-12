const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}


/*  const {nombre} = producto;

console.log(nombre);  */

//para acceder mas adentro con destructuring
/* cada es una varibale en este caso se esta llevando a variable nombre y fabricacion
const {nombre, informacion:{fabricacion}}= producto; */

const {nombre, informacion, informacion:{fabricacion, fabricacion: {pais}}}= producto;

console.log(pais);
console.log(fabricacion);