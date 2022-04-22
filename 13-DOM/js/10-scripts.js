const enlace = document.createElement('A');
//agregando texto
enlace.textContent = 'Nuevo Enlace';
//anadiendo el href
enlace.href = '/nuevo-enlace';
enlace.target = '_blank';
enlace.setAttribute('data-enlace','nuevo-enlace'); //para crear atributos personalizados
enlace.classList.add('alguna-clase'); //para agregar una nueva clase
console.log(enlace);

enlace.onclick = miFuncion;

//sleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace); //append child es para agregar un nuevo hijo
console.log(navegacion.children);
navegacion.insertBefore(enlace,navegacion.children[1]);

function miFuncion() {
    alert('Diste click');
};


//crear un card de forma dinamica
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

//crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'Texto Alternativo';

//crearel card
const card = document.createElement('div');
card.classList.add('card');

///Asignar la imagen
card.appendChild(imagen);

//asignar la info
card.appendChild(info);

//insertar en el html
const contenedor = document.querySelector('.hacer .contenedor-cards');

contenedor.insertBefore(card, contenedor.children[0]);
