window.addEventListener('scroll', ()=>{
  /*   const scrollPX = window.scrollY;
    para saber cuantos pixeles se estan ejecutando con el scroll si subes se van restando si 
    bajas se van sumando
    console.log(scrollPX); */

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect(); //con esta funcion dice en que lugar se encuentra un elemento

    /* console.log(ubicacion); */

    if (ubicacion.top < 784) {
        console.log('El elemento ya esta visible'); 
    }else{
        console.log('Aun no, da mas scroll'); 
    }
});