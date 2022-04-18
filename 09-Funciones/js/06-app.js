function saludar(nombre = 'Desconocido', apellido = '') { //son variables y si se le coloca igual eso queda como parametro por default
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Eduardo', 'Ubilla');

saludar(); //traera undefined