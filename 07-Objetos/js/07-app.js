const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

producto.disponible = false;

delete producto.precio;

console.log(producto);

//aunque un objeto este declarado como const sus propiedades si se pueden reescribir