const encabezado = document.querySelector('.contenido-hero h1').textContent; //trae directamente el string 
console.log(encabezado); 

/* 
console.log(encabezado.innerText); //respeta las propiedades y si esta hidden no lo muestra
console.log(encabezado.textContent); //trae si o si el contenido aunque este hidden
console.log(encabezado.innerHTML); //se trae el html
 */

/* const nuevoHeading = 'Nuevo heading';
document.querySelector('.contenido-hero h1').textContent = nuevoHeading; */

/* const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg'; para cambiar la imagen */