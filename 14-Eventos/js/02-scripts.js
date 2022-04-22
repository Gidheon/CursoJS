const nav = document.querySelector('.navegacion');

//registrar un evento
/* nav.addEventListener('click',()=>{ //cuando se realiza el click
    console.log('click en nav');
});
 */
nav.addEventListener('mouseenter',()=>{ //cuando se entra a la zona de nav
    console.log('entrando en nav');
    nav.style.backgroundColor = 'white';
});
/* 
nav.addEventListener('mouseout',()=>{ //cuando se sale a la zona de nav
    console.log('saliendo en nav');
    nav.style.backgroundColor = 'transparent';
    
});

nav.addEventListener('mousedown',()=>{ //cuando se presiona el click a la zona de nav
    console.log('saliendo en nav');
    nav.style.backgroundColor = 'transparent';
    
});

nav.addEventListener('mouseup',()=>{ //cuando se suelta el click a la zona de nav
    console.log('saliendo en nav');
    nav.style.backgroundColor = 'transparent';
    
}); */

nav.addEventListener('dblclick',()=>{ //cuando se realiza el doble click a la zona de nav
    console.log('saliendo en nav');
    nav.style.backgroundColor = 'transparent';
    
});

