const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

//agregar nuevas propiedades al objeto
producto.imagen = 'imagen.jpg';

//eliminar propiedad  disponible
delete producto.disponible;

console.log(producto);