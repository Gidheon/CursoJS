//seleccionar elementos por su clase

const header = document.getElementsByClassName('header');
console.log(header);


const hero = document.getElementsByClassName('hero');
console.log(hero);


//si las clases existen mas de una vez
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

//si la calse no existe
const noExiste = document.getElementsByClassName('noExiste');
console.log(noExiste); //retorna un arreglo vacio