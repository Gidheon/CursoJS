
iniciarApp();

function iniciarApp() {
    console.log('iniciando app ...');
    segundaFuncion(); //se pueden a;adir funciones desde otra funciones 
};

function segundaFuncion() {
    console.log('Desde la segunda funcion');
    usuarioAutenticado('Eduardo');
}

function usuarioAutenticado(usuario) {
    console.log(`Autenticando ${usuario}... Espere...`);
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}