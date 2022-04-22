const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('keydown', () => { //cuando se presiona la tecla
    console.log('escriendo ...');
});
 
busqueda.addEventListener('keyup', () => { //cuando se suelta la tecla
    console.log('cuando se suelta la tecla...');
});

busqueda.addEventListener('blur', () => { //cuando estas en input y haces click afuera
    console.log('cuando estas en input y haces click afuera ...');
});

busqueda.addEventListener('copy', () => { //cuando estas en input y haces copiar
    console.log('cuando estas en input y haces copiar ...');
});

busqueda.addEventListener('paste', () => { //cuando estas en input y haces pegar
    console.log('cuando estas en input y haces pegar ...');
});

busqueda.addEventListener('cut', () => { //cuando estas en input y haces cortar
    console.log('cuando estas en input y haces cortar...');
});

//en evt te dice lo que esta ocurriendo
busqueda.addEventListener('input', (evt) => { //cuando estas escribiendo cuando suieltas copias pegas etc todos los anteriores menos el blur
    console.log(evt.type); //el tipo de lo que se esta escribiendo
    console.log(evt.target.value); //lo que el usuario esta escribiendo

    if (evt.target.value === '') {
        console.log('fallo la validacion');
    }
});