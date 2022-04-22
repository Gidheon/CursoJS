const navegacion =document.querySelector('.navegacion');
console.log(navegacion.firstElementChild); //primer elemento
console.log(navegacion.lastElementChild); //ultimo elemento
/* console.log(navegacion.childNodes); //los exspacios en blancos son considerados elementos
console.log(navegacion.children); //lista elementos reales

console.log(navegacion.children[1].nodeName);
console.log(navegacion.children[1].nodeType); */

const card = document.querySelector('.card');

/* card.children[1].children[1].textContent = 'Nuevo heading desde traversing the dom';

console.log(card.children[1].children[1].textContent); //rescata el contenido

card.children[0].src = 'img/hacer3.jpg';
console.log(card.children[0]); */


//traversing del hijo al padre

/* console.log(card.parentNode); //incluye espacios en blancos
console.log(card.parentElement.parentElement.parentElement); //no incluye espacios en blanco y por ende es mas utilizado */
/* console.log(card);
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling); */


const ultimoCard =document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling); //regresa al elemento hermano antes

