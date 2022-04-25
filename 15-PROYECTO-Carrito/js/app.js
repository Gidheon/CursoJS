//variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventsListeners();

function cargarEventsListeners() {
    //Cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () =>{
        articulosCarrito = []; //reseetemos el arreglo

        limpiarHTML(); //eliminamos todo el html
    }); 
}



//funciones
function agregarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;

        leerDatosCurso(cursoSeleccionado);
    }

}

function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');
        //elimina del arreglo  de articulos carrito con id

        articulosCarrito = articulosCarrito.filter(curso=> curso.id !== cursoId);

        carritoHTML();
    }
}

//lee el contenido del html al que le dimos click y extrae informacion del curso
function leerDatosCurso(curso) {


    //crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //revisa si un elemnto ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if (existe) {
        //actualizamos la cantidad
        const cursos = articulosCarrito.map(curso=>{
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; //retorna objeto actualizado
            }else{
                return curso; //retorna los objetos que no son duplicados
            }
        });
        articulosCarrito = [...cursos];
    }else{
        //agregamos el curso al carrito
        //agrega elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
    }

    
    console.log(articulosCarrito);

    carritoHTML();
}


//muestra el carrito de compra en el html
function carritoHTML() {
    //limpiar el html
    limpiarHTML();

    articulosCarrito.forEach(curso => {
        const {imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width='100'>
            </td>

            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}" > X </a>
            </td>
        `;

        //Agrega el html del carrito al tbody
        contenedorCarrito.appendChild(row);
    });
}


//elimina los cursos del tbdoy
function limpiarHTML() {
    /* forma lenta
    contenedorCarrito.innerHTML = ''; */

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}