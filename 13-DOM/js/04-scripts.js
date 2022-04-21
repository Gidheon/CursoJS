//El query selector maxiimo retorna 1 elemento
const card = document.querySelector('.card');
console.log(card);


//podemos tener selectores ewspecificos como en css
const info = document.querySelector('.premium .info');
console.log(info);

//seleccionar el segundo card de hospedaje con child
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

//se puede seleccionar elementos con su id
const formulario = document.querySelector('#formulario');
console.log(formulario);

//seleccionar elementos html
const navegacion =document.querySelector('nav');
console.log(navegacion);