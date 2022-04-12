/* const nombre = 'Hola';
const precio = 20; */

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        /* la palabra this hace referencia a los valores que existen dentro del mismo objeto sin esta palabra hay que 
        definirlos afuera del objeto  ejemplo ${this.nombre}*/
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio} `)
    }
}

const producto2 = {
    nombre: "Tablet",
    precio: 3000,
    disponible: true,
    mostrarInfo: function(){
        /* la palabra this hace referencia a los valores que existen dentro del mismo objeto sin esta palabra hay que 
        definirlos afuera del objeto  ejemplo ${this.nombre}*/
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio} `)
    }
}

producto.mostrarInfo();
producto2.mostrarInfo();