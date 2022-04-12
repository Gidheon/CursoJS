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


console.log(producto);

//Con la sintaxis de punto se pueden ir accediendo a los objetos
console.log(producto.informacion);
console.log(producto.informacion.medidas.peso);
console.log(producto.informacion.medidas.medida);

//accediendo a el pais
console.log(producto.informacion.fabricacion.pais);
