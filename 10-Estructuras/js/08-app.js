const autenticado = true;

if (autenticado) {
    console.log('El usuario esta autenticado');
}


const puntaje = 350;

function revisarPuntaje() {
    if (puntaje > 400) {
        console.log('Excelente');
    }
    
    if (puntaje > 300) {
        console.log('Buen puntaje... felicidades')
    }
}

revisarPuntaje();