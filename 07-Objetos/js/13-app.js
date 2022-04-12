const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

//para obtener las llaves del objeto y saber si esta vacio
console.log(Object.keys(producto));

//retorna la parte de la derecha los valores
console.log(Object.values(producto));

//retorna todo lo anterior, en pares
console.log(Object.entries(producto));