function sumar(a,b) { //a y b son parametros
    console.log(a+b);
}

sumar(2, 3); //son argumentos

function saludar(nombre, apellido) { //son variables
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Eduardo', 'Ubilla');

saludar(); //traera undefined